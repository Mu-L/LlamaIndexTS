import { BaseEmbedding } from "@llamaindex/core/embeddings";
import { getEnv } from "@llamaindex/env";
import { Tokenizers } from "@llamaindex/env/tokenizers";
import type {
  ClientOptions as OpenAIClientOptions,
  OpenAI as OpenAILLM,
} from "openai";

export const ALL_OPENAI_EMBEDDING_MODELS = {
  "text-embedding-ada-002": {
    dimensions: 1536,
    maxTokens: 8192,
    tokenizer: Tokenizers.CL100K_BASE,
  },
  "text-embedding-3-small": {
    dimensions: 1536,
    dimensionOptions: [512, 1536],
    maxTokens: 8192,
    tokenizer: Tokenizers.CL100K_BASE,
  },
  "text-embedding-3-large": {
    dimensions: 3072,
    dimensionOptions: [256, 1024, 3072],
    maxTokens: 8192,
    tokenizer: Tokenizers.CL100K_BASE,
  },
};

type ModelKeys = keyof typeof ALL_OPENAI_EMBEDDING_MODELS;

type LLMInstance = Pick<OpenAILLM, "embeddings" | "apiKey" | "baseURL">;

export class OpenAIEmbedding extends BaseEmbedding {
  /** embeddding model. defaults to "text-embedding-ada-002" */
  model: string;
  /** number of dimensions of the resulting vector, for models that support choosing fewer dimensions. undefined will default to model default */
  dimensions?: number | undefined;

  // OpenAI session params

  /** api key */
  apiKey?: string | undefined = undefined;
  /** base url */
  baseURL?: string | undefined = undefined;
  /** maximum number of retries, default 10 */
  maxRetries: number;
  /** timeout in ms, default 60 seconds  */
  timeout?: number | undefined;
  /** other session options for OpenAI */
  additionalSessionOptions?:
    | Omit<Partial<OpenAIClientOptions>, "apiKey" | "maxRetries" | "timeout">
    | undefined;

  // use lazy here to avoid check OPENAI_API_KEY immediately
  lazySession: () => Promise<LLMInstance>;
  #session: Promise<LLMInstance> | null = null;
  get session() {
    if (!this.#session) {
      this.#session = this.lazySession();
    }
    return this.#session;
  }

  /**
   * OpenAI Embedding
   * @param init - initial parameters
   */
  constructor(
    init?: Omit<Partial<OpenAIEmbedding>, "session"> & {
      session?: LLMInstance | undefined;
    },
  ) {
    super();

    this.model = init?.model ?? "text-embedding-ada-002";
    this.dimensions = init?.dimensions; // if no dimensions provided, will be undefined/not sent to OpenAI

    this.embedBatchSize = init?.embedBatchSize ?? 10;
    this.maxRetries = init?.maxRetries ?? 10;

    this.timeout = init?.timeout ?? 60 * 1000; // Default is 60 seconds
    this.additionalSessionOptions = init?.additionalSessionOptions;

    // find metadata for model
    const key = Object.keys(ALL_OPENAI_EMBEDDING_MODELS).find(
      (key) => key === this.model,
    ) as ModelKeys | undefined;
    if (key) {
      this.embedInfo = ALL_OPENAI_EMBEDDING_MODELS[key];
    }

    this.apiKey = init?.session?.apiKey ?? init?.apiKey; // Don't fallback to env here, handled in lazySession
    this.baseURL = init?.session?.baseURL ?? init?.baseURL; // Don't fallback to env here, handled in lazySession
    this.lazySession = async () =>
      init?.session ??
      import("openai").then(({ OpenAI }) => {
        return new OpenAI({
          apiKey: this.apiKey ?? getEnv("OPENAI_API_KEY"), // Fallback here
          baseURL: this.baseURL ?? getEnv("OPENAI_BASE_URL"), // Fallback here
          maxRetries: this.maxRetries,
          timeout: this.timeout!,
          ...this.additionalSessionOptions,
        });
      });
  }

  /**
   * Get embeddings for a batch of texts
   * @param texts
   * @param options
   */
  private async getOpenAIEmbedding(input: string[]): Promise<number[][]> {
    // TODO: ensure this for every sub class by calling it in the base class
    input = this.truncateMaxTokens(input);

    const { data } = await (
      await this.session
    ).embeddings.create(
      this.dimensions
        ? {
            model: this.model,
            dimensions: this.dimensions, // only sent to OpenAI if set by user
            input,
          }
        : {
            model: this.model,
            input,
          },
    );

    return data.map((d) => d.embedding);
  }

  /**
   * Get embeddings for a batch of texts
   * @param texts
   */
  getTextEmbeddings = async (texts: string[]): Promise<number[][]> => {
    return this.getOpenAIEmbedding(texts);
  };

  /**
   * Get embeddings for a single text
   * @param text
   */
  async getTextEmbedding(text: string): Promise<number[]> {
    return (await this.getOpenAIEmbedding([text]))[0]!;
  }
}

import {
  GenerativeModel as GoogleGenerativeModel,
  type EnhancedGenerateContentResponse,
  type Content as GeminiMessageContent,
  type FileDataPart as GoogleFileDataPart,
  type FunctionDeclaration as GoogleFunctionDeclaration,
  type FunctionDeclarationSchema as GoogleFunctionDeclarationSchema,
  type InlineDataPart as GoogleInlineFileDataPart,
  type ModelParams as GoogleModelParams,
  type Part as GooglePart,
  type RequestOptions as GoogleRequestOptions,
  type GenerateContentStreamResult as GoogleStreamGenerateContentResult,
} from "@google/generative-ai";

import {
  GenerativeModel as VertexGenerativeModel,
  GenerativeModelPreview as VertexGenerativeModelPreview,
  type GenerateContentResponse,
  type FileDataPart as VertexFileDataPart,
  type FunctionDeclaration as VertexFunctionDeclaration,
  type FunctionDeclarationSchema as VertexFunctionDeclarationSchema,
  type VertexInit,
  type InlineDataPart as VertexInlineFileDataPart,
  type ModelParams as VertexModelParams,
  type Part as VertexPart,
  type StreamGenerateContentResult as VertexStreamGenerateContentResult,
} from "@google-cloud/vertexai";

import type {
  ChatResponse,
  ChatResponseChunk,
  CompletionResponse,
  LLMChatParamsNonStreaming,
  LLMChatParamsStreaming,
  ToolCall,
  ToolCallLLMMessageOptions,
} from "@llamaindex/core/llms";

export { type RequestOptions as GoogleRequestOptions } from "@google/generative-ai";

export enum GEMINI_BACKENDS {
  GOOGLE = "google",
  VERTEX = "vertex",
}

export type GoogleGeminiSessionOptions = {
  apiKey?: string | undefined;
};

export type VertexGeminiSessionOptions = {
  preview?: boolean;
} & VertexInit;

export type GeminiSessionOptions =
  | (GoogleGeminiSessionOptions & { backend: GEMINI_BACKENDS.GOOGLE })
  | (VertexGeminiSessionOptions & { backend: GEMINI_BACKENDS.VERTEX });

export enum GEMINI_MODEL {
  GEMINI_PRO = "gemini-pro",
  GEMINI_PRO_VISION = "gemini-pro-vision",
  GEMINI_PRO_LATEST = "gemini-1.5-pro-latest",
  GEMINI_PRO_FLASH_LATEST = "gemini-1.5-flash-latest",
  GEMINI_PRO_1_5_PRO_PREVIEW = "gemini-1.5-pro-preview-0514",
  GEMINI_PRO_1_5_FLASH_PREVIEW = "gemini-1.5-flash-preview-0514",
  GEMINI_PRO_1_5 = "gemini-1.5-pro-001",
  GEMINI_PRO_1_5_FLASH = "gemini-1.5-flash-001",
  // Note: should be switched to -latest suffix when google supports it
  GEMINI_PRO_1_5_LATEST = "gemini-1.5-pro-002",
  GEMINI_PRO_1_5_FLASH_LATEST = "gemini-1.5-flash-002",
  GEMINI_2_0_FLASH_EXPERIMENTAL = "gemini-2.0-flash-exp",
  GEMINI_2_0_FLASH = "gemini-2.0-flash-001",
  GEMINI_2_0_FLASH_LITE = "gemini-2.0-flash-lite-001",
  GEMINI_2_0_FLASH_LITE_PREVIEW = "gemini-2.0-flash-lite-preview-02-05",
  GEMINI_2_0_FLASH_THINKING_EXP = "gemini-2.0-flash-thinking-exp-01-21",
  GEMINI_2_0_PRO_EXPERIMENTAL = "gemini-2.0-pro-exp-02-05",
  GEMINI_2_0_FLASH_LIVE = "gemini-2.0-flash-live-001",
  GEMINI_2_5_PRO_PREVIEW = "gemini-2.5-pro-preview-03-25",
  GEMINI_2_5_PRO_PREVIEW_LATEST = "gemini-2.5-pro-preview-06-05",
  GEMINI_2_5_FLASH_PREVIEW = "gemini-2.5-flash-preview-05-20",
}

export interface GeminiModelInfo {
  contextWindow: number;
}

export type Part = GooglePart | VertexPart;
export type FileDataPart = GoogleFileDataPart | VertexFileDataPart;
export type InlineDataPart =
  | GoogleInlineFileDataPart
  | VertexInlineFileDataPart;

export type ModelParams = GoogleModelParams | VertexModelParams;

export type FunctionDeclaration =
  | VertexFunctionDeclaration
  | GoogleFunctionDeclaration;

export type FunctionDeclarationSchema =
  | GoogleFunctionDeclarationSchema
  | VertexFunctionDeclarationSchema;

export type GenerativeModel =
  | VertexGenerativeModelPreview
  | VertexGenerativeModel
  | GoogleGenerativeModel;

export type ChatContext = { message: Part[]; history: GeminiMessageContent[] };

export type GeminiMessageRole = "user" | "model" | "function";

export type GeminiAdditionalChatOptions = object;

export type GeminiChatParamsStreaming = LLMChatParamsStreaming<
  GeminiAdditionalChatOptions,
  ToolCallLLMMessageOptions
>;

export type GeminiChatStreamResponse = AsyncIterable<
  ChatResponseChunk<ToolCallLLMMessageOptions>
>;

export type GeminiChatParamsNonStreaming = LLMChatParamsNonStreaming<
  GeminiAdditionalChatOptions,
  ToolCallLLMMessageOptions
>;

export type GeminiChatNonStreamResponse =
  ChatResponse<ToolCallLLMMessageOptions>;

export interface IGeminiSession {
  getGenerativeModel(
    metadata: ModelParams,
    requestOptions?: GoogleRequestOptions,
  ): GenerativeModel;
  getResponseText(
    response: EnhancedGenerateContentResponse | GenerateContentResponse,
  ): string;
  getCompletionStream(
    result:
      | GoogleStreamGenerateContentResult
      | VertexStreamGenerateContentResult,
  ): AsyncIterable<CompletionResponse>;
  getChatStream(
    result:
      | GoogleStreamGenerateContentResult
      | VertexStreamGenerateContentResult,
  ): GeminiChatStreamResponse;
  getToolsFromResponse(
    response: EnhancedGenerateContentResponse | GenerateContentResponse,
  ): ToolCall[] | undefined;
}

export type GeminiLiveMessage = {
  content: string | GeminiLiveMessageDetail;
  role: "user" | "model";
};

export type GeminiLiveMessageDetail = {
  type: "text" | "audio" | "image" | "video";
  data: string;
  mimeType: string;
};

export type GeminiVoiceName =
  | "Puck"
  | "Charon"
  | "Fenrir"
  | "Aoede"
  | "Leda"
  | "Kore"
  | "Orus"
  | "Zephyr";

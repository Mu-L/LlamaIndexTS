# @llamaindex/core-e2e

## 0.1.1

### Patch Changes

- b0cd530: # Breaking Change

  ## What Changed

  Remove default setting of llm and embedModel in Settings

  ## Migration Guide

  Set the llm provider and embed Model in the top of your code using Settings.llm = and Settings.embedModel

## 0.1.0

### Minor Changes

- 6a4a737: Remove re-exports from llamaindex main package

## 0.0.8

### Patch Changes

- 34faf48: chore: move vector stores to their own packages
- 9456616: refactor: @llamaindex/postgres

## 0.0.7

### Patch Changes

- bf25ff6: fix: polyfill for cloudflare worker

## 0.0.6

### Patch Changes

- 34fb1d8: fix: cloudflare dev

## 0.0.5

### Patch Changes

- c3747d0: fix: import `@xenova/transformers`

  For now, if you use llamaindex in next.js, you need to add a plugin from `llamaindex/next` to ensure some module resolutions are correct.

## 0.0.4

### Patch Changes

- be5df5b: fix: anthropic agent on multiple chat

## 0.0.3

### Patch Changes

- 61103b6: fix: streaming for `Agent.createTask` API

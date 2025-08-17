import { OpenAIProvider } from "./openai";
import { GeminiProvider } from "./gemini";
import type { LLMProvider } from "./types";

export function getLLM(): LLMProvider {
  const which = (process.env.LLM_PROVIDER || "openai").toLowerCase();
  if (which === "gemini") return new GeminiProvider();
  return new OpenAIProvider();
}

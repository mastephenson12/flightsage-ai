import OpenAI from "openai";
import type { ChatMessage, LLMProvider } from "./types";

export class OpenAIProvider implements LLMProvider {
  private client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
  private model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  async chat(messages: ChatMessage[], opts?: { temperature?: number }) {
    const resp = await this.client.chat.completions.create({
      model: this.model,
      messages,
      temperature: opts?.temperature ?? 0.3,
    });
    return resp.choices[0]?.message?.content ?? "";
  }
}

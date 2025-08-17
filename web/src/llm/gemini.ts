import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatMessage, LLMProvider } from "./types";

export class GeminiProvider implements LLMProvider {
  private genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  private model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
  async chat(messages: ChatMessage[], opts?: { temperature?: number }) {
    const m = this.genAI.getGenerativeModel({ model: this.model });
    const prompt = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join("\n\n");
    const r = await m.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }]}],
      generationConfig: { temperature: opts?.temperature ?? 0.3 },
    });
    return r.response.text();
  }
}

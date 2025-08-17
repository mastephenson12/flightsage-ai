export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };
export interface LLMProvider { chat(messages: ChatMessage[], opts?: { temperature?: number }): Promise<string>; }

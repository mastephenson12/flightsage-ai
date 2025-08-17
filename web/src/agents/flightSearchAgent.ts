import { z } from "zod";
import { getLLM } from "@/llm";
import type { ChatMessage } from "@/llm/types";

const SearchSchema = z.object({
  origin: z.string().min(3),
  destination: z.string().min(3),
  departDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  returnDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  maxBudget: z.number().optional(),
});
export type SearchRequest = z.infer<typeof SearchSchema>;

function hasKeys() {
  const prov = (process.env.LLM_PROVIDER || "openai").toLowerCase();
  if (prov === "gemini") return !!process.env.GEMINI_API_KEY;
  return !!process.env.OPENAI_API_KEY;
}

export async function planSearch(req: SearchRequest) {
  SearchSchema.parse(req);

  if (!hasKeys()) {
    return `Planned search:
- Provider: ${process.env.LLM_PROVIDER || "openai"} (no API key found; using mock)
- Origin: ${req.origin}, Destination: ${req.destination}
- Dates: ${req.departDate}${req.returnDate ? " → " + req.returnDate : ""}
User note: This is a demo response. Add API keys in .env.local to generate AI-written plans.`;
  }

  const llm = getLLM();
  const system: ChatMessage = {
    role: "system",
    content: "You are FlightSage. Draft a concise search plan and user-facing summary.",
  };
  const user: ChatMessage = {
    role: "user",
    content: `User request JSON: ${JSON.stringify(req)}. Produce:
1) A search plan (bullet list of API calls or filters),
2) A 2–3 sentence explanation for the user.`,
  };
  const text = await llm.chat([system, user], { temperature: 0.2 });
  return text;
}

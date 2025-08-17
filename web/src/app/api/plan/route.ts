import { NextResponse } from "next/server";
import { planSearch } from "@/agents/flightSearchAgent";

export async function POST(req: Request) {
  const body = await req.json();
  const msg = await planSearch(body);
  return NextResponse.json({ message: msg });
}

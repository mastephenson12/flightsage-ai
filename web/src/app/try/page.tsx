"use client";
import { useState } from "react";

export default function TryPage() {
  const [payload, setPayload] = useState({
    origin: "PHX",
    destination: "AUS",
    departDate: "2025-09-12",
    returnDate: "2025-09-16",
    maxBudget: 300,
  });
  const [out, setOut] = useState("");

  async function go() {
    const r = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const j = await r.json();
    setOut(j.message);
  }

  return (
    <main style={{ padding: 24, display: "grid", gap: 12 }}>
      <h1>FlightSage: Multi-Provider Check</h1>
      <textarea
        value={JSON.stringify(payload, null, 2)}
        onChange={(e) => setPayload(JSON.parse(e.target.value))}
        rows={10}
        style={{ width: 600 }}
      />
      <button onClick={go}>Test Plan</button>
      <pre style={{ whiteSpace: "pre-wrap" }}>{out}</pre>
    </main>
  );
}

// src/app/api/search/route.ts
import { NextResponse } from "next/server";

type SearchBody = {
  origin: string;
  destination: string;
  departDate: string;
  returnDate?: string;
  maxBudget?: number;
};

function makeMockFlights(body: SearchBody) {
  const b = body;
  const flights = [
    {
      id: "PHX-AUS-101",
      airline: "Sage Air",
      flightNumber: "SA101",
      depart: `${b.departDate} 07:10`,
      arrive: `${b.departDate} 10:55`,
      origin: b.origin,
      destination: b.destination,
      duration: "2h 45m",
      stops: 0,
      price: 189,
    },
    {
      id: "PHX-AUS-202",
      airline: "Canyon Jet",
      flightNumber: "CJ202",
      depart: `${b.departDate} 13:35`,
      arrive: `${b.departDate} 17:20`,
      origin: b.origin,
      destination: b.destination,
      duration: "3h 45m",
      stops: 1,
      price: 149,
    },
    {
      id: "PHX-AUS-303",
      airline: "Mesa Sky",
      flightNumber: "MS303",
      depart: `${b.departDate} 19:05`,
      arrive: `${b.departDate} 22:40`,
      origin: b.origin,
      destination: b.destination,
      duration: "2h 35m",
      stops: 0,
      price: 219,
    },
    // 👇 Your test flight
    {
      id: "TEST-000",
      airline: "TestAir",
      flightNumber: "TA123",
      depart: `${b.departDate} 11:11`,
      arrive: `${b.departDate} 12:34`,
      origin: b.origin,
      destination: b.destination,
      duration: "1h 23m",
      stops: 0,
      price: 123,
    },
  ];

  // Optional budget filter used by the /try payload
  return flights.filter(f => (b.maxBudget ? f.price <= b.maxBudget : true));
}

// Handle POST (used by /try "Search Dummy Flights" button)
export async function POST(req: Request) {
  const body = (await req.json()) as SearchBody;
  const flights = makeMockFlights(body);
  return NextResponse.json({ flights });
}

// Optional: handle GET so /api/search in the browser also shows something
export async function GET() {
  const flights = makeMockFlights({
    origin: "PHX",
    destination: "AUS",
    departDate: "2025-09-12",
    returnDate: "2025-09-16",
    maxBudget: 9999,
  });
  return NextResponse.json({ flights });
}


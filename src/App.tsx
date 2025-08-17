import React, { useState } from "react";
import {
  Users, Plane, Hotel, Car, Ticket, Headphones, ShieldCheck,
  Calendar, Map, Sparkles, CheckCircle2, LogIn
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Tab = "flights" | "hotels" | "cars" | "attractions";

export default function App() {
  const [tab, setTab] = useState<Tab>("flights");
  const [groupSize, setGroupSize] = useState(8);
  const [from, setFrom] = useState("New York (JFK)");
  const [to, setTo] = useState("Los Angeles (LAX)");
  const [depart, setDepart] = useState("");
  const [ret, setRet] = useState("");
  const [showResults, setShowResults] = useState(false);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    setShowResults(true); // show the results panel on the same page
    scrollToId("results");
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/75 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              FS
            </span>
            <span>FlightSage&nbsp;AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="hover:text-indigo-600" onClick={() => scrollToId("groups")}>Group Bookings</button>
            <button className="hover:text-indigo-600" onClick={() => scrollToId("manage")}>Manage Trip</button>
            <button className="hover:text-indigo-600" onClick={() => scrollToId("support")}>Support</button>
          </nav>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1 px-3 py-2 text-sm rounded-lg border border-slate-300 hover:bg-slate-100" onClick={() => alert("Sign-in coming soon")}>
              <LogIn className="h-4 w-4"/> Sign In
            </button>
            <button className="inline-flex items-center px-3 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700" onClick={() => scrollToId("groups")}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero + Booking */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Group Travel <span className="text-indigo-600">Made Simple</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Book flights, hotels, rental cars, and attractions for your entire group with exclusive discounts,
              coordinated itineraries, and seamless group management—perfect for national parks to cultural sites.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600"/> Secure Booking</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-amber-500"/> 4.9/5 Rating</span>
              <span className="inline-flex items-center gap-1"><Headphones className="h-4 w-4 text-indigo-600"/> 24/7 Support</span>
            </div>
          </div>

          {/* Booking card */}
          <div id="groups" className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
            {/* tabs */}
            <div className="flex gap-2 text-sm font-medium">
              <Tab icon={<Plane className="h-4 w-4" />} label="Flights" active={tab==="flights"} onClick={() => setTab("flights")} />
              <Tab icon={<Hotel className="h-4 w-4" />} label="Hotels" active={tab==="hotels"} onClick={() => setTab("hotels")} />
              <Tab icon={<Car className="h-4 w-4" />} label="Rental Cars" active={tab==="cars"} onClick={() => setTab("cars")} />
              <Tab icon={<Ticket className="h-4 w-4" />} label="Attractions" active={tab==="attractions"} onClick={() => setTab("attractions")} />
            </div>

            <form className="mt-4 grid gap-3" onSubmit={onSearch}>
              <Label>Group Size</Label>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500"/>
                <input
                  type="number" min={1} max={99}
                  value={groupSize}
                  onChange={e=>setGroupSize(Number(e.target.value))}
                  className="w-28 rounded-lg border border-slate-300 px-3 py-2"
                />
                <span className="text-sm text-slate-600">Groups of 6+ qualify for exclusive discounts</span>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="grid gap-1">
                  <Label>From</Label>
                  <input value={from} onChange={e=>setFrom(e.target.value)}
                         placeholder="City or airport" className="rounded-lg border border-slate-300 px-3 py-2"/>
                </div>
                <div className="grid gap-1">
                  <Label>To</Label>
                  <input value={to} onChange={e=>setTo(e.target.value)}
                         placeholder="City or airport" className="rounded-lg border border-slate-300 px-3 py-2"/>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="grid gap-1">
                  <Label>Departure</Label>
                  <input type="date" value={depart} onChange={e=>setDepart(e.target.value)}
                         className="rounded-lg border border-slate-300 px-3 py-2"/>
                </div>
                <div className="grid gap-1">
                  <Label>Return</Label>
                  <input type="date" value={ret} onChange={e=>setRet(e.target.value)}
                         className="rounded-lg border border-slate-300 px-3 py-2"/>
                </div>
              </div>

              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700">
                Search Flights
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why choose section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Why Choose FlightSage for Group Travel?</h2>
        <p className="mt-2 text-slate-700">
          We make group travel seamless, affordable, and stress-free with features built for coordinating multiple travelers.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature icon={<Badge icon={<Users/>}/>} title="Exclusive Group Discounts" text="Save 15–30% on flights, hotels, and rental cars when booking for 6+ people." />
          <Feature icon={<Badge icon={<Calendar/>}/>} title="Coordinated Itineraries" text="Synchronized bookings and shared calendars keep everyone aligned." />
          <Feature icon={<Badge icon={<Users/>}/>} title="Group Management" text="Manage traveler details, preferences, and special requirements." />
          <Feature icon={<Badge icon={<Headphones/>}/>} title="Dedicated Support" text="24/7 specialists for changes, cancellations, and emergencies." />
          <Feature icon={<Badge icon={<ShieldCheck/>}/>} title="Flexible Policies" text="Group-friendly cancellation and change options." />
          <Feature icon={<Badge icon={<Plane/>}/>} title="Premium Experience" text="Priority check-in, seat selection, and group amenities." />
          <Feature icon={<Badge icon={<Map/>}/>} title="Complete Experiences" text="Add attractions, parks, and activities to the same plan." />
          <Feature icon={<Badge icon={<Sparkles/>}/>} title="Curated Adventures" text="Hidden gems and must-see spots with local tips." />
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-6xl px-4 py-10">
        {showResults ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold">Search Results</h2>
            <p className="mt-2 text-slate-700">
              Showing example results for <b>{from}</b> → <b>{to}</b> for <b>{groupSize}</b> travelers{depart ? <> departing <b>{depart}</b></> : null}{ret ? <> returning <b>{ret}</b></> : null}.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Airline {i+1}</div>
                    <div className="text-indigo-600 font-bold">${(220 + i*30) * Math.max(1, Math.min(groupSize, 10))}</div>
                  </div>
                  <div className="mt-1 text-sm text-slate-600">Nonstop · 5h 50m · Group seats available</div>
                  <button className="mt-3 inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
                          onClick={() => alert("This is a demo. Hook up your API here.")}>
                    Select
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </section>

      {/* Manage & Support sections (for the header links) */}
      <section id="manage" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Manage Trip</h2>
        <p className="mt-2 text-slate-700">Upload traveler lists, seat preferences, and special requirements. (Coming soon.)</p>
      </section>

      <section id="support" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Support</h2>
        <p className="mt-2 text-slate-700">24/7 group travel specialists. Email support@flightsage.ai (placeholder).</p>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="font-semibold">FlightSage AI</div>
          <div className="flex gap-4">
            <a className="hover:text-indigo-600" href="#">Privacy Policy</a>
            <a className="hover:text-indigo-600" href="#">Terms of Service</a>
            <a className="hover:text-indigo-600" href="#support">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-slate-700">{children}</label>;
}

function Tab({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 border ${active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"}`}
    >
      {icon}<span>{label}</span>
    </button>
  );
}

function Badge({ icon }: { icon: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
      {icon}
    </span>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        {icon}
        <div className="font-semibold">{title}</div>
      </div>
      <p className="mt-2 text-sm text-slate-700">{text}</p>
    </div>
  );
}

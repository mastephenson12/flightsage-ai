import "./globals.css";
export const metadata = { title: "FlightSage", description: "Find smart flight deals" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ isolation: "isolate" }}>{children}</body>
    </html>
  );
}

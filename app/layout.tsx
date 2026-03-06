import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloom | Stage · Youth · Events",
  description: "Bloom is a Nigerian creative brand uniting theatre arts, youth empowerment, and premium event planning.",
  keywords: ["Nigeria", "theatre", "youth hub", "event planning", "Lagos"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

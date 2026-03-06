"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1C1C1E]/95 backdrop-blur-md shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-[#9B1B30] text-3xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
            B
          </span>
          <span className="text-[#F5ECD7] text-xl tracking-widest uppercase" style={{ fontFamily: "DM Sans, sans-serif" }}>
            loom
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "/" },
            { label: "Drama", href: "/drama" },
            { label: "Youth Hub", href: "/youth" },
            { label: "Events", href: "/events" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#F5ECD7]/70 hover:text-[#C9A84C] text-sm tracking-wider uppercase transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/events#booking"
            className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] text-sm px-5 py-2 tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-crimson/30"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#F5ECD7] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5ECD7] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5ECD7] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1C1C1E]/98 backdrop-blur-md px-6 py-6 flex flex-col gap-5 border-t border-[#9B1B30]/20">
          {[
            { label: "Home", href: "/" },
            { label: "Drama", href: "/drama" },
            { label: "Youth Hub", href: "/youth" },
            { label: "Events", href: "/events" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F5ECD7]/80 hover:text-[#C9A84C] text-base tracking-wider uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/events#booking" onClick={() => setMenuOpen(false)}
            className="bg-[#9B1B30] text-[#F5ECD7] text-sm px-5 py-3 text-center tracking-wider uppercase mt-2">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
      setEmail("");
    } catch {
      setSubscribed(true);
    }
  };

  const socials = [
    { icon: <FaInstagram size={16} />, href: "https://instagram.com/bloomng", label: "Instagram" },
    { icon: <FaXTwitter size={16} />, href: "https://twitter.com/bloomng", label: "Twitter/X" },
    { icon: <FaYoutube size={16} />, href: "https://youtube.com/@bloomng", label: "YouTube" },
    { icon: <FaTiktok size={16} />, href: "https://tiktok.com/@bloomng", label: "TikTok" },
  ];

  return (
    <footer className="bg-[#0A0A0B] border-t border-[#9B1B30]/20 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-3">Stay Connected</p>
          <h3 className="text-[#F5ECD7] text-3xl md:text-4xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Join the Bloom Community
          </h3>
          {subscribed ? (
            <p className="text-[#C9A84C] text-lg">Thank you for subscribing! 🌸</p>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-[#1C1C1E] border border-[#9B1B30]/30 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-[#9B1B30] text-3xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>B</span>
            <span className="text-[#F5ECD7] text-xl tracking-widest uppercase">loom</span>
            <p className="text-[#F5ECD7]/40 text-sm mt-3 leading-relaxed">
              Where passion meets purpose. A Nigerian creative brand built for community.
            </p>
          </div>

          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[{ l: "Home", h: "/" }, { l: "Drama", h: "/drama" }, { l: "Youth Hub", h: "/youth" }, { l: "Events", h: "/events" }].map(i => (
                <li key={i.h}><Link href={i.h} className="text-[#F5ECD7]/60 hover:text-[#F5ECD7] text-sm transition-colors">{i.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Legal</h4>
            <ul className="space-y-2">
              {[{ l: "Privacy Policy", h: "/privacy" }, { l: "Terms of Use", h: "/terms" }, { l: "Cookie Policy", h: "/cookies" }].map(i => (
                <li key={i.h}><Link href={i.h} className="text-[#F5ECD7]/60 hover:text-[#F5ECD7] text-sm transition-colors">{i.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-[#F5ECD7]/60 text-sm">
              <li>Lagos, Nigeria</li>
              <li><a href="mailto:hello@bloomng.com" className="hover:text-[#F5ECD7] transition-colors">hello@bloomng.com</a></li>
              <li><a href="https://wa.me/2340000000000" target="_blank" rel="noreferrer" className="hover:text-[#C9A84C] transition-colors">WhatsApp Us</a></li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-[#9B1B30]/30 flex items-center justify-center text-[#F5ECD7]/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#9B1B30]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#F5ECD7]/30 text-xs">© {new Date().getFullYear()} Bloom. All rights reserved.</p>
          <p className="text-[#F5ECD7]/30 text-xs">Crafted with passion in Lagos, Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}

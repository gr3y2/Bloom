"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBoxes from "@/components/ui/FloatingBoxes";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const events = [
  { name: "Wedding & Introduction Ceremonies", icon: "💍", desc: "Full-service wedding coordination from traditional introduction to white wedding reception.", price: "From ₦500,000", range: "50–1000 guests" },
  { name: "Birthday Celebrations", icon: "🎂", desc: "Milestone birthdays curated with precision — themes, décor, catering coordination, entertainment.", price: "From ₦150,000", range: "20–500 guests" },
  { name: "Corporate Events", icon: "🤝", desc: "Product launches, award nights, team retreats and company celebrations executed with elegance.", price: "From ₦300,000", range: "30–800 guests" },
  { name: "Baby Showers & Naming Ceremonies", icon: "👶", desc: "Warm, intimate celebrations welcoming new life into the world with African flair and modern style.", price: "From ₦80,000", range: "20–200 guests" },
  { name: "Graduation Parties", icon: "🎓", desc: "Mark your achievement with a celebration as significant as the degree. Lagos-wide and beyond.", price: "From ₦100,000", range: "30–300 guests" },
  { name: "Cultural & Traditional Events", icon: "🎋", desc: "Aso-ebi coordination, traditional ceremonies, Owambe parties done right — with a premium touch.", price: "From ₦200,000", range: "50–2000 guests" },
];

const pastEvents = [
  { name: "Adaeze's White Wedding", location: "Eko Hotel, Lagos", guests: "350 guests", year: "2024", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
  { name: "Tech Naija Summit", location: "Victoria Island, Lagos", guests: "600 guests", year: "2024", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { name: "Chiamaka's 30th Birthday Gala", location: "Transcorp Hilton, Abuja", guests: "180 guests", year: "2023", img: "https://images.unsplash.com/photo-1464366400600-ac59130369f0?w=600&q=80" },
  { name: "Okafor-Eze Traditional Wedding", location: "Enugu", guests: "500 guests", year: "2023", img: "https://images.unsplash.com/photo-1478720568477-152d9b92543f?w=600&q=80" },
];

export default function EventsPage() {
  return (
    <main className="relative bg-[#1C1C1E] min-h-screen overflow-x-hidden">
      <FloatingBoxes />
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(28,28,30,0.6) 0%, rgba(155,27,48,0.15) 50%, rgba(28,28,30,0.7) 100%), url('https://images.unsplash.com/photo-1757041952089-3192e03e5150?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljdHVyZXMlMjByZWxhdGluZyUyMHRvJTIwZXZlbnRzJTIwb3IlMjB3ZWRkaW5ncyUyMG9yJTIwcGFydGllcyUyMGZvciUyMG1hdHVyZWQlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm tracking-[0.4em] uppercase mb-4">
            Bloom Events
          </p>
          <h1
            className="text-[#F5ECD7] text-5xl md:text-7xl leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Moments Made<br /><em className="text-[#9B1B30]">Unforgettable</em>
          </h1>
          <p className="text-[#F5ECD7]/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Nigeria&apos;s premium event planning experience. From Lagos weddings to Abuja galas — we design celebrations that live forever in memory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#9B1B30]/30">
              Book a Consultation
            </a>
            <a href="#portfolio" className="border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300">
              View Our Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[#F5ECD7] text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#F5ECD7] to-transparent animate-pulse" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Our Process</p>
            <h2 className="text-[#F5ECD7] text-4xl mb-16" style={{ fontFamily: "Playfair Display, serif" }}>How It Works</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: "💬", title: "Consultation", desc: "We start with a detailed conversation about your vision, budget, timeline, and guest count. We listen before we plan." },
              { step: "02", icon: "📐", title: "Planning & Design", desc: "Our team designs your event concept — theme, décor, vendor coordination, timeline, and every detail between." },
              { step: "03", icon: "✨", title: "Day-of Execution", desc: "We handle everything on the day. You show up as a guest at your own event. We handle the rest." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 150}>
                <div className="text-center p-6 border border-[#9B1B30]/10 hover:border-[#9B1B30]/30 transition-all duration-300">
                  <span className="text-[#9B1B30]/20 text-5xl font-bold block mb-2" style={{ fontFamily: "Playfair Display, serif" }}>{s.step}</span>
                  <span className="text-3xl block mb-3">{s.icon}</span>
                  <h3 className="text-[#F5ECD7] text-lg mb-3" style={{ fontFamily: "Playfair Display, serif" }}>{s.title}</h3>
                  <p className="text-[#F5ECD7]/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / PRICING */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">What We Plan</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>Our Event Packages</h2>
              <p className="text-[#F5ECD7]/50 mt-3 text-sm max-w-md mx-auto">All prices are starting points. Final quotes are personalized to your vision and scale.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((evt, i) => (
              <ScrollReveal key={evt.name} delay={i * 100}>
                <div className="bg-[#0A0A0B] border border-[#9B1B30]/10 p-6 hover:border-[#9B1B30]/40 hover-lift transition-all duration-300 group">
                  <span className="text-3xl mb-4 block">{evt.icon}</span>
                  <h3 className="text-[#F5ECD7] text-lg mb-2 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>{evt.name}</h3>
                  <p className="text-[#F5ECD7]/50 text-sm leading-relaxed mb-4">{evt.desc}</p>
                  <div className="border-t border-[#9B1B30]/10 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[#9B1B30] text-sm font-semibold">{evt.price}</p>
                      <p className="text-[#F5ECD7]/30 text-xs">{evt.range}</p>
                    </div>
                    <a href="#booking" className="text-[#C9A84C] text-xs tracking-widest uppercase border-b border-[#C9A84C]/30 hover:border-[#C9A84C] pb-0.5 transition-all">
                      Book →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS / PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Our Portfolio</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>Events We&apos;ve Created</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((evt, i) => (
              <ScrollReveal key={evt.name} delay={i * 150}>
                <div className="group relative overflow-hidden aspect-[16/9] bg-[#1C1C1E]">
                  <img src={evt.img} alt={evt.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">{evt.year}</p>
                    <h3 className="text-[#F5ECD7] text-xl mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{evt.name}</h3>
                    <p className="text-[#F5ECD7]/50 text-xs">{evt.location} · {evt.guests}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOOD BOARD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Aesthetics & Inspiration</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>Our Mood Boards</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["photo-1478720568477-152d9b92543f","photo-1464366400600-ac59130369f0","photo-1504610926078-a1611febcad3","photo-1519741497674-611481863552",
              "photo-1530103862676-de8c9debad1d","photo-1533174072545-7a4b6ad7a6c3","photo-1513151233558-d860c5398176","photo-1464366400600-ac59130369f0"].map((id, i) => (
              <ScrollReveal key={`${id}-${i}`} delay={i * 50}>
                <div className="aspect-square overflow-hidden bg-[#0A0A0B] border border-[#9B1B30]/10">
                  <img src={`https://images.unsplash.com/photo-${id}?w=400&q=70`} alt="" className="w-full h-full object-cover opacity-50 hover:opacity-80 hover:scale-110 transition-all duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENDORS */}
      <section className="py-16 px-6 bg-[#0A0A0B] text-center">
        <ScrollReveal>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-8">Our Trusted Vendor Network</p>
          <div className="flex flex-wrap gap-8 items-center justify-center max-w-3xl mx-auto">
            {["Photography NG", "Floral Luxe Lagos", "Naija Caterers Co.", "DJ Maestro Events", "Premium Tents & Décor", "Elegance Print"].map(v => (
              <span key={v} className="text-[#F5ECD7]/20 text-sm tracking-wider hover:text-[#F5ECD7]/50 transition-colors cursor-pointer">{v}</span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Common Questions</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>FAQ</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { q: "Do you handle events outside Lagos?", a: "Yes! We have coordinated events in Abuja, Port Harcourt, Enugu, and Ibadan. Travel fees may apply for distant venues." },
              { q: "How far in advance should I book?", a: "We recommend 3–6 months for weddings and 4–8 weeks for smaller events. That said, we always try to accommodate urgent requests." },
              { q: "What is your deposit policy?", a: "We require a 40% deposit to begin planning, with 40% due one month before the event and 20% on the day of execution." },
              { q: "Do you provide vendors or can I bring my own?", a: "We have a trusted vendor network, but we're happy to work with your preferred vendors. We just require adequate time to coordinate with them." },
            ].map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 100}>
                <details className="group border border-[#9B1B30]/10 hover:border-[#9B1B30]/30 transition-all duration-300">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-[#F5ECD7] text-sm font-medium">{faq.q}</span>
                    <span className="text-[#C9A84C] group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-[#F5ECD7]/60 text-sm leading-relaxed">{faq.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Get Started</p>
              <h2 className="text-[#F5ECD7] text-4xl mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Book a Free Consultation</h2>
              <p className="text-[#F5ECD7]/60 text-sm">Fill in your details and we&apos;ll reach out within 24 hours to schedule your planning session.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors w-full" required />
                <input type="tel" placeholder="Phone Number (WhatsApp preferred)" className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors w-full" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7]/60 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors w-full">
                  <option value="">Type of Event</option>
                  <option>Wedding</option><option>Birthday</option><option>Corporate Event</option>
                  <option>Naming Ceremony</option><option>Graduation</option><option>Traditional Ceremony</option><option>Other</option>
                </select>
                <input type="date" className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7]/60 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7]/60 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors w-full">
                  <option value="">Expected Guest Count</option>
                  <option>Under 50</option><option>50–100</option><option>100–250</option>
                  <option>250–500</option><option>500–1000</option><option>1000+</option>
                </select>
                <select className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7]/60 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors w-full">
                  <option value="">Budget Range</option>
                  <option>Under ₦100k</option><option>₦100k–₦300k</option><option>₦300k–₦700k</option>
                  <option>₦700k–₦1.5M</option><option>₦1.5M+</option>
                </select>
              </div>
              <textarea rows={4} placeholder="Tell us about your event vision..." className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" />
              <button type="submit" className="w-full bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#9B1B30]/30">
                Submit Booking Request
              </button>
              <p className="text-center text-[#F5ECD7]/30 text-xs">Or reach us directly: <a href="https://wa.me/2348000000000" className="text-[#C9A84C] hover:text-[#F5ECD7] transition-colors">WhatsApp us →</a></p>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phone="2347034504387" />
    </main>
  );
}

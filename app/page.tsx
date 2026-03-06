"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBoxes from "@/components/ui/FloatingBoxes";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative bg-[#1C1C1E] min-h-screen overflow-x-hidden">
      <FloatingBoxes />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(28,28,30,0.55) 0%, rgba(155,27,48,0.08) 50%, rgba(28,28,30,0.65) 100%), url('https://images.unsplash.com/photo-1768381937064-0cff674a09ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#9B1B30]/30 to-transparent" />
        <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#9B1B30]/30 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#C9A84C] text-sm md:text-base tracking-[0.4em] uppercase mb-6">
            Lagos, Nigeria · Est. 2024
          </p>
          <h1
            className="text-[#F5ECD7] text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Where Stories{" "}
            <em className="text-[#9B1B30]">Bloom</em>
          </h1>
          <p className="text-[#F5ECD7]/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A Nigerian creative brand uniting the passion of theatre, the growth of youth,
            and the elegance of unforgettable celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#branches"
              className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#9B1B30]/30"
            >
              Explore Bloom
            </Link>
            <Link
              href="/events"
              className="border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#C9A84C]/5"
            >
              Book an Event
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[#F5ECD7] text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#F5ECD7] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">About the Brand</p>
            <h2 className="text-[#F5ECD7] text-4xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              One Brand.<br />
              <em className="text-[#9B1B30]">Three Worlds.</em>
            </h2>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-6">
              Bloom was born from a deep love for Nigerian culture, storytelling, and community.
              We believe every person deserves a stage, whether that&apos;s the theatre, the boardroom, 
              or a celebration that lives forever in memory.
            </p>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-8">
              Founded by a passionate creative in Lagos, Bloom is not just a brand, it&apos;s a movement.
              We create spaces where artists perform, youths grow, and moments become milestones.
            </p>
            <Link href="#branches" className="text-[#C9A84C] text-sm tracking-widest uppercase border-b border-[#C9A84C]/30 hover:border-[#C9A84C] pb-1 transition-all">
              Discover Our Branches →
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="bg-[#2C2C2E] aspect-[4/3] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80"
                  alt="Bloom Brand"
                  className="w-full h-full object-cover opacity-70 hover:opacity-90 hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#9B1B30]/40" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#C9A84C]/30" />
              <div className="absolute bottom-6 left-6 bg-[#1C1C1E]/90 backdrop-blur-sm border border-[#9B1B30]/20 px-5 py-4">
                <p className="text-[#C9A84C] text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>3+</p>
                <p className="text-[#F5ECD7]/60 text-xs tracking-wider uppercase">Creative Branches</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="relative py-20 px-6 bg-[#0A0A0B]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-24 h-[1px] bg-[#9B1B30]/40 mx-auto mb-8" />
            <blockquote className="text-[#F5ECD7]/80 text-2xl md:text-3xl leading-relaxed mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              &ldquo;I didn&apos;t just want to build a business. I wanted to build a community,
              a place where Nigerians could see themselves, celebrate themselves, and become themselves.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#9B1B30]/20 border border-[#9B1B30]/40 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-[#F5ECD7] text-sm font-medium">The Founder</p>
                <p className="text-[#C9A84C] text-xs tracking-wider">Ms Lola</p>
              </div>
            </div>
            <div className="w-24 h-[1px] bg-[#9B1B30]/40 mx-auto mt-8" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BRANCHES / EXPLORER SECTION ===== */}
      <section id="branches" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Our Branches</p>
              <h2 className="text-[#F5ECD7] text-4xl md:text-5xl" style={{ fontFamily: "Playfair Display, serif" }}>
                Explore the World of <em className="text-[#9B1B30]">Bloom</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bloom Stage",
                subtitle: "Theatre Arts",
                desc: "Step into the world of dramatic storytelling. From stage performances to script workshops, we bring the richness of Nigerian theatre to life.",
                icon: "🎭",
                href: "/drama",
                accent: "#9B1B30",
                img: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
                cta: "Enter the Stage",
              },
              {
                title: "Bloom Youth Hub",
                subtitle: "Youth Empowerment",
                desc: "A safe, energetic space for young Nigerians aged 15–27 to learn, grow, share, and thrive, academically, spiritually, and financially.",
                icon: "🌱",
                href: "/youth",
                accent: "#C9A84C",
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
                cta: "Join the Hub",
              },
              {
                title: "Bloom Events",
                subtitle: "Event Planning",
                desc: "From intimate birthday dinners to grand Lagos weddings, we design, plan, and execute celebrations that leave guests breathless.",
                icon: "✨",
                href: "/events",
                accent: "#9B1B30",
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
                cta: "Plan Your Event",
              },
            ].map((branch, i) => (
              <ScrollReveal key={branch.title} delay={i * 150}>
                <Link href={branch.href} className="group block hover-lift">
                  <div className="relative overflow-hidden aspect-[3/4] bg-[#2C2C2E]">
                    <img
                      src={branch.img}
                      alt={branch.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <span className="text-3xl mb-3">{branch.icon}</span>
                      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: branch.accent }}>
                        {branch.subtitle}
                      </p>
                      <h3 className="text-[#F5ECD7] text-2xl mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                        {branch.title}
                      </h3>
                      <p className="text-[#F5ECD7]/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {branch.desc}
                      </p>
                      <span className="text-sm tracking-widest uppercase border-b pb-1 w-fit transition-all duration-300"
                        style={{ color: branch.accent, borderColor: `${branch.accent}50` }}>
                        {branch.cta} →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIVE STATS BAR ===== */}
      <section className="py-16 bg-[#9B1B30]/10 border-y border-[#9B1B30]/20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "50+", label: "Events Planned" },
            { num: "200+", label: "Youth Members" },
            { num: "30+", label: "Stage Productions" },
            { num: "5★", label: "Client Rating" },
          ].map((stat) => (
            <ScrollReveal key={stat.label}>
              <p className="text-[#9B1B30] text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                {stat.num}
              </p>
              <p className="text-[#F5ECD7]/50 text-xs tracking-widest uppercase">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">What They Say</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>
                Voices of the Community
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Bloom Events turned my wedding into something from a dream. They understood exactly what I wanted — even things I couldn't explain.",
                name: "Name A.",
                role: "Bride, Lagos",
              },
              {
                quote: "The Youth Hub literally changed my life. I went from confused about my future to running my first business at 21.",
                name: "Name B.",
                role: "Youth Member, Abuja",
              },
              {
                quote: "Watching my daughter perform on the Bloom Stage was the proudest moment of my life. This community is special.",
                name: "Name C.",
                role: "Drama Parent, Lagos",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 150}>
                <div className="bg-[#1C1C1E] border border-[#9B1B30]/10 p-8 hover:border-[#9B1B30]/30 transition-all duration-300 hover-lift">
                  <p className="text-[#C9A84C] text-3xl mb-4" style={{ fontFamily: "Playfair Display, serif" }}>&ldquo;</p>
                  <p className="text-[#F5ECD7]/70 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#9B1B30]/20 flex items-center justify-center text-[#9B1B30] text-xs font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-[#F5ECD7] text-sm font-medium">{t.name}</p>
                      <p className="text-[#F5ECD7]/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS SECTION ===== */}
      <section className="py-16 px-6 border-t border-[#9B1B30]/10">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#F5ECD7]/30 text-xs tracking-[0.4em] uppercase mb-8">Trusted Partners & Collaborators</p>
            <div className="flex flex-wrap gap-8 items-center justify-center">
              {["A", "Collab Studio", "Lagos Arts Council", "Event Pros NG", "Youth Alliance"].map(p => (
                <span key={p} className="text-[#F5ECD7]/20 text-sm tracking-widest uppercase hover:text-[#F5ECD7]/50 transition-colors cursor-pointer">
                  {p}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FEATURED MEDIA STRIP ===== */}
      <section className="py-12 overflow-hidden">
        <div className="flex gap-4" style={{ animation: "marquee 30s linear infinite" }}>
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-32 bg-[#2C2C2E] overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${["1516280440614-37939bbacd81","1507003211169-0a1dd7228f2d","1529156069898-49953e39b3ac","1519741497674-611481863552","1460661419201-fd4cecdf8a8b","1464366400600-ac59130369f0","1478720568477-152d9b92543f","1504610926078-a1611febcad3"][i % 8]}?w=400&q=60`}
                alt=""
                className="w-full h-full object-cover opacity-40 hover:opacity-70 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="relative py-32 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(28,28,30,0.85) 0%, rgba(155,27,48,0.25) 100%), url('https://images.unsplash.com/photo-1478720568477-152d9b92543f?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ScrollReveal>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Ready to Bloom?</p>
          <h2 className="text-[#F5ECD7] text-4xl md:text-6xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Your Story Starts Here
          </h2>
          <p className="text-[#F5ECD7]/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you want to perform on stage, join our youth community, or plan the celebration of a lifetime — Bloom is your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl">
              Plan an Event
            </Link>
            <Link href="/youth" className="border border-[#F5ECD7]/30 hover:border-[#F5ECD7] text-[#F5ECD7] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300">
              Join the Hub
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-[#F5ECD7] text-4xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Let&apos;s Talk
            </h2>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-8">
              Have a question? Want to collaborate? Ready to book? We&apos;d love to hear from you.
              Reach out and let&apos;s create something beautiful together.
            </p>
            <div className="space-y-4 text-sm text-[#F5ECD7]/60">
              <p>📍 Lagos, Nigeria</p>
              <p>📧 hello@bloomng.com</p>
              <p>📱 <a href="https://wa.me/2348000000000" className="hover:text-[#C9A84C] transition-colors">WhatsApp: +234 800 000 0000</a></p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
              <select className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7]/60 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors">
                <option value="">What are you enquiring about?</option>
                <option value="events">Event Planning</option>
                <option value="drama">Drama & Theatre</option>
                <option value="youth">Youth Hub</option>
                <option value="general">General</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#9B1B30]/30"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phone="2347034504387" />
    </main>
  );
}

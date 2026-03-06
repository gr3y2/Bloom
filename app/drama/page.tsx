"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBoxes from "@/components/ui/FloatingBoxes";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const plays = [
  { title: "Echoes of the Masquerade", genre: "Cultural Drama", synopsis: "A young woman confronts the weight of tradition and the call of her own destiny in a powerful exploration of Igbo heritage." },
  { title: "Lagos at Midnight", genre: "Contemporary", synopsis: "Five strangers in a broken-down bus on the Lagos-Ibadan expressway. One night. Secrets that could change everything." },
  { title: "The Boy Who Spoke Fire", genre: "Coming-of-Age", synopsis: "An orphan from the streets of Mushin discovers his voice and his power through the transformative magic of theatre." },
  { title: "Iya Mi", genre: "Family Drama", synopsis: "A deeply moving tribute to Nigerian mothers — their sacrifices, their strength, and the love that holds families together." },
];

export default function DramaPage() {
  return (
    <main className="relative bg-[#1C1C1E] min-h-screen overflow-x-hidden">
      <FloatingBoxes />
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center parallax-bg"
        style={{
            backgroundImage: "linear-gradient(135deg, rgba(28,28,30,0.55) 0%, rgba(155,27,48,0.1) 60%, rgba(28,28,30,0.65) 100%), url('https://images.unsplash.com/photo-1747155827634-012749f4eca1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGljdHVyZSUyMG9mJTIwYW4lMjBlbXB0eSUyMGRyYW1hJTIwc3RhZ2V8ZW58MHx8MHx8fDA%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          >
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm tracking-[0.4em] uppercase mb-4" >
            Bloom Stage
          </p>
          <h1 className="text-[#F5ECD7] text-5xl md:text-7xl leading-tight mb-6" >
            The Stage is <em className="text-[#2424e7]">Waiting</em>
          </h1>
          <p className="text-[#F5ECD7]/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Where Nigerian stories are told with raw passion, cultural pride, and a fire that audiences never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join" className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300">
              Join the Cast
            </a>
            <a href="#plays" className="border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300">
              View Scripts
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT DRAMA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Our Passion</p>
            <h2 className="text-[#F5ECD7] text-4xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Theatre That<br /><em className="text-[#9B1B30]">Moves You</em>
            </h2>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-4">
              Bloom Stage is a theatre arts company rooted in Nigerian storytelling. We believe the stage is one of the most powerful tools for cultural preservation, emotional healing, and community building.
            </p>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-8">
              Our productions range from traditional Yoruba, Igbo and Hausa-inspired plays to contemporary Nigerian urban stories. Every performance is a love letter to our audience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[{ n: "30+", l: "Productions" }, { n: "100+", l: "Performers Trained" }, { n: "5 yrs", l: "On Stage" }, { n: "10k+", l: "Audience Reached" }].map(s => (
                <div key={s.l} className="border border-[#9B1B30]/20 p-4">
                  <p className="text-[#9B1B30] text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>{s.n}</p>
                  <p className="text-[#F5ECD7]/50 text-xs tracking-wider uppercase">{s.l}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative aspect-[4/5] bg-[#2C2C2E] overflow-hidden">
              <img src="https://plus.unsplash.com/premium_photo-1683219367988-61cebb58e343?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXMlMjByZWxhdGluZyUyMHRvJTIwZHJhbWElMjBvciUyMHN0YWdlJTIwcGxheXxlbnwwfHwwfHx8MA%3D%3D" alt="On Stage" className="w-full h-full object-cover opacity-60 hover:opacity-80 hover:scale-105 transition-all duration-700" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[#9B1B30]/40" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLAY CAROUSEL */}
      <section id="plays" className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Our Repertoire</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>Featured Scripts</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plays.map((play, i) => (
              <ScrollReveal key={play.title} delay={i * 100}>
                <div className="bg-[#1C1C1E] border border-[#9B1B30]/10 p-6 hover:border-[#9B1B30]/40 transition-all duration-300 hover-lift group">
                  <span className="text-[#9B1B30] text-xs tracking-widest uppercase">{play.genre}</span>
                  <h3 className="text-[#F5ECD7] text-lg mt-2 mb-3 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                    {play.title}
                  </h3>
                  <p className="text-[#F5ECD7]/50 text-sm leading-relaxed">{play.synopsis}</p>
                  <button className="mt-4 text-[#C9A84C] text-xs tracking-widest uppercase border-b border-[#C9A84C]/30 hover:border-[#C9A84C] pb-0.5 transition-all">
                    Read Script →
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Watch & Experience</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>Stage in Motion</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {["wRybT6bFOlM", "dQw4w9WgXcQ", "L_jWHffIx5E"].map((id, i) => (
              <ScrollReveal key={id} delay={i * 150}>
                <div className="aspect-video bg-[#0A0A0B] overflow-hidden border border-[#9B1B30]/10 hover:border-[#9B1B30]/40 transition-all group">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://youtube.com/@bloomstage" target="_blank" rel="noreferrer"
              className="border border-[#9B1B30]/30 hover:border-[#9B1B30] text-[#F5ECD7]/60 hover:text-[#F5ECD7] px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300">
              Watch All Videos →
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section id="join" className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Be Part of It</p>
            <h2 className="text-[#F5ECD7] text-4xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>How to Join Bloom Stage</h2>
            <p className="text-[#F5ECD7]/60 max-w-xl mx-auto mb-12">
              Whether you&apos;re a seasoned actor or have never set foot on a stage — if you have passion, we have a place for you.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "01", title: "Express Interest", desc: "Fill out our audition form or send us a message via WhatsApp with your name, age, and why you want to join." },
              { step: "02", title: "Attend Audition", desc: "Come prepared with a monologue (1-2 minutes) or a scene of your choice. We value authenticity over perfection." },
              { step: "03", title: "Join the Family", desc: "If selected, you'll be assigned to a production team and begin rehearsals. New intake happens every quarter." },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 150}>
                <div className="text-center p-6">
                  <span className="text-[#9B1B30]/30 text-6xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>{s.step}</span>
                  <h3 className="text-[#F5ECD7] text-lg mt-2 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>{s.title}</h3>
                  <p className="text-[#F5ECD7]/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <a href="https://wa.me/2348000000000?text=Hi%20Bloom%2C%20I%27d%20like%20to%20audition%20for%20Bloom%20Stage" target="_blank" rel="noreferrer"
            className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 inline-block">
            Apply to Audition
          </a>
        </div>
      </section>

      {/* DONATE */}
      <section className="py-24 px-6" style={{ backgroundImage: "linear-gradient(135deg, rgba(28,28,30,0.97) 0%, rgba(155,27,48,0.12) 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Support the Arts</p>
            <h2 className="text-[#F5ECD7] text-4xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>Fund a Story</h2>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-10 max-w-xl mx-auto">
              Theatre is expensive. Your donation directly funds costumes, stage equipment, rehearsal space, and the training of upcoming Nigerian performers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {["₦1,000", "₦5,000", "₦10,000", "₦25,000", "Custom"].map((amt) => (
                <button key={amt}
                  className="border border-[#9B1B30]/30 hover:border-[#9B1B30] hover:bg-[#9B1B30]/10 text-[#F5ECD7]/70 hover:text-[#F5ECD7] px-6 py-3 text-sm tracking-wider transition-all duration-300">
                  {amt}
                </button>
              ))}
            </div>
            <button
              className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#9B1B30]/30"
              onClick={() => {
                // Paystack integration — replace with actual public key
                if (typeof window !== "undefined") {
                  alert("Paystack integration: Add your Paystack public key to enable donations.");
                }
              }}
            >
              Donate via Paystack
            </button>
            <p className="text-[#F5ECD7]/30 text-xs mt-4">Powered by Paystack · 100% Secure</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 bg-[#0A0A0B] text-center">
        <ScrollReveal>
          <h3 className="text-[#F5ECD7] text-2xl mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Questions about Bloom Stage?</h3>
          <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer"
            className="text-[#C9A84C] hover:text-[#F5ECD7] text-sm tracking-widest uppercase transition-colors border-b border-[#C9A84C]/30 hover:border-[#F5ECD7]/30 pb-1">
            Chat with us on WhatsApp →
          </a>
        </ScrollReveal>
      </section>

      <Footer />
      <WhatsAppButton phone="2348000000000" />
    </main>
  );
}

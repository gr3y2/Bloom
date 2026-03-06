"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBoxes from "@/components/ui/FloatingBoxes";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    title: "The Boy Child Crisis Nobody Is Talking About",
    desc: "Nigerian boys are struggling in silence. We explore the emotional suppression and social pressures breaking young men before they even begin.",
    tag: "The Boy Child",
    date: "Feb 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    title: "Dear Nigerian Girl: Your Ambition Is Not Too Much",
    desc: "A letter to every young woman who has been told to shrink herself. Your dreams are valid. Your ambitions are necessary.",
    tag: "The Girl Child",
    date: "Jan 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    title: "How I Saved My First ₦100,000 at 19",
    desc: "Real talk from a real 19-year-old. No inheritance, no side hustle cheat codes, just discipline, a spreadsheet, and one non-negotiable rule.",
    tag: "Financial Growth",
    date: "Mar 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    title: "Peer Pressure and the Nigerian Student",
    desc: "When your friend group is your biggest threat to the future you want. How to hold your ground without losing your people.",
    tag: "Peer Pressure",
    date: "Feb 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    title: "Faith, Purpose & the Youth Who Has Questions",
    desc: "Growing up in a religious Nigerian home but doubting everything, how to navigate spiritual growth on your own terms.",
    tag: "Spiritual Growth",
    date: "Dec 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    title: "5 Legitimate Ways to Earn Money as a Nigerian Student",
    desc: "Freelancing, content creation, tutoring and more tested income streams that won't jeopardize your academic performance.",
    tag: "Financial Growth",
    date: "Jan 2025",
  },
];

export default function YouthPage() {
  return (
    <main className="relative bg-[#1C1C1E] min-h-screen overflow-x-hidden">
      <FloatingBoxes />
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(28,28,30,0.55) 0%, rgba(201,168,76,0.08) 50%, rgba(28,28,30,0.65) 100%), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#000000] text-sm tracking-[0.4em] uppercase mb-4">
            Bloom Youth Hub
          </p>
          <h1 className="text-[#000000] text-5xl md:text-7xl leading-tight mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Grow. Rise.<br /><em className="text-[#C9A84C]">Bloom.</em>
          </h1>
          <p className="text-[black]/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            A safe, energetic community for Nigerian youths aged 15–27 to grow academically, spiritually, and financially, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#community" className="bg-[#C9A84C] hover:bg-[#b8943e] text-[#1C1C1E] px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300">
              Join the Community
            </a>
            <a href="#blogs" className="border border-[#F5ECD7]/30 hover:border-[#000000] text-[#000000] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300">
              Read the Blog
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[#F5ECD7] text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#F5ECD7] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ABOUT YOUTH HUB */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">What We Stand For</p>
            <h2 className="text-[#F5ECD7] text-4xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              A Community Built<br /><em className="text-[#9B1B30]">For You</em>
            </h2>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-4">
              The Bloom Youth Hub was born from a recognition that Nigerian young people face unique pressures, from academic 
              competition to financial stress to cultural expectations and deserve a space that truly sees them.
            </p>
            <p className="text-[#F5ECD7]/60 leading-relaxed mb-8">
              We tackle the real stuff: peer pressure, sexual health, financial literacy, the boy-girl divide, spiritual growth, 
              and career development. No sugarcoating. Just honest community.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📚", title: "Academic Growth", desc: "Study strategies, motivation, managing exam stress" },
                { icon: "🙏", title: "Spiritual Growth", desc: "Faith, purpose, and navigating life's big questions" },
                { icon: "💰", title: "Financial Literacy", desc: "Earning, saving, and investing as a young Nigerian" },
                { icon: "🛡️", title: "Peer & Sexual Pressure", desc: "Making confident decisions under social pressure" },
              ].map((item) => (
                <div key={item.title} className="bg-[#0A0A0B] border border-[#9B1B30]/10 p-5 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h4 className="text-[#F5ECD7] text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-[#F5ECD7]/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blogs" className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Real Talk</p>
              <h2 className="text-[#F5ECD7] text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>Blog & Conversations</h2>
              <p className="text-[#F5ECD7]/50 mt-3 max-w-lg mx-auto text-sm">Honest writing for young Nigerians navigating a complex world.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <ScrollReveal key={blog.title} delay={i * 100}>
                <div className="group bg-[#1C1C1E] border border-[#9B1B30]/10 hover:border-[#C9A84C]/20 transition-all duration-300 hover-lift overflow-hidden">
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-[#F5ECD7] text-center text-lg px-4 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                        {blog.title}
                      </h3>
                    </div>
                    <span className="absolute top-3 left-3 bg-[#9B1B30] text-[#F5ECD7] text-xs px-2 py-1 tracking-wider">{blog.tag}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-[#F5ECD7]/50 text-sm leading-relaxed mb-4">{blog.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#F5ECD7]/30 text-xs">{blog.date}</span>
                      <a href="#" className="text-[#C9A84C] text-xs tracking-widest uppercase border-b border-[#C9A84C]/30 hover:border-[#C9A84C] pb-0.5 transition-all">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Free Resources</p>
            <h2 className="text-[#F5ECD7] text-4xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>Tools for Your Growth</h2>
            <p className="text-[#F5ECD7]/60 max-w-xl mx-auto mb-12 text-sm">Download free guides created specifically for Nigerian youths. No sign-up required.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "How to Save Your First ₦50,000", type: "PDF Guide", icon: "💾" },
              { title: "Saying No: A Youth's Pressure Survival Guide", type: "PDF Guide", icon: "🛡️" },
              { title: "Your Career Blueprint at 20", type: "Workbook", icon: "📋" },
            ].map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 150}>
                <div className="border border-[#C9A84C]/20 p-6 hover:border-[#C9A84C]/60 transition-all duration-300 hover-lift text-left">
                  <span className="text-3xl mb-4 block">{r.icon}</span>
                  <span className="text-[#C9A84C] text-xs tracking-widest uppercase">{r.type}</span>
                  <h4 className="text-[#F5ECD7] text-sm mt-2 mb-4 leading-snug" style={{ fontFamily: "Playfair Display, serif" }}>{r.title}</h4>
                  <button className="text-[#C9A84C] text-xs tracking-widest uppercase border-b border-[#C9A84C]/30 hover:border-[#C9A84C] pb-0.5 transition-all">
                    Download Free →
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY + COMMENT */}
      <section id="community" className="py-24 px-6 bg-[#0A0A0B]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Community Voices</p>
              <h2 className="text-[#F5ECD7] text-4xl mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Share Your Story</h2>
              <p className="text-[#F5ECD7]/60 max-w-lg mx-auto text-sm">
                This is your space. Share your experiences, thoughts, or victories. The Bloom community is listening.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-4 mb-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name (or Anonymous)" className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors w-full" />
                <input type="text" placeholder="Your Age (optional)" className="bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors w-full" />
              </div>
              <textarea rows={4} placeholder="Share your experience, thoughts, or story with the community..." className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" />
              <button type="submit" className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300">
                Share with Community
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-[#1C1C1E] border border-[#C9A84C]/20 p-8 text-center">
              <span className="text-3xl mb-4 block">🔒</span>
              <h3 className="text-[#F5ECD7] text-xl mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Something Too Private to Post?</h3>
              <p className="text-[#F5ECD7]/60 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                You don&apos;t have to share everything publicly. Send your story privately and get personal, confidential advice directly from our founder.
              </p>
              <a
                href="https://wa.me/2348000000000?text=Hi%2C%20I%27d%20like%20to%20share%20something%20privately%20with%20you"
                target="_blank" rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Share Privately on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* IMAGES/VIDEOS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-10 text-center">Community in Action</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "photo-1529156069898-49953e39b3ac","photo-1523240795612-9a054b0db644","photo-1513475382585-d06e58bcb0e0","photo-1524178232363-1fb2b075b655",
              "photo-1531746020798-e6953c6e8e04","photo-1507003211169-0a1dd7228f2d","photo-1464366400600-ac59130369f0","photo-1516280440614-37939bbacd81"
            ].map((id, i) => (
              <ScrollReveal key={id} delay={i * 50}>
                <div className="aspect-square overflow-hidden bg-[#0A0A0B]">
                  <img src={`https://images.unsplash.com/photo-${id}?w=400&q=70`} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-90 hover:scale-110 transition-all duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phone="2348000000000" />
    </main>
  );
}

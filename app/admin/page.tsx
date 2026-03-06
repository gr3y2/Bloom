"use client";
import { useState } from "react";

// Simple admin login + dashboard — connect to NextAuth + MongoDB in production
const ADMIN_USER = "admin";
const ADMIN_PASS = "bloom2024";

const pages = [
  {
    id: "home",
    label: "Home Page",
    sections: [
      { id: "hero_headline", label: "Hero Headline", value: "Where Stories Bloom" },
      { id: "hero_subtext", label: "Hero Subtext", value: "A Nigerian creative brand uniting the passion of theatre, the growth of youth, and the elegance of unforgettable celebrations." },
      { id: "about_heading", label: "About Heading", value: "One Brand. Three Worlds." },
      { id: "about_text", label: "About Body Text", value: "Bloom was born from a deep love for Nigerian culture, storytelling, and community." },
      { id: "founder_quote", label: "Founder Quote", value: "I didn't just want to build a business. I wanted to build a community." },
      { id: "cta_heading", label: "CTA Section Heading", value: "Your Story Starts Here" },
    ],
  },
  {
    id: "drama",
    label: "Drama Page",
    sections: [
      { id: "drama_hero_headline", label: "Hero Headline", value: "The Stage is Waiting" },
      { id: "drama_about_text", label: "About Drama Text", value: "Bloom Stage is a theatre arts company rooted in Nigerian storytelling." },
      { id: "drama_join_text", label: "How to Join Text", value: "Whether you're a seasoned actor or have never set foot on a stage — if you have passion, we have a place for you." },
      { id: "drama_donate_text", label: "Donate Section Text", value: "Your donation directly funds costumes, stage equipment, and training." },
    ],
  },
  {
    id: "youth",
    label: "Youth Hub Page",
    sections: [
      { id: "youth_hero_headline", label: "Hero Headline", value: "Grow. Rise. Bloom." },
      { id: "youth_about_text", label: "About Youth Text", value: "The Bloom Youth Hub was born from a recognition that Nigerian young people face unique pressures." },
      { id: "youth_community_text", label: "Community Section Text", value: "This is your space. Share your experiences, thoughts, or victories." },
    ],
  },
  {
    id: "events",
    label: "Events Page",
    sections: [
      { id: "events_hero_headline", label: "Hero Headline", value: "Moments Made Unforgettable" },
      { id: "events_about_text", label: "About Events Text", value: "Nigeria's premium event planning experience." },
      { id: "events_booking_text", label: "Booking Section Text", value: "Fill in your details and we'll reach out within 24 hours." },
    ],
  },
];

export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activePage, setActivePage] = useState("home");
  const [activeTab, setActiveTab] = useState<"content" | "newsletter" | "comments" | "media">("content");
  const [content, setContent] = useState(() => {
    const map: Record<string, string> = {};
    pages.forEach(p => p.sections.forEach(s => { map[s.id] = s.value; }));
    return map;
  });
  const [saved, setSaved] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  const handleSave = () => {
    // In production: POST to /api/admin/content with content state
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <span className="text-[#9B1B30] text-4xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>B</span>
            <span className="text-[#F5ECD7] text-2xl tracking-widest uppercase">loom</span>
            <p className="text-[#F5ECD7]/40 text-xs tracking-widest uppercase mt-2">Admin Dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
            />
            {loginError && <p className="text-red-400 text-xs">{loginError}</p>}
            <button type="submit" className="w-full bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] py-3 text-sm tracking-widest uppercase transition-all duration-300">
              Log In
            </button>
          </form>
          <p className="text-[#F5ECD7]/20 text-xs text-center mt-6">Protected area · Bloom Admin Only</p>
        </div>
      </div>
    );
  }

  const currentPage = pages.find(p => p.id === activePage)!;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5ECD7] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1C1C1E] border-r border-[#9B1B30]/10 flex flex-col">
        <div className="p-6 border-b border-[#9B1B30]/10">
          <span className="text-[#9B1B30] text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>B</span>
          <span className="text-[#F5ECD7] text-lg tracking-widest uppercase">loom</span>
          <p className="text-[#F5ECD7]/30 text-xs mt-1">Admin Dashboard</p>
        </div>

        <div className="p-4 space-y-1 flex-1">
          <p className="text-[#F5ECD7]/30 text-xs tracking-widest uppercase px-3 py-2">Pages</p>
          {pages.map(p => (
            <button key={p.id} onClick={() => setActivePage(p.id)}
              className={`w-full text-left px-3 py-2.5 text-sm transition-colors rounded ${activePage === p.id ? "bg-[#9B1B30]/20 text-[#F5ECD7] border-l-2 border-[#9B1B30]" : "text-[#F5ECD7]/50 hover:text-[#F5ECD7] hover:bg-[#2C2C2E]"}`}>
              {p.label}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-[#9B1B30]/10">
          <button onClick={() => setLoggedIn(false)} className="w-full text-left text-[#F5ECD7]/30 hover:text-[#F5ECD7] text-xs tracking-wider transition-colors px-3 py-2">
            ← Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="border-b border-[#9B1B30]/10 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-[#F5ECD7] text-lg font-medium" style={{ fontFamily: "Playfair Display, serif" }}>{currentPage.label}</h1>
            <p className="text-[#F5ECD7]/40 text-xs">Manage content for this page</p>
          </div>
          <div className="flex gap-3 items-center">
            {saved && <span className="text-green-400 text-xs">✓ Saved successfully</span>}
            <button onClick={handleSave} className="bg-[#9B1B30] hover:bg-[#C0392B] text-[#F5ECD7] px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300">
              Save Changes
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#9B1B30]/10 px-8">
          <div className="flex gap-6">
            {(["content", "newsletter", "comments", "media"] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`py-3 text-xs tracking-widest uppercase border-b-2 transition-colors ${activeTab === tab ? "border-[#9B1B30] text-[#F5ECD7]" : "border-transparent text-[#F5ECD7]/40 hover:text-[#F5ECD7]/70"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-8 overflow-y-auto">

          {activeTab === "content" && (
            <div className="space-y-6 max-w-2xl">
              <p className="text-[#F5ECD7]/50 text-sm">Edit the text content for each section of <strong className="text-[#C9A84C]">{currentPage.label}</strong>. Changes will reflect live after saving.</p>
              {currentPage.sections.map(section => (
                <div key={section.id}>
                  <label className="text-[#C9A84C] text-xs tracking-widest uppercase block mb-2">{section.label}</label>
                  {section.value.length > 60 ? (
                    <textarea
                      rows={3}
                      value={content[section.id]}
                      onChange={e => setContent(prev => ({ ...prev, [section.id]: e.target.value }))}
                      className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={content[section.id]}
                      onChange={e => setContent(prev => ({ ...prev, [section.id]: e.target.value }))}
                      className="w-full bg-[#1C1C1E] border border-[#9B1B30]/20 text-[#F5ECD7] px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "newsletter" && (
            <div>
              <h2 className="text-[#F5ECD7] text-lg mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Newsletter Subscribers</h2>
              <p className="text-[#F5ECD7]/50 text-sm mb-6">Connect to MongoDB to see live subscriber list.</p>
              <div className="bg-[#1C1C1E] border border-[#9B1B30]/10 rounded overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#9B1B30]/10">
                      <th className="text-left px-4 py-3 text-[#C9A84C] text-xs tracking-wider uppercase">Email</th>
                      <th className="text-left px-4 py-3 text-[#C9A84C] text-xs tracking-wider uppercase">Date</th>
                      <th className="text-left px-4 py-3 text-[#C9A84C] text-xs tracking-wider uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { email: "adaeze@gmail.com", date: "Mar 1, 2025" },
                      { email: "tunde.a@yahoo.com", date: "Feb 28, 2025" },
                      { email: "chioma.events@gmail.com", date: "Feb 25, 2025" },
                    ].map(sub => (
                      <tr key={sub.email} className="border-b border-[#9B1B30]/5 hover:bg-[#2C2C2E] transition-colors">
                        <td className="px-4 py-3 text-[#F5ECD7]/70">{sub.email}</td>
                        <td className="px-4 py-3 text-[#F5ECD7]/40 text-xs">{sub.date}</td>
                        <td className="px-4 py-3"><button className="text-red-400/50 hover:text-red-400 text-xs transition-colors">Remove</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "comments" && (
            <div>
              <h2 className="text-[#F5ECD7] text-lg mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Community Comments</h2>
              <p className="text-[#F5ECD7]/50 text-sm mb-6">Comments from Youth Hub and Drama page. Approve or remove.</p>
              <div className="space-y-4">
                {[
                  { name: "Tunde A.", page: "Youth Hub", time: "2h ago", text: "This community literally saved me during my WAEC year. So grateful for this space." },
                  { name: "Anonymous", page: "Youth Hub", time: "5h ago", text: "I wanted to share something about pressure from my boyfriend but I'm shy to post it publicly." },
                  { name: "Nkechi B.", page: "Drama", time: "1d ago", text: "The Lagos at Midnight script made me cry. When is the full production happening?!" },
                ].map((c, i) => (
                  <div key={i} className="bg-[#1C1C1E] border border-[#9B1B30]/10 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#9B1B30]/20 flex items-center justify-center text-[#9B1B30] text-xs font-bold">{c.name[0]}</span>
                        <span className="text-[#F5ECD7] text-sm font-medium">{c.name}</span>
                        <span className="text-[#C9A84C] text-xs border border-[#C9A84C]/20 px-2 py-0.5">{c.page}</span>
                      </div>
                      <span className="text-[#F5ECD7]/30 text-xs">{c.time}</span>
                    </div>
                    <p className="text-[#F5ECD7]/60 text-sm mb-3">{c.text}</p>
                    <div className="flex gap-4">
                      <button className="text-green-400/60 hover:text-green-400 text-xs tracking-wider transition-colors">✓ Approve</button>
                      <button className="text-red-400/60 hover:text-red-400 text-xs tracking-wider transition-colors">✕ Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "media" && (
            <div>
              <h2 className="text-[#F5ECD7] text-lg mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Media Management</h2>
              <p className="text-[#F5ECD7]/50 text-sm mb-6">
                Connect to <strong className="text-[#C9A84C]">Cloudinary</strong> to manage images and videos. Add your <code className="bg-[#1C1C1E] px-1 text-[#C9A84C]">CLOUDINARY_URL</code> to <code className="bg-[#1C1C1E] px-1 text-[#C9A84C]">.env.local</code> to enable uploads.
              </p>
              <div className="border-2 border-dashed border-[#9B1B30]/20 p-12 text-center hover:border-[#9B1B30]/40 transition-colors cursor-pointer">
                <p className="text-4xl mb-3">📁</p>
                <p className="text-[#F5ECD7]/50 text-sm">Drop images/videos here or click to upload</p>
                <p className="text-[#F5ECD7]/30 text-xs mt-1">Powered by Cloudinary · Max 200MB per file</p>
              </div>
              <p className="mt-6 text-[#F5ECD7]/30 text-xs leading-relaxed">
                Uploaded media will be stored on Cloudinary and you can reference them by URL in each page&apos;s image fields. 
                See <code className="text-[#C9A84C]">lib/cloudinary.ts</code> for the upload utility.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

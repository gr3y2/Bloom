'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: 'success', msg: data.message })
        setEmail('')
        setName('')
      } else {
        setStatus({ type: 'error', msg: data.error })
      }
    } catch {
      setStatus({ type: 'error', msg: 'Something went wrong. Try again.' })
    }
    setLoading(false)
  }

  return (
    <footer className="bg-bloom-warm text-bloom-cream relative overflow-hidden">
      {/* Decorative top curve */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-bloom-cream" style={{
        clipPath: 'ellipse(60% 100% at 50% 0%)'
      }} />

      <div className="relative pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="text-center mb-16">
          <p className="font-accent text-bloom-blush text-lg mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Stay Connected
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
            Join the Bloom Community
          </h3>
          <p className="text-bloom-blush/70 mb-8 max-w-md mx-auto">
            Get stories, event updates, youth resources, and theatre news — straight to your inbox.
          </p>

          {status ? (
            <p className={`text-lg font-medium ${status.type === 'success' ? 'text-bloom-sage' : 'text-bloom-rose'}`}>
              {status.msg}
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Your first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-bloom-rose"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-bloom-rose"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-full bg-bloom-rose text-white font-semibold hover:bg-bloom-terracotta transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {loading ? 'Joining...' : 'Join Bloom 🌸'}
              </button>
            </form>
          )}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t border-white/10 pt-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-accent text-3xl text-white mb-3" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Bloom
            </p>
            <p className="text-bloom-blush/60 text-sm leading-relaxed">
              A Nigerian creative brand rooted in drama, youth empowerment, and extraordinary celebrations.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Bloom Stage', href: '/drama' },
                { label: 'Youth Hub', href: '/youth' },
                { label: 'Events', href: '/events' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-bloom-blush/60 hover:text-bloom-rose text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bloom-blush/60 hover:text-bloom-rose text-sm transition-colors flex items-center gap-2"
                >
                  📱 WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@bloom.ng" className="text-bloom-blush/60 hover:text-bloom-rose text-sm transition-colors">
                  ✉️ Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-bloom-blush/60 hover:text-bloom-rose text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-bloom-blush/40 text-sm">
            © {new Date().getFullYear()} Bloom. Made with love in Nigeria 🇳🇬
          </p>
          <p className="text-bloom-blush/40 text-sm">
            Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}

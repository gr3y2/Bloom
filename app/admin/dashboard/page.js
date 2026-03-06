'use client'
import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const PAGES = ['home', 'drama', 'youth', 'events']
const PAGE_SECTIONS = {
  home: {
    hero: ['title', 'subtitle', 'description', 'buttonText'],
    about: ['title', 'description'],
    founder: ['name', 'title', 'story'],
  },
  drama: {
    hero: ['title', 'subtitle', 'description', 'buttonText'],
    about: ['title', 'description'],
    join: ['title', 'description', 'buttonText'],
    donate: ['title', 'description'],
  },
  youth: {
    hero: ['title', 'subtitle', 'description', 'buttonText'],
    about: ['title', 'description'],
  },
  events: {
    hero: ['title', 'subtitle', 'description', 'buttonText'],
    about: ['title', 'description'],
  },
}

const SECTION_LABELS = {
  hero: 'Hero Section',
  about: 'About Section',
  founder: 'Founder Section',
  join: 'Join / Auditions Section',
  donate: 'Donate Section',
}

// ——— Sidebar ———
function Sidebar({ active, setActive }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'content-home', label: 'Home Content', icon: '🏠' },
    { id: 'content-drama', label: 'Drama Content', icon: '🎭' },
    { id: 'content-youth', label: 'Youth Content', icon: '🌱' },
    { id: 'content-events', label: 'Events Content', icon: '✨' },
    { id: 'media', label: 'Media Manager', icon: '🖼️' },
    { id: 'newsletter', label: 'Newsletter', icon: '📧' },
    { id: 'comments', label: 'Comments', icon: '💬' },
  ]

  return (
    <aside className="w-64 min-h-screen flex flex-col" style={{ background: '#3D1C02' }}>
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <p className="font-accent text-bloom-rose text-3xl" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Bloom
        </p>
        <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Admin Dashboard</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
              active === item.id
                ? 'bg-bloom-terracotta text-white'
                : 'text-white/50 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Sign out */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="w-full px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 text-sm transition-all text-left flex items-center gap-3"
        >
          <span>🚪</span> Sign Out
        </button>
      </div>
    </aside>
  )
}

// ——— Overview Panel ———
function OverviewPanel() {
  const [stats, setStats] = useState({ newsletter: 0, comments: 0 })

  useEffect(() => {
    fetch('/api/newsletter').then(r => r.json()).then(d => {
      if (d.success) setStats(s => ({ ...s, newsletter: d.count }))
    })
    fetch('/api/comments?page=youth&all=1').then(r => r.json()).then(d => {
      if (d.success) setStats(s => ({ ...s, comments: d.data.length }))
    })
  }, [])

  const cards = [
    { label: 'Newsletter Subscribers', value: stats.newsletter, icon: '📧', color: '#E8927C' },
    { label: 'Total Comments', value: stats.comments, icon: '💬', color: '#7A9E7E' },
    { label: 'Active Pages', value: 4, icon: '📄', color: '#D4A853' },
    { label: 'Media Items', value: '200+', icon: '🖼️', color: '#C1623F' },
  ]

  const quickLinks = [
    { label: '→ View Home Page', href: '/' },
    { label: '→ View Drama Page', href: '/drama' },
    { label: '→ View Youth Page', href: '/youth' },
    { label: '→ View Events Page', href: '/events' },
  ]

  return (
    <div>
      <h2 className="font-display text-2xl text-bloom-warm font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card, i) => (
          <div key={i} className="rounded-2xl p-6 bg-white border border-bloom-rose/10">
            <div className="text-3xl mb-3">{card.icon}</div>
            <div className="font-display text-3xl font-black mb-1" style={{ color: card.color }}>
              {card.value}
            </div>
            <div className="text-bloom-warm/50 text-xs uppercase tracking-widest">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-6 bg-white border border-bloom-rose/10">
        <h3 className="font-bold text-bloom-warm mb-4">Quick Links</h3>
        <div className="grid grid-cols-2 gap-2">
          {quickLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer"
              className="text-bloom-terracotta hover:text-bloom-warm text-sm transition-colors py-2">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// ——— Content Editor Panel ———
function ContentEditor({ page }) {
  const sections = PAGE_SECTIONS[page] || {}
  const [content, setContent] = useState({})
  const [saving, setSaving] = useState({})
  const [saved, setSaved] = useState({})

  useEffect(() => {
    fetch(`/api/content?page=${page}`)
      .then(r => r.json())
      .then(d => { if (d.success) setContent(d.data) })
  }, [page])

  const handleSave = async (section, key, value) => {
    const k = `${section}.${key}`
    setSaving(s => ({ ...s, [k]: true }))
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, section, key, value }),
    })
    setSaving(s => ({ ...s, [k]: false }))
    setSaved(s => ({ ...s, [k]: true }))
    setTimeout(() => setSaved(s => ({ ...s, [k]: false })), 2000)
  }

  const getValue = (section, key) => content[section]?.[key] || ''

  return (
    <div>
      <h2 className="font-display text-2xl text-bloom-warm font-bold mb-2 capitalize">
        {page} Page Content
      </h2>
      <p className="text-bloom-warm/50 text-sm mb-8">
        Edit any text block below. Changes save individually and reflect immediately on the page.
      </p>

      <div className="space-y-6">
        {Object.entries(sections).map(([section, keys]) => (
          <div key={section} className="rounded-2xl p-6 bg-white border border-bloom-rose/10">
            <h3 className="font-bold text-bloom-warm mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bloom-terracotta" />
              {SECTION_LABELS[section] || section}
            </h3>

            <div className="space-y-4">
              {keys.map(key => {
                const k = `${section}.${key}`
                const val = getValue(section, key)
                const isLong = key === 'description' || key === 'story'
                return (
                  <div key={key}>
                    <label className="block text-bloom-warm/50 text-xs uppercase tracking-widest mb-1.5">
                      {key}
                    </label>
                    <div className="flex gap-2">
                      {isLong ? (
                        <textarea
                          defaultValue={val}
                          rows={3}
                          id={k}
                          className="flex-1 px-4 py-3 rounded-xl border border-bloom-rose/20 text-bloom-warm text-sm resize-none focus:outline-none focus:border-bloom-terracotta"
                        />
                      ) : (
                        <input
                          type="text"
                          defaultValue={val}
                          id={k}
                          className="flex-1 px-4 py-3 rounded-xl border border-bloom-rose/20 text-bloom-warm text-sm focus:outline-none focus:border-bloom-terracotta"
                        />
                      )}
                      <button
                        onClick={() => {
                          const el = document.getElementById(k)
                          handleSave(section, key, el.value)
                        }}
                        disabled={saving[k]}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all shrink-0 ${
                          saved[k]
                            ? 'bg-bloom-sage text-white'
                            : 'bg-bloom-terracotta text-white hover:bg-bloom-rose'
                        } disabled:opacity-60`}
                      >
                        {saved[k] ? '✓ Saved' : saving[k] ? '...' : 'Save'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ——— Media Manager ———
function MediaManager() {
  const [page, setPage] = useState('home')
  const [media, setMedia] = useState([])
  const [uploading, setUploading] = useState(false)
  const [title, setTitle] = useState('')

  const loadMedia = () => {
    fetch(`/api/upload?page=${page}`)
      .then(r => r.json())
      .then(d => { if (d.success) setMedia(d.data) })
  }

  useEffect(() => { loadMedia() }, [page])

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('page', page)
    formData.append('title', title)
    await fetch('/api/upload', { method: 'POST', body: formData })
    setUploading(false)
    setTitle('')
    loadMedia()
  }

  const handleDelete = async (item) => {
    if (!confirm(`Delete "${item.title || item.publicId}"?`)) return
    await fetch('/api/upload', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ publicId: item.publicId, mediaId: item._id, type: item.type }),
    })
    loadMedia()
  }

  return (
    <div>
      <h2 className="font-display text-2xl text-bloom-warm font-bold mb-6">Media Manager</h2>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-end mb-8 p-6 rounded-2xl bg-white border border-bloom-rose/10">
        <div>
          <label className="block text-bloom-warm/50 text-xs mb-1">Filter by Page</label>
          <select
            value={page}
            onChange={e => setPage(e.target.value)}
            className="px-4 py-2 rounded-xl border border-bloom-rose/20 text-bloom-warm text-sm focus:outline-none"
          >
            {PAGES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-bloom-warm/50 text-xs mb-1">Media Title (optional)</label>
          <input
            type="text"
            placeholder="Title for this file"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="px-4 py-2 rounded-xl border border-bloom-rose/20 text-bloom-warm text-sm focus:outline-none"
          />
        </div>
        <label className="btn-bloom cursor-pointer text-sm py-2 px-5">
          {uploading ? 'Uploading...' : '+ Upload File'}
          <input type="file" accept="image/*,video/*" onChange={handleUpload} className="hidden" disabled={uploading} />
        </label>
      </div>

      {/* Grid */}
      {media.length === 0 ? (
        <p className="text-bloom-warm/40 text-sm text-center py-12">No media for this page yet. Upload some files above.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map(item => (
            <div key={item._id} className="group relative rounded-2xl overflow-hidden bg-white border border-bloom-rose/10">
              {item.type === 'image' ? (
                <img src={item.url} alt={item.title} className="w-full aspect-square object-cover" />
              ) : (
                <video src={item.url} className="w-full aspect-square object-cover" />
              )}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => handleDelete(item)}
                  className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
              {item.title && (
                <div className="p-2">
                  <p className="text-bloom-warm text-xs truncate">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ——— Newsletter Panel ———
function NewsletterPanel() {
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/newsletter')
      .then(r => r.json())
      .then(d => {
        if (d.success) setSubscribers(d.data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h2 className="font-display text-2xl text-bloom-warm font-bold mb-2">Newsletter Subscribers</h2>
      <p className="text-bloom-warm/50 text-sm mb-6">{subscribers.length} total subscribers</p>

      {loading ? (
        <p className="text-bloom-warm/40 text-sm">Loading...</p>
      ) : (
        <div className="rounded-2xl overflow-hidden border border-bloom-rose/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-bloom-rose/10" style={{ background: '#FFF0E8' }}>
                <th className="text-left px-6 py-4 text-bloom-warm/60 font-medium text-xs uppercase tracking-wider">Name</th>
                <th className="text-left px-6 py-4 text-bloom-warm/60 font-medium text-xs uppercase tracking-wider">Email</th>
                <th className="text-left px-6 py-4 text-bloom-warm/60 font-medium text-xs uppercase tracking-wider">Date</th>
                <th className="text-left px-6 py-4 text-bloom-warm/60 font-medium text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-bloom-rose/5">
              {subscribers.map((sub) => (
                <tr key={sub._id} className="hover:bg-bloom-cream/30 transition-colors">
                  <td className="px-6 py-4 text-bloom-warm">{sub.name || '—'}</td>
                  <td className="px-6 py-4 text-bloom-warm">{sub.email}</td>
                  <td className="px-6 py-4 text-bloom-warm/50">
                    {new Date(sub.subscribedAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${sub.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                      {sub.isActive ? 'Active' : 'Unsubscribed'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// ——— Comments Panel ———
function CommentsPanel() {
  const [comments, setComments] = useState([])
  const [pageFilter, setPageFilter] = useState('youth')
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    fetch(`/api/comments?page=${pageFilter}&all=1`)
      .then(r => r.json())
      .then(d => {
        if (d.success) setComments(d.data)
        setLoading(false)
      })
  }

  useEffect(() => { load() }, [pageFilter])

  const handleAction = async (id, action) => {
    await fetch('/api/comments', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action }),
    })
    load()
  }

  return (
    <div>
      <h2 className="font-display text-2xl text-bloom-warm font-bold mb-6">Comments</h2>

      <div className="flex gap-2 mb-6">
        {['youth', 'drama', 'events'].map(p => (
          <button
            key={p}
            onClick={() => setPageFilter(p)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${pageFilter === p ? 'bg-bloom-terracotta text-white' : 'bg-white border border-bloom-rose/20 text-bloom-warm'}`}
          >
            {p}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-bloom-warm/40 text-sm">Loading...</p>
      ) : comments.length === 0 ? (
        <p className="text-bloom-warm/40 text-sm text-center py-12">No comments yet.</p>
      ) : (
        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c._id} className="rounded-2xl p-6 bg-white border border-bloom-rose/10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-bloom-warm text-sm">{c.name}</span>
                    {c.email && <span className="text-bloom-warm/40 text-xs">{c.email}</span>}
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${c.isApproved ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {c.isApproved ? 'Approved' : 'Pending'}
                    </span>
                  </div>
                  <p className="text-bloom-warm/60 text-sm leading-relaxed">{c.comment}</p>
                  <p className="text-bloom-warm/30 text-xs mt-2">{new Date(c.createdAt).toLocaleString('en-NG')}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {!c.isApproved && (
                    <button
                      onClick={() => handleAction(c._id, 'approve')}
                      className="px-3 py-1.5 rounded-lg bg-green-500 text-white text-xs font-bold hover:bg-green-600"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleAction(c._id, 'delete')}
                    className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ——— Main Dashboard ———
export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [active, setActive] = useState('overview')

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login')
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#1A0A00' }}>
        <div className="font-accent text-bloom-rose text-4xl" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Loading...
        </div>
      </div>
    )
  }

  if (!session) return null

  const renderPanel = () => {
    if (active === 'overview') return <OverviewPanel />
    if (active.startsWith('content-')) {
      const page = active.replace('content-', '')
      return <ContentEditor page={page} />
    }
    if (active === 'media') return <MediaManager />
    if (active === 'newsletter') return <NewsletterPanel />
    if (active === 'comments') return <CommentsPanel />
    return null
  }

  return (
    <div className="flex min-h-screen" style={{ background: '#FFF8F0' }}>
      <Sidebar active={active} setActive={setActive} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="px-8 py-5 border-b border-bloom-rose/10 bg-white flex items-center justify-between">
          <div>
            <p className="text-bloom-warm/40 text-xs uppercase tracking-widest">Bloom Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-bloom-warm/60 text-sm">Welcome, {session.user.name}</span>
            <div className="w-8 h-8 rounded-full bg-bloom-terracotta flex items-center justify-center text-white text-sm font-bold">
              B
            </div>
          </div>
        </div>

        {/* Panel */}
        <div className="flex-1 p-8 overflow-y-auto">
          {renderPanel()}
        </div>
      </div>
    </div>
  )
}

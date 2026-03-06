'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Link from 'next/link'
import CommentSection from './CommentSection'

// In production this would be fetched from MongoDB
const posts = {
  'the-boy-child-forgotten-conversation': {
    title: 'The Boy Child: The Conversation We Keep Forgetting',
    category: 'The Boy Child',
    date: 'February 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80',
    content: `
      <p>There is a quiet crisis happening in Nigeria — and in much of Africa. We talk a great deal about the girl child, about her empowerment, her right to education, her protection from early marriage and sexual violence. These are important conversations. They are necessary conversations.</p>
      
      <p>But when was the last time anyone asked: how is the boy child doing?</p>

      <h2>The Silence We Mistake for Strength</h2>
      
      <p>Nigerian boys are taught from a young age that strength means silence. "Men don't cry." "Be a man." "Stop behaving like a woman." These phrases, said casually at home, in school, at church, shape a generation of young men who genuinely do not know how to process pain, vulnerability, or failure.</p>

      <p>And when those boys become teenagers — navigating peer pressure, sexual temptation, financial stress, academic pressure, and the weight of family expectations — they do so largely alone. Without language for their emotions. Without permission to struggle.</p>

      <h2>What We See When No One Is Looking</h2>
      
      <p>The statistics are uncomfortable. Boys in Nigeria drop out of secondary school at higher rates than girls in many states. Male youth unemployment is a driver of gang affiliation and crime. Suicide rates among young men, while underreported, are rising. Substance abuse — alcohol, tramadol, codeine, marijuana — is disproportionately affecting boys who cannot find another outlet for their pain.</p>

      <p>This is not about diminishing what girls face. It is about acknowledging that when we leave boys out of the conversation about growth and wellbeing, we create broken men — and broken men affect everyone around them.</p>

      <h2>What the Boy Child Actually Needs</h2>
      
      <p>He needs to be told that it is okay to not have all the answers. That vulnerability is not weakness. That asking for help is a sign of intelligence, not failure. He needs safe spaces — not just physically, but emotionally — where he can speak without judgment.</p>

      <p>He needs mentors who model healthy masculinity. Not hyper-masculine aggression, but a kind of strength that includes gentleness, accountability, emotional honesty.</p>

      <p>He needs someone to check on him.</p>

      <h2>Our Commitment at Bloom Youth Hub</h2>

      <p>Bloom Youth Hub is committed to holding space for Nigerian boys and young men. In our community, there is no "man up." There is only "show up." Show up as you are — confused, struggling, figuring it out. We will figure it out together.</p>

      <p>If you are a young man reading this, know this: you are not alone. Your struggles are real. Your feelings are valid. And you deserve support too.</p>
    `,
  },
}

function BlogPost({ params }) {
  const post = posts[params.slug]
  useScrollReveal()

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <p className="text-bloom-warm/40 text-lg mb-4">Post not found.</p>
          <Link href="/youth#blog" className="btn-bloom">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24" style={{ minHeight: '60vh' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${post.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bloom-cream via-black/50 to-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16 pt-24">
          <Link href="/youth#blog" className="text-white/60 hover:text-white text-sm mb-6 inline-flex items-center gap-2 transition-colors">
            ← Back to Blog
          </Link>
          <span className="block text-xs font-bold uppercase tracking-widest text-bloom-green bg-white/20 px-3 py-1 rounded-full w-fit mb-4 text-white">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-white font-black leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex gap-4 text-white/50 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="prose prose-lg"
          style={{
            color: 'var(--bloom-warm)',
            fontFamily: 'var(--font-body)',
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* WhatsApp private CTA */}
        <div
          className="mt-12 rounded-3xl p-8 text-center reveal"
          style={{ background: 'linear-gradient(135deg, #EEF6F0, #C8E6CF)' }}
        >
          <p className="font-display text-xl text-bloom-warm font-bold mb-2">
            Does this resonate with you?
          </p>
          <p className="text-bloom-warm/60 mb-6 text-sm">
            Share your private experience and get personal guidance directly from our founder on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348000000000'}?text=${encodeURIComponent(`Hi! I read "${post.title}" on the Bloom Youth Hub and I'd like to share something privately.`)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-bloom"
            style={{ background: '#4A7C59' }}
          >
            📱 Chat Privately on WhatsApp
          </a>
        </div>
      </section>

      {/* Comments */}
      <CommentSection slug={params.slug} />
    </>
  )
}

export default BlogPost

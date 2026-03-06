import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Content from '@/models/Content'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Default content fallbacks
const defaults = {
  home: {
    hero: {
      title: 'Where Stories Bloom',
      subtitle: 'Drama. Youth. Celebration.',
      description: 'A Nigerian creative community rooted in art, growth, and unforgettable moments.',
      buttonText: 'Explore Bloom',
    },
    about: {
      title: 'About Bloom',
      description: 'Bloom is a Nigerian creative brand with three powerful branches — stage drama, youth community development, and world-class event planning. We are passionate about stories, growth, and bringing people together.',
    },
    founder: {
      name: 'The Founder',
      title: 'Creator & Visionary',
      story: 'Bloom was born from a passion to create spaces where creativity thrives, young people are empowered, and every celebration becomes a cherished memory.',
    },
  },
  drama: {
    hero: {
      title: 'Life on the Stage',
      subtitle: 'Where every story deserves to be told',
      description: 'Step into a world of passion, expression, and theatrical excellence.',
      buttonText: 'Join the Stage',
    },
    about: {
      title: 'About Bloom Stage',
      description: 'Bloom Stage is a theatre arts platform dedicated to bringing powerful stories to life. We celebrate the art of acting, writing, and performing for Nigerian and global audiences.',
    },
    join: {
      title: 'Ready to Take the Stage?',
      description: 'Whether you are an experienced actor or a first-time performer, Bloom Stage welcomes you. Our community is open, supportive, and passionate about theatre arts.',
      buttonText: 'Audition Now',
    },
    donate: {
      title: 'Support the Arts',
      description: 'Your donation helps us produce more stage plays, train young performers, and bring theatre to underserved communities across Nigeria.',
    },
  },
  youth: {
    hero: {
      title: 'Rise. Grow. Bloom.',
      subtitle: 'A safe space for Nigerian youth aged 15–27',
      description: 'Building confident, resilient, and purposeful young people across Nigeria.',
      buttonText: 'Join the Community',
    },
    about: {
      title: 'Welcome to Bloom Youth Hub',
      description: 'Bloom Youth Hub is a community-first platform designed for young Nigerians. We tackle real issues — peer pressure, financial literacy, academic challenges, and spiritual growth — with honesty, warmth, and community.',
    },
  },
  events: {
    hero: {
      title: 'Every Moment, Masterfully Made',
      subtitle: 'Wedding. Birthdays. Celebrations.',
      description: 'We transform your vision into unforgettable experiences across Nigeria.',
      buttonText: 'Plan Your Event',
    },
    about: {
      title: 'About Bloom Events',
      description: 'Bloom Events is your trusted Nigerian event planning partner. From intimate birthday celebrations to grand weddings, we bring precision, creativity, and heart to every occasion.',
    },
  },
}

// GET: Fetch content for a page
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')

    await dbConnect()

    if (page) {
      const items = await Content.find({ page })
      
      // Merge DB values with defaults
      const merged = { ...(defaults[page] || {}) }
      items.forEach(item => {
        if (!merged[item.section]) merged[item.section] = {}
        merged[item.section][item.key] = item.value
      })

      return NextResponse.json({ success: true, data: merged })
    }

    const allItems = await Content.find({})
    return NextResponse.json({ success: true, data: allItems })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// PUT: Update content (admin only)
export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { page, section, key, value } = body

    await dbConnect()

    const updated = await Content.findOneAndUpdate(
      { page, section, key },
      { value, updatedAt: new Date() },
      { upsert: true, new: true }
    )

    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// Export defaults for server-side use
export { defaults }

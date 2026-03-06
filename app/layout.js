import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CustomCursor from '@/components/ui/CustomCursor'
import FloatingBoxes from '@/components/ui/FloatingBoxes'

export const metadata = {
  title: {
    default: 'Bloom — Drama. Youth. Celebrations.',
    template: '%s | Bloom',
  },
  description:
    'Bloom is a Nigerian creative brand with three powerful branches — Bloom Stage (theatre arts), Bloom Youth Hub (community & growth), and Bloom Events (event planning).',
  keywords: ['Nigerian theatre', 'youth community Nigeria', 'event planning Lagos', 'Bloom', 'stage drama Nigeria'],
  openGraph: {
    title: 'Bloom — Drama. Youth. Celebrations.',
    description: 'A Nigerian creative community rooted in art, growth, and unforgettable moments.',
    type: 'website',
    locale: 'en_NG',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=Dancing+Script:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain-overlay">
        <CustomCursor />
        <FloatingBoxes />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

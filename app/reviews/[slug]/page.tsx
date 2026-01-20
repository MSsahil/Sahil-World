import Link from 'next/link'
import ReviewClient from './review-client'
import { normalizeSlug } from '@/lib/slugs'

// Force dynamic rendering - no static caching or ISR
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface ReviewData {
  [key: string]: {
    title: string
    category: string
    rating: number
    price: string
    affiliateLink: string
    image: string
    excerpt: string
    pros: string[]
    cons: string[]
    verdict: string
    bestFor: string
    notFor: string
    specs: { [key: string]: string }
  }
}

const reviews: ReviewData = {
  'best-laptop-under-55k': {
    title: 'Lenovo ThinkBook 16 - Best Laptop Under 55K',
    category: 'Tech',
    rating: 4.5,
    price: '₹49,999 - ₹54,999',
    affiliateLink: 'https://amzn.to/3ZfKLqK',
    image: '/images/laptop-hero.jpg',
    excerpt: 'The Lenovo ThinkBook 16 delivers exceptional value and performance for creators, developers, and professionals working under a tight budget.',
    pros: [
      'Powerful AMD Ryzen 7 7735HS processor handles multitasking effortlessly',
      '16GB RAM ensures smooth performance for development, content creation, and multitasking',
      '512GB SSD provides fast boot times and app loading',
      '16-inch WUXGA IPS display with 300 Nits brightness for clear visuals',
      'Lightweight at 1.7kg - perfect for travel and remote work',
      'Backlit keyboard and fingerprint sensor for convenience',
      'Aluminum chassis feels premium and durable',
      'Great build quality with professional design',
    ],
    cons: [
      'WUXGA resolution could be higher for a 16-inch display',
      'Single year warranty (limited coverage)',
      'May run warm during intensive gaming or rendering tasks',
      'No dedicated graphics - relies on integrated Radeon graphics',
    ],
    verdict:
      'The Lenovo ThinkBook 16 is the best laptop under 55K for professionals, developers, and content creators. It offers the perfect balance of performance, portability, and build quality at this price point. If you need a reliable workhorse that won\'t break the bank, this is your laptop.',
    bestFor: 'Software developers, content creators, professionals needing portability, students, remote workers',
    notFor: 'Hardcore gamers (no dedicated GPU), those needing 2+ year warranty coverage',
    specs: {
      Processor: 'AMD Ryzen 7 7735HS',
      RAM: '16GB DDR5',
      Storage: '512GB SSD',
      Display: '16" WUXGA (1920x1200) IPS, 300 Nits',
      Graphics: 'Radeon Integrated',
      Weight: '1.7kg',
      Battery: 'Typical 10+ hours mixed usage',
      OS: 'Windows 11 Home',
      Keyboard: 'Backlit',
      Biometric: 'Fingerprint',
      Model: '21MWA0AUIN',
      Warranty: '1 Year',
    },
  },
  'sony-wh1000xm5-headphones': {
    title: 'Sony WH-1000XM5 Headphones',
    category: 'Audio',
    rating: 4.5,
    price: '₹28,000 - ₹32,000',
    affiliateLink: 'https://amazon.in',
    image: '/images/headphones.jpg',
    excerpt: 'Industry-leading noise cancellation with exceptional sound quality.',
    pros: ['Best-in-class ANC', 'Excellent battery life (30+ hours)', 'Comfortable for extended use'],
    cons: ['Premium pricing', 'Can feel heavy after long sessions'],
    verdict: 'The Sony WH-1000XM5 are the best noise-cancelling headphones available.',
    bestFor: 'Travelers, remote workers, audiophiles',
    notFor: 'Budget-conscious buyers, those seeking a lighter option',
    specs: {
      Driver: '40mm',
      'Frequency Response': '4Hz - 40kHz',
    },
  },
  'manfrotto-tripod': {
    title: 'Manfrotto Tripod',
    category: 'Photography',
    rating: 4.5,
    price: '₹8,000 - ₹12,000',
    affiliateLink: 'https://amazon.in',
    image: '/images/tripod.jpg',
    excerpt: 'Reliable and portable tripod perfect for photographers and content creators.',
    pros: ['Lightweight', 'Stable construction', 'Easy to set up', 'Great value'],
    cons: ['Limited height extension', 'Not ideal for very heavy cameras'],
    verdict: 'Perfect tripod for travel and content creation.',
    bestFor: 'Travel photographers, vloggers, content creators',
    notFor: 'Heavy telephoto lens users',
    specs: {
      'Max Height': '170cm',
      'Min Height': '50cm',
    },
  },
  'portable-monitor': {
    title: 'Portable USB-C Monitor',
    category: 'Tech',
    rating: 4.5,
    price: '₹20,000 - ₹25,000',
    affiliateLink: 'https://amazon.in',
    image: '/images/monitor.jpg',
    excerpt: 'Game-changer for remote workers and digital nomads.',
    pros: ['USB-C powered', 'Lightweight', 'Sharp display', 'Improves productivity'],
    cons: ['Can strain eyes on extended use', 'Limited color accuracy for professional work'],
    verdict: 'Excellent portable monitor for remote work setup.',
    bestFor: 'Remote workers, digital nomads, developers',
    notFor: 'Professional color grading work',
    specs: {
      Size: '15.6 inches',
      Resolution: '1080p',
    },
  },
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function ReviewPage({ params }: PageProps) {
  // Await params in Next.js 16
  const { slug } = await params

  // Normalize the incoming slug for comparison
  const normalizedIncomingSlug = normalizeSlug(slug)

  console.log('[v0] Review page loaded with slug:', slug)
  console.log('[v0] Normalized slug:', normalizedIncomingSlug)

  // Find review with normalized slug comparison - defensive validation
  let review = null
  let reviewKey = ''

  for (const [key, value] of Object.entries(reviews)) {
    if (normalizeSlug(key) === normalizedIncomingSlug) {
      review = value
      reviewKey = key
      break
    }
  }

  // Warn (not error) if slug is missing - prevents blank production states
  if (!review) {
    console.warn(`[v0] Warning: Review slug not found: "${slug}" (normalized: "${normalizedIncomingSlug}")`)
    console.warn('[v0] Available slugs:', Object.keys(reviews).map((k) => normalizeSlug(k)))

    return (
      <div className="space-y-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <Link href="/reviews" className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium">
            ← Back to Reviews
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">Review not found</h1>
            <p className="text-foreground/70 text-lg">
              The review you're looking for doesn't exist. Please check the URL or browse our available reviews.
            </p>
          </div>

          <Link
            href="/reviews"
            className="inline-block bg-gradient-to-r from-accent to-secondary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            View All Reviews
          </Link>
        </div>
      </div>
    )
  }

  console.log('[v0] Review found:', reviewKey, '- Affiliate link:', review.affiliateLink)

  // Always render ReviewClient when review exists - no environment checks or build-time conditions
  return <ReviewClient review={review} slug={reviewKey} />
}

import type { Metadata } from "next"
import Link from "next/link"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Reviews & Recommendations - SAHIL",
  description: "Honest product recommendations and reviews. As an Amazon Associate, I earn from qualifying purchases.",
  openGraph: {
    title: "Reviews & Recommendations - SAHIL",
    description: "Genuine product recommendations based on real-world testing and personal use",
    type: "website",
  },
}

interface Product {
  id: string
  title: string
  category: string
  rating: number
  excerpt: string
  slug: string
}

const products: Product[] = [
  {
    id: "1",
    title: "Sony WH-1000XM5 Headphones",
    category: "Audio",
    rating: 4.5,
    excerpt:
      "Excellent noise cancellation and sound quality. Industry-leading performance for travelers and remote workers.",
    slug: "sony-wh1000xm5-headphones",
  },
  {
    id: "2",
    title: "Manfrotto Tripod",
    category: "Photography",
    rating: 4.5,
    excerpt: "Reliable, portable, and perfect for both photos and video content creation.",
    slug: "manfrotto-tripod",
  },
  {
    id: "3",
    title: "Best Laptop Under 55K",
    category: "Tech",
    rating: 4.5,
    excerpt: "Exceptional value laptop with premium performance. Best laptop under 55K with impressive specs.",
    slug: "best-laptop-under-55k",
  },
  {
    id: "4",
    title: "Portable USB-C Monitor",
    category: "Tech",
    rating: 4.5,
    excerpt: "Game-changer for remote work. USB-C powered, sharp display, lightweight and productive.",
    slug: "portable-monitor",
  },
]

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-accent text-accent" : i < rating ? "fill-accent/50 text-accent/50" : "text-border"}`}
        />
      ))}
      <span className="text-sm text-foreground/60 ml-2">{rating}/5</span>
    </div>
  )
}

export default function Reviews() {
  const categories = Array.from(new Set(products.map((p) => p.category)))

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Reviews & Recommendations</h1>

        {/* Disclosure Box */}
        <div className="bg-accent/10 border border-accent rounded-lg p-6 space-y-3">
          <p className="font-semibold text-primary">Affiliate Disclosure</p>
          <p className="text-foreground/80 text-sm leading-relaxed">
            As an Amazon Associate, I earn from qualifying purchases made through affiliate links on this site. This
            disclosure means that when you click an affiliate link and make a purchase, I receive a commission at no
            extra cost to you. This helps support my content creation and website. However, I only recommend products
            I've personally tested, genuinely believe in, and use myself. My recommendations are based on authentic
            personal experience, not financial incentive.
          </p>
        </div>

        <p className="text-lg text-foreground/70 mt-6">
          Every product on this page has been personally tested and used. These are genuine recommendations based on
          real-world experience. All product links are to Amazon.in and marked as affiliate links.
        </p>
      </section>

      {/* Products by Category */}
      {categories.map((category) => {
        const categoryProducts = products.filter((p) => p.category === category)
        return (
          <section key={category} className="max-w-4xl mx-auto px-6 space-y-4">
            <h2 className="text-2xl font-bold text-primary">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/reviews/${product.slug}`}
                  className="group border border-border/50 rounded-lg p-6 hover:border-accent bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 hover:from-accent/10 hover:via-secondary/10 hover:to-accent/5 transition-all space-y-4 hover-lift"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <RatingStars rating={product.rating} />
                  </div>
                  <p className="text-foreground/70">{product.excerpt}</p>
                  <p className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
                    Read Full Review →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      {/* Affiliate Notice */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-muted rounded-xl border border-border">
        <h3 className="text-xl font-bold text-primary mb-4">Why I Use Affiliate Links</h3>
        <p className="text-foreground/70 mb-4">
          Using affiliate links allows me to continue creating free content while being transparent about my
          recommendations. I've personally used and tested every product I recommend. If a product doesn't meet my
          standards, I don't recommend it—no matter the commission.
        </p>
        <p className="text-foreground/70">
          Your trust is my most valuable asset. That's why my affiliate relationships will never compromise the
          authenticity of my reviews.
        </p>
      </section>
    </div>
  )
}

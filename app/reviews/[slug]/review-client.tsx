'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, X, ExternalLink, Star } from 'lucide-react'

interface ReviewData {
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

interface ReviewClientProps {
  review: ReviewData
  slug: string
}

export default function ReviewClient({ review, slug }: ReviewClientProps) {
  const [selectedSpec] = useState<string | null>(null)

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Link href="/reviews" className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Reviews
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 space-y-6">
        <div className="space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">{review.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">{review.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(review.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">{review.rating}/5</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-accent">{review.price}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={review.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-secondary text-primary-foreground px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all font-semibold button-glow w-full sm:w-auto"
        >
          View on Amazon <ExternalLink className="w-4 h-4" />
        </a>

        {/* Affiliate Disclosure */}
        <div className="bg-accent/10 border border-accent rounded-lg p-4 text-sm text-foreground/80">
          <p>
            <strong>Affiliate Link:</strong> This is an affiliate link. Purchasing through this link doesn't cost you extra, but I earn a small commission. Read my full{' '}
            <Link href="/about" className="text-accent hover:underline font-semibold">
              affiliate disclosure
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Overview</h2>
        <p className="text-lg text-foreground/80 leading-relaxed">{review.excerpt}</p>
      </section>

      {/* Pros and Cons */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pros */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <Check className="w-6 h-6 text-green-500" />
              Pros
            </h3>
            <ul className="space-y-3">
              {review.pros.map((pro, idx) => (
                <li key={idx} className="flex gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <X className="w-6 h-6 text-red-500" />
              Cons
            </h3>
            <ul className="space-y-3">
              {review.cons.map((con, idx) => (
                <li key={idx} className="flex gap-3 text-foreground/80">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Best For / Not For */}
      <section className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-lg p-6">
          <h3 className="font-bold text-primary mb-3">Best For</h3>
          <p className="text-foreground/80">{review.bestFor}</p>
        </div>
        <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-6">
          <h3 className="font-bold text-primary mb-3">Not For</h3>
          <p className="text-foreground/80">{review.notFor}</p>
        </div>
      </section>

      {/* Specifications */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(review.specs).map(([key, value]) => (
            <div key={key} className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
              <p className="text-sm font-semibold text-foreground/60 mb-1">{key}</p>
              <p className="text-foreground font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verdict */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Final Verdict</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{review.verdict}</p>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-6">
        <a
          href={review.affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full bg-gradient-to-r from-accent to-secondary text-primary-foreground px-8 py-4 rounded-lg hover:shadow-2xl transition-all font-semibold text-center button-glow"
        >
          Get {review.title} on Amazon →
        </a>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Travel & Lifestyle - SAHIL",
  description: "Authentic travel experiences from Kazakhstan, Darjeeling, Gangtok, Goa, and Nepal.",
  openGraph: {
    title: "Travel & Lifestyle - SAHIL",
    description: "Stories and experiences from my journeys across Asia",
    type: "website",
  },
}

interface TravelDestination {
  slug: string
  title: string
  location: string
  date: string
  description: string
  image?: string
  featured?: boolean
}

const destinations: TravelDestination[] = [
  {
    slug: "motorcycleadventure",
    title: "Motorcycle Adventure",
    location: "Personal Journey",
    date: "2023",
    description: "Exploring mountains on two wheels with breathtaking views. The freedom of open roads and adventure.",
    image: "/images/20231112-153243.jpg",
    featured: true,
  },
  {
    slug: "kazakhstan-must-visit",
    title: "Kazakhstan - Must Visit Places",
    location: "Kazakhstan",
    date: "2023",
    description:
      "Discover Almaty's charm, breathtaking mountain landscapes, and authentic Kazakh culture and hospitality.",
  },
  {
    slug: "darjeeling-must-visit",
    title: "Darjeeling - Tea & Mountains",
    location: "Darjeeling, India",
    date: "2023",
    description:
      "Experience authentic tea gardens, colonial heritage, and mountain beauty at this Himalayan destination.",
  },
  {
    slug: "gangtok-must-visit",
    title: "Gangtok - Spiritual Himalayas",
    location: "Gangtok, India",
    date: "2023",
    description: "Explore Buddhist monasteries, pristine nature, and the unique culture of Sikkim's capital.",
  },
  {
    slug: "goa-beyond-beaches",
    title: "Goa - Beyond the Beaches",
    location: "Goa, India",
    date: "2023",
    description: "Discover Goa's rich Portuguese heritage, authentic food scene, and genuine local culture.",
  },
  {
    slug: "nepal-mountains",
    title: "Nepal - Mountains & Spirituality",
    location: "Nepal",
    date: "2023",
    description: "Trek through the Himalayas, experience spiritual centers, and embrace Nepal's warmth and culture.",
  },
]

export default function Travel() {
  const featuredDestination = destinations.find((d) => d.featured)
  const otherDestinations = destinations.filter((d) => !d.featured)

  return (
    <div className="space-y-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-accent-2 bg-clip-text text-transparent">
            Travel & Lifestyle
          </span>
        </h1>
        <p className="text-lg text-foreground/70">
          Stories and experiences from my journeys across Asia. Each destination offers unique perspectives on culture,
          design, food, and human connection.
        </p>
      </section>

      {/* Featured Destination */}
      {featuredDestination && (
        <section className="max-w-4xl mx-auto px-6">
          <Link
            href={`/travel/${featuredDestination.slug}`}
            className="group block bg-gradient-to-br from-accent/30 via-accent-2/20 to-background rounded-2xl overflow-hidden border-2 border-accent/50 hover:border-accent hover:shadow-2xl transition-all duration-300"
          >
            {featuredDestination.image && (
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={featuredDestination.image || "/placeholder.svg"}
                  alt={featuredDestination.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            )}
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Featured</span>
              </div>
              <h2 className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">
                {featuredDestination.title}
              </h2>
              <p className="text-lg text-foreground/70">{featuredDestination.description}</p>
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm font-semibold text-foreground/60">{featuredDestination.location}</span>
                <span className="text-sm text-foreground/60">{featuredDestination.date}</span>
              </div>
              <p className="text-accent font-bold group-hover:translate-x-1 transition-transform">Read Full Story →</p>
            </div>
          </Link>
        </section>
      )}

      {/* Other Destinations Grid */}
      <section className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-primary mb-6">More Destinations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherDestinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/travel/${destination.slug}`}
              className="group block rounded-xl overflow-hidden border-2 border-accent/30 hover:border-accent hover:shadow-xl transition-all duration-300 bg-card hover:bg-gradient-to-br hover:from-accent/10 hover:to-accent-2/10"
            >
              {destination.image && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors flex-1">
                    {destination.title}
                  </h3>
                </div>
                <p className="text-foreground/70 line-clamp-2">{destination.description}</p>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-sm text-foreground/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {destination.location}
                  </span>
                  <span className="text-sm text-foreground/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {destination.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-r from-accent/20 to-accent-2/20 rounded-xl text-center border-2 border-accent/50">
        <h3 className="text-2xl font-bold text-primary mb-2">More Coming Soon</h3>
        <p className="text-foreground/70">
          I'm constantly traveling and documenting new experiences. Check back regularly for new destinations.
        </p>
      </section>
    </div>
  )
}

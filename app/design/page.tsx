import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Interior Design Portfolio - SAHIL",
  description:
    "See my interior design projects from concept through execution. Professional residential and commercial design work.",
  openGraph: {
    title: "Interior Design Portfolio - SAHIL",
    description: "Interior design projects showcasing concept, execution, and transformation",
    type: "website",
  },
}

interface DesignProject {
  slug: string
  title: string
  description: string
  style: string
  year: string
  featured?: boolean
}

const projects: DesignProject[] = [
  {
    slug: "minimalist-apartment",
    title: "Minimalist Apartment Transformation",
    description:
      "Converting a cluttered 500 sq ft apartment into a clean, organized living space with careful material selection.",
    style: "Minimalist",
    year: "2023",
    featured: true,
  },
  {
    slug: "warm-home-office",
    title: "Home Office Design",
    description: "Creating a productive yet comfortable workspace combining ergonomics with aesthetic appeal.",
    style: "Modern",
    year: "2023",
  },
  {
    slug: "bohemian-bedroom",
    title: "Bohemian Bedroom Redesign",
    description:
      "Bringing warmth and personality to a bedroom through layered textures and thoughtful color selection.",
    style: "Bohemian",
    year: "2023",
  },
  {
    slug: "scandinavian-living",
    title: "Scandinavian Living Room",
    description: "Light, airy living space emphasizing functionality and natural materials.",
    style: "Scandinavian",
    year: "2023",
  },
]

const DesignPage = () => {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="space-y-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Interior Design Portfolio</h1>
        <p className="text-lg text-foreground/70">
          Each project showcases the complete design journey: from initial concept and client collaboration, through
          material selection and design development, to final execution and transformation.
        </p>
      </section>

      {/* Featured Project */}
      {featured && (
        <section className="max-w-4xl mx-auto px-6">
          <Link
            href={`/design/${featured.slug}`}
            className="group block bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl overflow-hidden border border-border hover:border-primary transition-all p-8 space-y-4"
          >
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span className="inline-block">Featured Project</span>
            </div>
            <h2 className="text-3xl font-bold text-primary group-hover:text-accent transition-colors">
              {featured.title}
            </h2>
            <p className="text-lg text-foreground/70">{featured.description}</p>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-semibold text-foreground/60">{featured.style}</span>
              <span className="text-sm text-foreground/60">{featured.year}</span>
            </div>
            <p className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
              View Project <ArrowRight className="inline w-4 h-4 ml-1" />
            </p>
          </Link>
        </section>
      )}

      {/* Additional code can be added here */}
    </div>
  )
}

export default DesignPage // Ensure there is a default export

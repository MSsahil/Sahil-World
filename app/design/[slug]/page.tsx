import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const titleMap: Record<string, string> = {
    "minimalist-apartment": "Minimalist Apartment Transformation - Nomad Network",
    "warm-home-office": "Home Office Design - Nomad Network",
    "bohemian-bedroom": "Bohemian Bedroom Redesign - Nomad Network",
    "scandinavian-living": "Scandinavian Living Room - Nomad Network",
  }

  return {
    title: titleMap[slug] || "Design Project - Nomad Network",
    description: "Interior design project showcasing the complete design process",
  }
}

interface ProjectData {
  title: string
  style: string
  year: string
  size: string
  client: string
  challenge: string
  concept: string
  materials: string[]
  execution: string
  result: string
}

const projects: Record<string, ProjectData> = {
  "minimalist-apartment": {
    title: "Minimalist Apartment Transformation",
    style: "Minimalist",
    year: "2023",
    size: "500 sq ft",
    client: "Young Professional",
    challenge:
      "The apartment felt cluttered and lacked organization. The client wanted a clean, peaceful living space that maximized functionality in a small area.",
    concept:
      "We developed a minimalist design philosophy focused on intentional selection, clean lines, and ample storage. The concept emphasized negative space and quality over quantity.",
    materials: [
      "Natural oak flooring",
      "White matte walls",
      "Light gray upholstery",
      "Walnut furniture pieces",
      "Soft white textiles",
      "Stainless steel fixtures",
    ],
    execution:
      "Implementation involved careful furniture selection, built-in storage solutions, and thoughtful lighting. Each item was chosen for both aesthetic and functional value.",
    result:
      "The space transformed into a calm, organized home that supports both relaxation and productivity. The client reports feeling more peaceful in their home.",
  },
  "warm-home-office": {
    title: "Home Office Design",
    style: "Modern",
    year: "2023",
    size: "200 sq ft",
    client: "Remote Worker",
    challenge:
      "Creating a productive workspace that doesn't feel sterile or disconnected from the home, while meeting ergonomic requirements.",
    concept:
      "A balanced approach combining modern efficiency with warm, inviting elements. The design emphasizes natural light and ergonomic comfort.",
    materials: [
      "Warm walnut desk",
      "Soft beige walls",
      "Adjustable ergonomic chair",
      "Floating shelves",
      "Natural wood accents",
      "Warm LED lighting",
    ],
    execution:
      "Careful layout planning ensured optimal natural light and minimal distractions. Storage solutions keep the workspace organized while maintaining visual calm.",
    result:
      "The home office became the client's favorite room—both productive and psychologically comfortable. They report increased focus and reduced fatigue.",
  },
  "bohemian-bedroom": {
    title: "Bohemian Bedroom Redesign",
    style: "Bohemian",
    year: "2023",
    size: "150 sq ft",
    client: "Creative Professional",
    challenge:
      "The bedroom felt cold and impersonal. The client wanted a space that reflected their personality and creative spirit.",
    concept:
      "A layered bohemian approach with rich textures, warm earth tones, and collected pieces that tell a story. The design celebrates personality and comfort.",
    materials: [
      "Macramé wall hanging",
      "Warm terracotta tones",
      "Layered rugs",
      "Vintage textile accents",
      "Woven wall art",
      "Natural fiber curtains",
    ],
    execution:
      "Implementation focused on layering textures and colors, carefully mixing patterns without overwhelming the space. Each element was selected for character.",
    result:
      "The bedroom became a personal sanctuary reflecting the client's creativity and personality. The space feels both unique and perfectly functional.",
  },
  "scandinavian-living": {
    title: "Scandinavian Living Room",
    style: "Scandinavian",
    year: "2023",
    size: "400 sq ft",
    client: "Family",
    challenge:
      "The family wanted a bright, functional living space that feels warm despite its minimalist approach. The room needed to serve multiple purposes.",
    concept:
      "Clean lines, light woods, and minimal color palette combined with thoughtful layering of textures. The concept emphasizes both functionality and coziness.",
    materials: [
      "Light ash wood furniture",
      "White matte walls",
      "Cozy wool rug",
      "Simple upholstery",
      "Industrial accents",
      "Natural light maximization",
    ],
    execution:
      "The design maximizes natural light, uses functional furniture, and layers subtle textures for warmth. Every piece has purpose and contributes to the overall coherence.",
    result:
      "The living room became the family's favorite gathering space—clean and bright yet warm and inviting. The design supports both relaxation and activity.",
  },
}

export default async function DesignDetail({ params }: PageProps) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Project Not Found</h1>
        <Link href="/design" className="text-accent hover:underline">
          Back to Design Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <Link href="/design" className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Design Portfolio
        </Link>

        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">{project.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase">Style</p>
                <p className="font-semibold text-foreground">{project.style}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase">Year</p>
                <p className="font-semibold text-foreground">{project.year}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase">Size</p>
                <p className="font-semibold text-foreground">{project.size}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase">Type</p>
                <p className="font-semibold text-foreground">{project.client}</p>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="aspect-video w-full bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
            <img
              src={`/interior-design-project-.jpg?height=600&width=800&query=Interior design project ${project.title}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Content */}
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-primary">The Challenge</h2>
              <p>{project.challenge}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-primary">Design Concept</h2>
              <p>{project.concept}</p>
            </section>

            {/* Materials Grid */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-primary">Materials & Finishes</h2>
              <div className="grid grid-cols-2 gap-3">
                {project.materials.map((material, i) => (
                  <div key={i} className="bg-muted rounded-lg p-3 border border-border flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span>{material}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-primary">Implementation</h2>
              <p>{project.execution}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-primary">The Result</h2>
              <p>{project.result}</p>
            </section>
          </div>

          {/* Results Highlight */}
          <div className="bg-accent/10 border border-accent rounded-lg p-6 space-y-3">
            <p className="font-semibold text-primary">Project Complete</p>
            <p className="text-foreground/80">
              This project demonstrates how thoughtful design thinking, material selection, and attention to detail
              transform ordinary spaces into meaningful environments that support how people actually live.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

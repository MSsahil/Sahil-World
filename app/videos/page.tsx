import type { Metadata } from "next"
import { Youtube } from "lucide-react"

export const metadata: Metadata = {
  title: "Videos - Nomad Network",
  description: "My YouTube videos featuring travel vlogs, design content, and tech tutorials.",
  openGraph: {
    title: "Videos - Nomad Network",
    description: "Watch my latest videos on travel, design, and technology",
    type: "website",
  },
}

interface Video {
  id: string
  title: string
  description: string
  category: "travel" | "design" | "tech"
}

const videos: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "Kazakhstan Travel Vlog 2023",
    description: "A comprehensive video tour of Kazakhstan's landscapes and culture",
    category: "travel",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Interior Design Project Breakdown",
    description: "Watch how I approach a full design project from concept to execution",
    category: "design",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Building Web Apps with Next.js",
    description: "A tutorial on modern web development with Next.js and React",
    category: "tech",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Darjeeling Tea Gardens Vlog",
    description: "Exploring the tea estates and culture of Darjeeling",
    category: "travel",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Design Tips for Small Spaces",
    description: "Practical interior design advice for maximizing small living spaces",
    category: "design",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "AI in Web Development",
    description: "How AI is changing the landscape of modern web development",
    category: "tech",
  },
]

export default function Videos() {
  const travelVideos = videos.filter((v) => v.category === "travel")
  const designVideos = videos.filter((v) => v.category === "design")
  const techVideos = videos.filter((v) => v.category === "tech")

  return (
    <div className="space-y-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Videos</h1>
        <p className="text-lg text-foreground/70">
          My latest content on YouTube covering travel experiences, interior design projects, and technology tutorials.
        </p>
      </section>

      {/* YouTube Channel CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <a
          href="https://www.youtube.com/@YourChannelName"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Youtube className="w-5 h-5" />
          Subscribe to My Channel
        </a>
      </section>

      {/* Travel Videos */}
      <section className="max-w-4xl mx-auto px-6 space-y-4">
        <h2 className="text-2xl font-bold text-primary">Travel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {travelVideos.map((video) => (
            <div
              key={video.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-muted relative overflow-hidden"
              >
                <img
                  src={`/youtube-thumbnail-for-.jpg?height=315&width=560&query=YouTube thumbnail for ${video.title}`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <Youtube className="w-16 h-16 text-white" />
                </div>
              </a>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{video.title}</h3>
                <p className="text-sm text-foreground/70">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Videos */}
      <section className="max-w-4xl mx-auto px-6 space-y-4">
        <h2 className="text-2xl font-bold text-primary">Interior Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designVideos.map((video) => (
            <div
              key={video.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-muted relative overflow-hidden"
              >
                <img
                  src={`/youtube-thumbnail-for-.jpg?height=315&width=560&query=YouTube thumbnail for ${video.title}`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <Youtube className="w-16 h-16 text-white" />
                </div>
              </a>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{video.title}</h3>
                <p className="text-sm text-foreground/70">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Videos */}
      <section className="max-w-4xl mx-auto px-6 space-y-4">
        <h2 className="text-2xl font-bold text-primary">Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techVideos.map((video) => (
            <div
              key={video.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-muted relative overflow-hidden"
              >
                <img
                  src={`/youtube-thumbnail-for-.jpg?height=315&width=560&query=YouTube thumbnail for ${video.title}`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <Youtube className="w-16 h-16 text-white" />
                </div>
              </a>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{video.title}</h3>
                <p className="text-sm text-foreground/70">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

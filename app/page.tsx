import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Code2, Palette, Youtube, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <section className="relative w-full h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/20231112-153243.jpg"
            alt="Sahil traveling on a motorcycle with mountain backdrop"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Multiple gradient overlays for depth and text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-0 text-center md:text-left space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold justify-center md:justify-start animate-fade-in">
              <Sparkles className="w-5 h-5" />
              <span>Welcome to SAHIL&apos;s World</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg animate-fade-in-up">
              <span className="block">Adventure Beyond</span>
              <span className="block bg-gradient-to-r from-accent via-secondary to-accent-3 bg-clip-text text-transparent">
                Boundaries
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-md mx-auto md:mx-0">
              Authentic travel stories, genuine product reviews, and creative projects from across Asia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6 justify-center md:justify-start">
            <Link
              href="/travel"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-secondary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-2xl hover:scale-105 transition-all font-semibold button-glow w-full sm:w-auto"
            >
              Explore Travel <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center gap-2 border-2 border-accent-3 text-accent-3 px-8 py-3 rounded-lg hover:bg-accent-3/20 transition-all font-semibold hover-lift w-full sm:w-auto bg-accent-3/10 backdrop-blur-sm"
            >
              View Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="text-white/60 text-sm font-medium">Scroll to explore</div>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-primary">Moments That Matter</h2>
          <p className="text-foreground/70 text-lg">Captured from my adventures around the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Motorcycle Adventure Image */}
          <Link
            href="/travel/motorcycleadventure"
            className="group relative overflow-hidden rounded-2xl h-80 hover:shadow-2xl transition-all hover-lift border-2 border-accent/30 hover:border-accent"
          >
            <Image
              src="/images/20231112-153243.jpg"
              alt="Motorcycle Adventure with mountain view"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl">Motorcycle Adventure</h3>
                <p className="text-white/80 text-sm mt-1">Exploring mountains on two wheels</p>
              </div>
            </div>
          </Link>

          {/* Autumn Park Image */}
          <Link
            href="/travel/darjeeling-must-visit"
            className="group relative overflow-hidden rounded-2xl h-80 hover:shadow-2xl transition-all hover-lift border-2 border-secondary/30 hover:border-secondary"
          >
            <Image
              src="/images/20231110-173220.jpg"
              alt="Autumn park exploration"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl">Autumn Moments</h3>
                <p className="text-white/80 text-sm mt-1">Nature&apos;s beautiful seasons</p>
              </div>
            </div>
          </Link>

          {/* Road Trip Image */}
          <Link
            href="/travel/goa-beyond-beaches"
            className="group relative overflow-hidden rounded-2xl h-80 hover:shadow-2xl transition-all hover-lift border-2 border-accent-3/30 hover:border-accent-3"
          >
            <Image
              src="/images/20231111-091243-1.jpg"
              alt="Road trip journey"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl">Open Roads</h3>
                <p className="text-white/80 text-sm mt-1">Freedom and exploration</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Preview Cards Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Travel Card */}
          <Link
            href="/travel"
            className="group card-gradient border-2 border-border/50 rounded-2xl p-8 hover:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="inline-block bg-gradient-to-br from-accent/20 to-accent/10 p-3 rounded-lg mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary mb-3">Travel & Lifestyle</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Stories and experiences from my journeys across Kazakhstan, Darjeeling, Gangtok, Goa, and Nepal.
                </p>
              </div>
            </div>
            <p className="text-sm text-accent font-semibold group-hover:translate-x-1 transition-transform">
              Read Stories →
            </p>
          </Link>

          {/* Reviews Card */}
          <Link
            href="/reviews"
            className="group card-gradient border-2 border-border/50 rounded-2xl p-8 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/30 transition-all hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="inline-block bg-gradient-to-br from-secondary/20 to-secondary/10 p-3 rounded-lg mb-4">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary mb-3">Honest Reviews</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Genuine product recommendations with transparent affiliate disclosures and real-world testing.
                </p>
              </div>
            </div>
            <p className="text-sm text-secondary font-semibold group-hover:translate-x-1 transition-transform">
              Explore Products →
            </p>
          </Link>

          {/* Videos Card */}
          <Link
            href="/videos"
            className="group card-gradient border-2 border-border/50 rounded-2xl p-8 hover:border-accent-3 hover:shadow-2xl hover:shadow-accent-3/30 transition-all hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="inline-block bg-gradient-to-br from-accent-3/20 to-accent-3/10 p-3 rounded-lg mb-4">
                  <Youtube className="w-6 h-6 text-accent-3" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary mb-3">YouTube Content</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Travel vlogs, design breakdowns, tech tutorials, and creative content from my journey.
                </p>
              </div>
            </div>
            <p className="text-sm text-accent-3 font-semibold group-hover:translate-x-1 transition-transform">
              Watch Videos →
            </p>
          </Link>

          {/* Design Card */}
          <Link
            href="/design"
            className="group card-gradient border-2 border-border/50 rounded-2xl p-8 hover:border-accent/70 hover:shadow-2xl hover:shadow-accent/20 transition-all hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="inline-block bg-gradient-to-br from-accent/20 to-accent/10 p-3 rounded-lg mb-4">
                  <Palette className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary mb-3">Interior Design</h3>
                <p className="text-foreground/70 leading-relaxed">
                  End-to-end design projects showcasing concept development, execution, and real transformations.
                </p>
              </div>
            </div>
            <p className="text-sm text-accent font-semibold group-hover:translate-x-1 transition-transform">
              View Portfolio →
            </p>
          </Link>

          {/* Work Card */}
          <Link
            href="/work"
            className="group card-gradient border-2 border-border/50 rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="inline-block bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-lg mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary mb-3">Web Development</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Full-stack development, web applications, mobile solutions, and AI-powered creative projects.
                </p>
              </div>
            </div>
            <p className="text-sm text-primary font-semibold group-hover:translate-x-1 transition-transform">
              Explore Services →
            </p>
          </Link>

          {/* About Card */}
          <Link
            href="/about"
            className="group card-gradient border-2 border-border/50 rounded-2xl p-8 hover:border-accent-2 hover:shadow-2xl hover:shadow-accent-2/20 transition-all hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="inline-block bg-gradient-to-br from-accent-2/20 to-accent-2/10 p-3 rounded-lg mb-4">
                  <MapPin className="w-6 h-6 text-accent-2" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary mb-3">About Me</h3>
                <p className="text-foreground/70 leading-relaxed">
                  My story, journey, and how I balance travel, design, development, and authentic content creation.
                </p>
              </div>
            </div>
            <p className="text-sm text-accent-2 font-semibold group-hover:translate-x-1 transition-transform">
              Read My Story →
            </p>
          </Link>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl space-y-8 border border-border/50">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary">Why Trust SAHIL?</h2>
          <p className="text-foreground/70 text-lg">
            Every recommendation, review, and story is built on genuine experience and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-6 space-y-3 hover:border-accent/60 transition-all hover-lift">
            <p className="font-bold text-accent text-lg">Authentic Testing</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              I personally use and test every product I recommend, sharing honest pros, cons, and real-world insights.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-transparent backdrop-blur-sm border-2 border-secondary/30 rounded-2xl p-6 space-y-3 hover:border-secondary/60 transition-all hover-lift">
            <p className="font-bold text-secondary text-lg">Transparent Affiliates</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              All affiliate relationships are clearly disclosed. I only recommend products I genuinely use and believe
              in.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent-3/10 to-transparent backdrop-blur-sm border-2 border-accent-3/30 rounded-2xl p-6 space-y-3 hover:border-accent-3/60 transition-all hover-lift">
            <p className="font-bold text-accent-3 text-lg">Real Experiences</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              All travel stories, design work, and tech insights come directly from my personal experience and
              expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

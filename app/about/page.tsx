import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SAHIL - Traveler, Creator & Developer",
  description:
    "Learn about Sahil's journey as a lifestyle creator, traveler, interior designer, and software developer.",
  openGraph: {
    title: "About SAHIL - Traveler, Creator & Developer",
    description: "My story and what drives my work across multiple passions.",
    type: "website",
  },
}

export default function About() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          <span className="bg-gradient-to-r from-primary via-accent to-accent-2 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>

        <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
          <p>
            I'm Sahil, a lifestyle creator, traveler, and multidisciplinary professional passionate about authentic
            experiences and quality craftsmanship. What started as a love for travel has evolved into a mission to share
            genuine insights across multiple domains.
          </p>

          <p>
            My journey began with a curiosity about different cultures and design aesthetics. Over the years, I've
            channeled that curiosity into three distinct but interconnected areas: travel experiences, interior design
            projects, and software development. Each discipline informs the others, creating a unique perspective.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10">Travel & Lifestyle</h2>
          <p>
            I've traveled extensively across Asia, from the mountains of Kazakhstan to the tea gardens of Darjeeling,
            the valleys of Gangtok, and the beaches of Goa. These journeys aren't just vacations—they're deep dives into
            local culture, food, design, and community. I document these experiences not as a tourist passing through,
            but as someone genuinely engaged with the places I visit.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10">Interior Design</h2>
          <p>
            Interior design is where I combine my passion for aesthetics with practical problem-solving. Every project
            follows a complete journey: from initial concept and client collaboration, through design development and
            material selection, to final execution. I believe great design is about creating spaces that serve both
            function and emotion. Each project is a reflection of understanding the client's needs and the space's
            potential.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10">Software Development</h2>
          <p>
            My development work ranges from full-stack web applications to mobile solutions and AI-powered projects. I
            approach each project with the same philosophy: clean architecture, user-centered design, and genuine
            problem-solving. Whether building for startups or established businesses, I focus on creating tools that are
            both elegant and effective.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10">Product Recommendations & Reviews</h2>
          <p>
            In all three areas of my work, I use various products and tools daily. I've decided to share honest reviews
            and recommendations with my audience. Each review is based on genuine personal use, real testing, and
            transparent evaluation. As an Amazon Associate, I earn from qualifying purchases, which helps support this
            content creation. All affiliate relationships are clearly disclosed—I recommend only products I truly
            believe in and actually use.
          </p>

          <div className="bg-gradient-to-br from-accent/10 to-accent-2/10 rounded-xl p-6 mt-10 border-2 border-accent/30">
            <h3 className="font-semibold text-primary mb-3">My Philosophy</h3>
            <p className="text-sm">
              Authenticity is everything. Whether it's a travel story, design project, or product recommendation, I
              believe in genuine engagement. My audience deserves honest insights, not sales pitches. That's why I focus
              on sharing real experiences, transparent disclosures, and recommendations I personally stand behind.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-3xl mx-auto px-6 py-12 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 rounded-xl text-center border-2 border-accent/30">
        <h2 className="text-2xl font-bold text-primary mb-4">Let's Connect</h2>
        <p className="text-foreground/70 mb-6">
          Have a project, question, or just want to chat? I'd love to hear from you.
        </p>
        <div className="space-y-2">
          <p>
            <a href="mailto:nomadnetwork1@gmail.com" className="text-primary font-semibold hover:underline">
              nomadnetwork1@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+919619393281" className="text-primary font-semibold hover:underline">
              +91 961-939-328
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

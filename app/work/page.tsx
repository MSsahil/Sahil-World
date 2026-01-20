import type { Metadata } from "next"
import { Code2, Smartphone, Brain, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Development & Services - SAHIL",
  description:
    "Full-stack web development, mobile applications, AI solutions, and freelance services for startups and established businesses.",
  openGraph: {
    title: "Web Development & Services - SAHIL",
    description: "Professional development services including web apps, mobile development, and AI solutions",
    type: "website",
  },
}

export default function Work() {
  return (
    <div className="space-y-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Services & Development</h1>
        <p className="text-lg text-foreground/70">
          I build digital solutions that combine thoughtful design with robust engineering. Whether you're a startup
          looking to launch or an established business needing technical expertise, I approach every project with the
          same commitment to quality and innovation.
        </p>
      </section>

      {/* Core Services */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary mb-8">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Development */}
          <div className="border border-border/50 rounded-lg p-8 space-y-4 hover:border-accent bg-gradient-to-br from-accent/5 to-secondary/5 hover:bg-gradient-to-br hover:from-accent/10 hover:to-secondary/10 transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Full-Stack Web Development</h3>
                <p className="text-foreground/70 mb-4">
                  Building modern, scalable web applications using Next.js, React, TypeScript, and cloud infrastructure.
                </p>
                <ul className="text-sm space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Custom web applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    API development & integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Database design & optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Cloud deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="border border-border/50 rounded-lg p-8 space-y-4 hover:border-secondary bg-gradient-to-br from-secondary/5 to-accent/5 hover:bg-gradient-to-br hover:from-secondary/10 hover:to-accent/10 transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Mobile Applications</h3>
                <p className="text-foreground/70 mb-4">
                  Cross-platform mobile apps built with React Native and native technologies that perform beautifully.
                </p>
                <ul className="text-sm space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    iOS & Android development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Cross-platform solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    App store optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Solutions */}
          <div className="border border-border/50 rounded-lg p-8 space-y-4 hover:border-accent bg-gradient-to-br from-accent/5 to-secondary/5 hover:bg-gradient-to-br hover:from-accent/10 hover:to-secondary/10 transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">AI & Machine Learning</h3>
                <p className="text-foreground/70 mb-4">
                  Implementing AI solutions, chatbots, automation, and intelligent features into your applications.
                </p>
                <ul className="text-sm space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    AI integration & APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Chatbot development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Data analysis & automation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    ML model deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consulting */}
          <div className="border border-border/50 rounded-lg p-8 space-y-4 hover:border-secondary bg-gradient-to-br from-secondary/5 to-accent/5 hover:bg-gradient-to-br hover:from-secondary/10 hover:to-accent/10 transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Technical Consulting</h3>
                <p className="text-foreground/70 mb-4">
                  Strategic guidance on technology choices, architecture decisions, and scaling challenges.
                </p>
                <ul className="text-sm space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Tech stack selection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Architecture planning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Performance optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Team guidance & mentoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-4xl mx-auto px-6 space-y-6">
        <h2 className="text-2xl font-bold text-primary">Technology Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg p-6 border border-border/50 space-y-3">
            <h3 className="font-bold text-primary">Frontend</h3>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>SWR & React Query</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-lg p-6 border border-border/50 space-y-3">
            <h3 className="font-bold text-primary">Backend</h3>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>Node.js & Express</li>
              <li>PostgreSQL & MongoDB</li>
              <li>Serverless Architecture</li>
              <li>API Design</li>
              <li>Authentication & Security</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg p-6 border border-border/50 space-y-3">
            <h3 className="font-bold text-primary">Deployment</h3>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>Vercel & AWS</li>
              <li>Docker & Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Performance Monitoring</li>
              <li>Infrastructure as Code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-6 space-y-6">
        <h2 className="text-2xl font-bold text-primary">How We Work</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="font-bold text-primary mb-2">1. Discovery & Planning</h3>
            <p className="text-foreground/70">
              We start by understanding your business goals, technical requirements, and user needs. Clear planning
              prevents costly mistakes.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="font-bold text-primary mb-2">2. Architecture & Design</h3>
            <p className="text-foreground/70">
              We design scalable architecture and create detailed technical specifications before writing code.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="font-bold text-primary mb-2">3. Iterative Development</h3>
            <p className="text-foreground/70">
              We build features incrementally with regular testing and feedback loops. This reduces risk and ensures
              quality.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="font-bold text-primary mb-2">4. Testing & Optimization</h3>
            <p className="text-foreground/70">
              Comprehensive testing, performance optimization, and security audits ensure production-ready quality.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="font-bold text-primary mb-2">5. Launch & Support</h3>
            <p className="text-foreground/70">
              We handle deployment, monitor performance, and provide ongoing support to ensure success post-launch.
            </p>
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-muted rounded-xl space-y-6 border border-border">
        <h2 className="text-2xl font-bold text-primary">My Approach</h2>

        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            I believe great software is built on clear communication, thoughtful planning, and attention to detail.
            Technology should solve real problems elegantly, not add complexity.
          </p>

          <p>
            I work as both individual contributor and team member, adapting to your project's needs. Whether building
            from scratch or scaling existing systems, I bring a combination of technical expertise and pragmatic
            thinking.
          </p>

          <p>
            Quality is non-negotiable. This means clean code, comprehensive testing, excellent documentation, and
            solutions that scale. I care about the work I ship and its long-term maintainability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-accent/10 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Let's Build Something Great</h2>
        <p className="text-foreground/70 mb-6">
          Whether you have a specific project in mind or want to discuss possibilities, I'm always interested in talking
          with thoughtful people about interesting problems.
        </p>
        <a
          href="mailto:nomadnetwork1@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  )
}

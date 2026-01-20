import type { Metadata } from "next"
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact - SAHIL",
  description: "Get in touch. Let's discuss your project, question, or idea.",
  openGraph: {
    title: "Contact - SAHIL",
    description: "Contact me for projects, collaborations, or questions",
    type: "website",
  },
}

export default function Contact() {
  return (
    <div className="space-y-12">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Let's Connect</h1>
        <p className="text-lg text-foreground/70">
          I'm always interested in hearing about new projects, collaborations, or just having an interesting
          conversation. Feel free to reach out.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <a
            href="mailto:sahil@example.com"
            className="group border border-border/50 rounded-lg p-8 hover:border-accent bg-gradient-to-br from-accent/5 to-secondary/5 hover:bg-gradient-to-br hover:from-accent/10 hover:to-secondary/10 transition-all space-y-4 hover-lift"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary">Email</h3>
            <p className="text-foreground/70 mb-4">
              For projects, inquiries, or just a friendly message. I typically respond within 24 hours.
            </p>
            <p className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
              sahil@example.com →
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919619393281"
            className="group border border-border/50 rounded-lg p-8 hover:border-secondary bg-gradient-to-br from-secondary/5 to-accent/5 hover:bg-gradient-to-br hover:from-secondary/10 hover:to-accent/10 transition-all space-y-4 hover-lift"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary">Phone</h3>
            <p className="text-foreground/70 mb-4">
              For urgent matters or if you prefer a conversation. I'm generally available India Standard Time.
            </p>
            <p className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
              +91 961-939-328 →
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919619393281"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border/50 rounded-lg p-8 hover:border-accent bg-gradient-to-br from-accent/5 to-secondary/5 hover:bg-gradient-to-br hover:from-accent/10 hover:to-secondary/10 transition-all space-y-4 hover-lift"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary">WhatsApp</h3>
            <p className="text-foreground/70 mb-4">
              Quick messages, updates, or casual conversation. Fast response to WhatsApp messages.
            </p>
            <p className="text-accent font-semibold group-hover:translate-x-1 transition-transform">Send a Message →</p>
          </a>

          {/* Location */}
          <div className="border border-border/50 rounded-lg p-8 space-y-4 hover:border-secondary bg-gradient-to-br from-secondary/5 to-accent/5 hover:bg-gradient-to-br hover:from-secondary/10 hover:to-accent/10 transition-all hover-lift">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary">Location</h3>
            <p className="text-foreground/70 mb-4">
              I work remotely and travel frequently. Open to meetings via video call or in person when in the same
              location.
            </p>
            <p className="text-accent font-semibold">India (IST Timezone)</p>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-muted rounded-xl space-y-6 border border-border">
        <h2 className="text-2xl font-bold text-primary">Availability & Response Time</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="font-semibold text-primary">Urgent Matters</p>
            <p className="text-foreground/70">Call or WhatsApp for immediate attention</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-primary">General Inquiries</p>
            <p className="text-foreground/70">Email response within 24 hours</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-primary">Project Discussions</p>
            <p className="text-foreground/70">Initial video call within 48 hours of first contact</p>
          </div>
        </div>
      </section>

      {/* Social & Professional */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Follow My Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://youtube.com/@YourChannelName"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border/50 rounded-lg p-6 hover:border-accent bg-gradient-to-br from-accent/5 to-secondary/5 hover:bg-gradient-to-br hover:from-accent/10 hover:to-secondary/10 transition-all text-center space-y-3 hover-lift"
          >
            <p className="font-semibold text-primary">YouTube</p>
            <p className="text-foreground/70 text-sm">Travel vlogs, design breakdowns, and tech tutorials</p>
            <p className="text-accent font-semibold text-sm">Visit Channel →</p>
          </a>

          <a
            href="https://instagram.com/YourHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border/50 rounded-lg p-6 hover:border-secondary bg-gradient-to-br from-secondary/5 to-accent/5 hover:bg-gradient-to-br hover:from-secondary/10 hover:to-accent/10 transition-all text-center space-y-3 hover-lift"
          >
            <p className="font-semibold text-primary">Instagram</p>
            <p className="text-foreground/70 text-sm">Design inspiration, travel photos, and daily moments</p>
            <p className="text-accent font-semibold text-sm">Follow →</p>
          </a>

          <a
            href="https://github.com/YourHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border/50 rounded-lg p-6 hover:border-accent bg-gradient-to-br from-accent/5 to-secondary/5 hover:bg-gradient-to-br hover:from-accent/10 hover:to-secondary/10 transition-all text-center space-y-3 hover-lift"
          >
            <p className="font-semibold text-primary">GitHub</p>
            <p className="text-foreground/70 text-sm">Open source projects and code contributions</p>
            <p className="text-accent font-semibold text-sm">View Profile →</p>
          </a>

          <a
            href="https://linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border/50 rounded-lg p-6 hover:border-secondary bg-gradient-to-br from-secondary/5 to-accent/5 hover:bg-gradient-to-br hover:from-secondary/10 hover:to-accent/10 transition-all text-center space-y-3 hover-lift"
          >
            <p className="font-semibold text-primary">LinkedIn</p>
            <p className="text-foreground/70 text-sm">Professional background and recommendations</p>
            <p className="text-accent font-semibold text-sm">Connect →</p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-primary">What's your typical project timeline?</h3>
            <p className="text-foreground/70">
              It depends on scope and complexity. We'll provide realistic estimates during the discovery phase. Most
              projects range from 4-12 weeks, but we're flexible based on your needs.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-primary">Do you work with startups?</h3>
            <p className="text-foreground/70">
              Absolutely. I enjoy working with startups and have experience with everything from MVP development to
              scaling. We can discuss flexible arrangements based on your stage and budget.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-primary">Can you help maintain existing projects?</h3>
            <p className="text-foreground/70">
              Yes. I offer maintenance, optimization, and feature development for existing applications. Whether it's
              bug fixes, performance improvements, or new features, I can help.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-primary">What about intellectual property?</h3>
            <p className="text-foreground/70">
              We'll discuss IP ownership as part of our agreement. For most custom development work, you retain full
              ownership of the code and product you've paid for.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-primary">Do you provide support after launch?</h3>
            <p className="text-foreground/70">
              Yes. I believe in supporting projects beyond launch. We can arrange ongoing support, maintenance packages,
              or be available as-needed for new features.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-accent/10 rounded-xl text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-primary">Ready to Get Started?</h2>
          <p className="text-foreground/70">The best first step is a conversation. Let's talk about your project.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:nomadnetwork1@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>

          <a
            href="https://wa.me/919619393281"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-muted transition-colors font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

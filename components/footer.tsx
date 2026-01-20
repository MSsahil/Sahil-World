import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-muted/50 to-muted mt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Affiliate Disclosure */}
          <div className="space-y-3 p-6 rounded-lg bg-accent/10 border border-accent/20">
            <h3 className="font-bold text-lg text-accent">Disclosure</h3>
            <p className="text-sm text-foreground/70">
              As an Amazon Associate, I earn from qualifying purchases. This helps support my content creation while
              maintaining honest, authentic reviews.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 p-6 rounded-lg bg-accent-2/10 border border-accent-2/20">
            <h3 className="font-bold text-lg text-accent-2">Contact</h3>
            <p className="text-sm text-foreground/70">
              <a href="tel:+919619393281" className="hover:text-accent-2 transition-colors font-medium">
                +91 961-939-328
              </a>
            </p>
            <p className="text-sm text-foreground/70">
              <a href="mailto:nomadnetwork1@gmail.com" className="hover:text-accent-2 transition-colors font-medium">
                nomadnetwork1@gmail.com
              </a>
            </p>
            <p className="text-sm text-foreground/70">
              <a
                href="https://wa.me/919619393281"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-2 transition-colors font-medium"
              >
                WhatsApp
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 p-6 rounded-lg bg-accent-3/10 border border-accent-3/20">
            <h3 className="font-bold text-lg text-accent-3">Navigation</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-foreground/70 hover:text-accent-3 transition-colors font-medium">
                Home
              </Link>
              <Link href="/travel" className="text-foreground/70 hover:text-accent-3 transition-colors font-medium">
                Travel
              </Link>
              <Link href="/reviews" className="text-foreground/70 hover:text-accent-3 transition-colors font-medium">
                Reviews
              </Link>
              <Link href="/design" className="text-foreground/70 hover:text-accent-3 transition-colors font-medium">
                Interior Design
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/70">© {new Date().getFullYear()} SAHIL. All rights reserved.</p>
          <p className="text-xs text-foreground/60">Crafted with authenticity and purpose.</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => {
    return pathname === href ? "text-accent font-bold" : "text-foreground hover:text-accent transition-colors"
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/travel", label: "Travel" },
    { href: "/videos", label: "Videos" },
    { href: "/reviews", label: "Reviews" },
    { href: "/design", label: "Design" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent hover-lift transition-transform"
        >
          SAHIL
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm lg:text-base ${isActive(link.href)}`}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-gradient-to-b from-card/95 to-card/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-3 rounded-lg transition-colors ${isActive(link.href)} ${
                  pathname === link.href ? "bg-accent/10" : "hover:bg-accent/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

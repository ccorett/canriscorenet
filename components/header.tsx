"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"

import Link from "next/link"
import { CalendlyTrigger } from "@/components/calendly-popup"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to get in touch with CANRIS about a marine project.")

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight text-[#001920]">
          Canris
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#001920]/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" className="border-primary/30 text-[#001920] hover:bg-primary/5 hover:border-primary/50" asChild>
            <Link href="/#vessel-pre-inspection">
              Vessel Pre-Inspection
            </Link>
          </Button>
          <CalendlyTrigger>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-sm">
              Get in Touch
            </Button>
          </CalendlyTrigger>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-lg p-2 transition-colors active:bg-[#e6f3e5]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-[#001920]" />
          ) : (
            <Menu className="h-6 w-6 text-[#001920]" />
          )}
        </button>
      </div>

      {/* Mobile menu backdrop */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-[#001920]/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Navigation */}
      <div
        className={cn(
          "relative z-50 overflow-hidden border-t border-border/60 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-out md:hidden",
          mobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-3 text-sm font-medium text-[#001920]/70 transition-all duration-300 active:scale-[0.98] active:bg-[#e6f3e5] hover:bg-secondary hover:text-primary",
                mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
              )}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
            <Button variant="outline" size="sm" className="h-11 justify-start mobile-touch-card" asChild>
              <Link
                href="/#vessel-pre-inspection"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vessel Pre-Inspection
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="h-11 justify-start mobile-touch-card" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
            <CalendlyTrigger>
              <Button size="sm" className="h-11 w-full bg-primary hover:bg-primary/90 mobile-touch-card">
                Get in Touch
              </Button>
            </CalendlyTrigger>
          </div>
        </nav>
      </div>
    </header>
  )
}

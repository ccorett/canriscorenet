import { Phone, MessageCircle, Mail } from "lucide-react"

import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  const whatsappNumber = "8687349490"
  
  return (
    <footer className="bg-[#001920] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="text-xl font-semibold text-white">Canris</span>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              We engineer, integrate, and coordinate digital systems that run operations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+18687349490"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (868) 734-9490
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href="mailto:theccore.tt@gmail.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@canriscore.net
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Canris. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CalendlyTrigger } from "@/components/calendly-popup"
import { MobileReveal } from "@/components/mobile-reveal"

export function CTASection() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to get in touch with CANRIS about a marine project.")

  return (
    <section className="relative overflow-hidden bg-[#e6f3e5] px-4 py-16 md:py-24">
      <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl md:hidden" />
      <div className="relative mx-auto max-w-3xl text-center">
        <MobileReveal>
          <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
            Discuss Your Marine Project
          </h2>
          <p className="mt-4 text-lg text-[#001920]/70">
            Tell us about your requirement and we will assess how CANRIS can structure and coordinate delivery.
          </p>
        </MobileReveal>
        
        <MobileReveal delay={120}>
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <CalendlyTrigger>
              <Button size="lg" className="h-12 w-full px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-md mobile-touch-card sm:w-auto">
                Get in Touch
              </Button>
            </CalendlyTrigger>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 w-full px-8 text-base bg-white border-primary/30 text-[#001920] hover:bg-primary/5 hover:border-primary/50 mobile-touch-card sm:w-auto"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </MobileReveal>
      </div>
    </section>
  )
}

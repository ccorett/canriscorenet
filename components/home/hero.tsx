"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CalendlyTrigger } from "@/components/calendly-popup"
import { MobileReveal } from "@/components/mobile-reveal"

export function HomeHero() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to get in touch with CANRIS about a marine project.")

  return (
    <section id="hero" className="relative overflow-hidden bg-white px-4 py-20 md:py-28 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6f3e5_1px,transparent_1px),linear-gradient(to_bottom,#e6f3e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      <div className="mobile-hero-glow absolute -right-16 top-8 h-56 w-56 rounded-full bg-primary/15 blur-3xl md:hidden" />
      <div className="mobile-hero-glow absolute -left-10 bottom-6 h-40 w-40 rounded-full bg-[#e6f3e5] blur-2xl md:hidden [animation-delay:2s]" />
      
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <MobileReveal>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#001920] md:text-5xl lg:text-6xl">
              Marine Projects.{" "}
              <span className="text-primary">Structured for Delivery</span>.
            </h1>
          </MobileReveal>
          <MobileReveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#001920]/70 leading-relaxed">
              CANRIS is a Marine Project Management Company that structures, coordinates and delivers marine projects from requirement through completion.
            </p>
          </MobileReveal>
          <MobileReveal delay={180}>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#001920]/60">
              We combine project management, specialist expertise and digital technology to support effective project delivery and marine operations.
            </p>
          </MobileReveal>
          
          <MobileReveal delay={260}>
            <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <CalendlyTrigger>
                <Button size="lg" className="h-12 w-full px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-md mobile-touch-card sm:w-auto">
                  Get in Touch
                </Button>
              </CalendlyTrigger>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 w-full px-8 text-base border-primary/30 bg-white text-[#001920] hover:bg-primary/5 hover:border-primary/50 hover:text-[#001920] mobile-touch-card sm:w-auto"
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
      </div>
    </section>
  )
}

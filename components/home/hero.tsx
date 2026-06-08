"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CalendlyTrigger } from "@/components/calendly-popup"

export function HomeHero() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in learning more about Canris services.")

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:py-28 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6f3e5_1px,transparent_1px),linear-gradient(to_bottom,#e6f3e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#001920] md:text-5xl lg:text-6xl">
            Canris engineers and coordinates the{" "}
            <span className="text-primary">digital systems</span> your operations depend on
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#001920]/70 leading-relaxed">
            We design, build, and integrate reliable systems behind your operations so everything works together and performs consistently.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#001920]/60">
            We work with organizations that require reliable systems, structured execution, and coordinated operations.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalendlyTrigger>
              <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-md">
                Schedule a Systems Consultation
              </Button>
            </CalendlyTrigger>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 text-base border-primary/30 bg-white text-[#001920] hover:bg-primary/5 hover:border-primary/50 hover:text-[#001920]"
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
        </div>
      </div>
    </section>
  )
}

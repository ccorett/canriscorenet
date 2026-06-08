"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CalendlyTrigger } from "@/components/calendly-popup"

export function FinalCTA() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in discussing systems engineering with Canris.")
  
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,220,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,220,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Structured Systems Lead to{" "}
          <span className="text-primary">Stable Operations</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start by defining the right system architecture for your organization.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CalendlyTrigger>
            <Button size="lg" className="h-12 px-8 text-base shadow-[0_0_25px_rgba(0,220,220,0.4)] transition-shadow hover:shadow-[0_0_40px_rgba(0,220,220,0.6)]">
              Schedule a Systems Consultation
            </Button>
          </CalendlyTrigger>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-primary/30 px-8 text-base text-foreground hover:bg-primary/10 hover:text-foreground"
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
    </section>
  )
}

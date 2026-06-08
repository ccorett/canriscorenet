"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CalendlyTrigger } from "@/components/calendly-popup"

export function Hero() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in getting my business set up with Canris Core.")
  
  return (
    <section id="hero" className="relative overflow-hidden px-4 py-24 md:py-32 lg:py-40">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,220,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,220,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glow effects */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          Website Setup + Automation + Management
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Get Your Business Online,{" "}
          <span className="text-primary">The Right Way</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We set up, automate, and manage your website with booking, CRM, and chatbot systems built in.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CalendlyTrigger>
            <Button size="lg" className="h-12 px-8 text-base shadow-[0_0_20px_rgba(0,220,220,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(0,220,220,0.5)]">
              Make an Appointment
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

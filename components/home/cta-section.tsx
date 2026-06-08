"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CalendlyTrigger } from "@/components/calendly-popup"

export function CTASection() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to discuss my systems requirements with Canris.")

  return (
    <section className="bg-[#e6f3e5] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
          Structured Systems Lead to Stable Operations
        </h2>
        <p className="mt-4 text-lg text-[#001920]/70">
          Start by defining the right system architecture for your organization.
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
            className="h-12 px-8 text-base bg-white border-primary/30 text-[#001920] hover:bg-primary/5 hover:border-primary/50"
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

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendlyProvider, CalendlyTrigger } from "@/components/calendly-popup"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Search, Map, Hammer, RefreshCw, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How We Work | Canris",
  description: "Learn about our structured approach to system assessment, architecture design, engineering, and deployment.",
}

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Assess",
    description: "We assess your current systems, infrastructure, and operational requirements to identify gaps and define what needs to be built.",
    details: [
      "Current system evaluation",
      "Infrastructure assessment",
      "Gap identification and analysis",
      "Requirements definition"
    ]
  },
  {
    number: "02",
    icon: Map,
    title: "Architect",
    description: "We design the solution architecture with clear technical specifications, integration points, and deployment strategy.",
    details: [
      "System architecture design",
      "Integration mapping",
      "Technical specification",
      "Deployment planning"
    ]
  },
  {
    number: "03",
    icon: Hammer,
    title: "Engineer and Integrate",
    description: "We engineer the systems and integrate components. Structured execution with continuous oversight and quality assurance.",
    details: [
      "System engineering",
      "Platform integration",
      "Progress tracking and reporting",
      "Quality assurance throughout"
    ]
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Deploy and Monitor",
    description: "We deploy systems and enable usage. Ongoing monitoring ensures performance is maintained and refined over time.",
    details: [
      "System deployment",
      "User enablement",
      "Performance monitoring",
      "Continuous refinement"
    ]
  }
]

const morePillars = [
  {
    letter: "M",
    title: "Manage Perception",
    description: "Align stakeholders and expectations from the start. Clear understanding prevents misalignment and wasted effort."
  },
  {
    letter: "O",
    title: "Own Success",
    description: "Take accountability for delivery and outcomes. Technical execution with measurable results."
  },
  {
    letter: "R",
    title: "Relentlessly Reassess",
    description: "Continuously review progress, risks, and performance. Adapt as requirements evolve."
  },
  {
    letter: "E",
    title: "Expand Perspective",
    description: "Adapt solutions based on broader operational impact. Systems should serve your organization today and into the future."
  }
]

export default function HowWeWorkPage() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to discuss how Canris can help with my project.")

  return (
    <CalendlyProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-[#e6f3e5] px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold text-[#001920] md:text-5xl">
                How We Work
              </h1>
              <p className="mt-6 text-xl text-[#001920]/70 leading-relaxed">
                We assess systems, architect solutions, engineer integrations, and deploy with structured oversight. A systematic approach that ensures reliability and operational performance.
              </p>
            </div>
          </section>

          {/* Process Steps */}
          <section className="bg-white px-4 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold text-[#001920] text-center mb-12">
                Our Process
              </h2>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.number}
                    className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-start ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#001920]">{step.title}</h3>
                      <p className="mt-3 text-lg text-[#001920]/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className={`rounded-xl bg-[#f4f9f4] p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span className="text-[#001920]/70">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* M.O.R.E Framework */}
          <section className="bg-[#001920] px-4 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-2">Our Guiding Framework</p>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  The M.O.R.E. Approach
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                  Our project management approach ensures systems are delivered in a structured and controlled manner.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {morePillars.map((pillar) => (
                  <div 
                    key={pillar.letter}
                    className="rounded-xl bg-white/5 border border-white/10 p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                        {pillar.letter}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <p className="text-white/60">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white px-4 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-lg text-[#001920]/70">
                Define the right system architecture for your organization.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CalendlyTrigger>
                  <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white">
                    Schedule a Systems Consultation
                  </Button>
                </CalendlyTrigger>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 px-8 bg-white border-primary/30 text-[#001920] hover:bg-primary/5 hover:border-primary/50"
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
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </CalendlyProvider>
  )
}

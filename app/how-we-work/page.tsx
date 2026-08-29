import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendlyProvider, CalendlyTrigger } from "@/components/calendly-popup"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Search, Map, Hammer, RefreshCw, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How We Work | Canris",
  description: "Learn about CANRIS's structured approach to marine project delivery from requirement through completion.",
}

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Define",
    description: "Understand the requirement, vessel, objectives and project constraints.",
    details: [
      "Requirement and objective definition",
      "Vessel and operational context review",
      "Project constraint identification",
      "Delivery scope alignment"
    ]
  },
  {
    number: "02",
    icon: Map,
    title: "Plan",
    description: "Define the scope, delivery approach, responsibilities, schedule and resources.",
    details: [
      "Scope and delivery approach definition",
      "Responsibility and role assignment",
      "Schedule and resource planning",
      "Stakeholder alignment"
    ]
  },
  {
    number: "03",
    icon: Hammer,
    title: "Coordinate",
    description: "Bring together the specialists, suppliers and technology required for delivery.",
    details: [
      "Specialist and supplier coordination",
      "Technology and equipment alignment",
      "Project team assembly",
      "Delivery structure establishment"
    ]
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Deliver",
    description: "Manage implementation, project performance, documentation and closeout.",
    details: [
      "Implementation management",
      "Project performance oversight",
      "Documentation and reporting",
      "Project closeout"
    ]
  }
]

const morePillars = [
  {
    letter: "M",
    title: "Manage Perception",
    description: "Align expectations and responsibilities from the start."
  },
  {
    letter: "O",
    title: "Own Success",
    description: "Maintain accountability for project delivery and outcomes."
  },
  {
    letter: "R",
    title: "Relentlessly Reassess",
    description: "Continuously review progress, risks and requirements."
  },
  {
    letter: "E",
    title: "Expand Perspective",
    description: "Consider the wider operational impact of project decisions."
  }
]

export default function HowWeWorkPage() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to get in touch with CANRIS about a marine project.")

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
                A structured approach to marine project delivery from requirement through completion.
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
                <p className="text-primary font-medium mb-2">Our Project Management Framework</p>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  The M.O.R.E. Framework
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                  The M.O.R.E. Framework guides how CANRIS manages projects and maintains accountability throughout delivery.
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
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-[#001920]/70">
                Tell us about your marine project or requirement.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CalendlyTrigger>
                  <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white">
                    Get in Touch
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

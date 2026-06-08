import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendlyProvider, CalendlyTrigger } from "@/components/calendly-popup"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Settings, Link2, ClipboardList, Lightbulb, Check, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Canris",
  description: "Custom systems engineering, systems integration and automation, IT project management, and IT consultancy services for organizations.",
}

const services = [
  {
    id: "systems-engineering",
    icon: Settings,
    title: "Custom Systems Engineering",
    description: "Design and build structured digital systems that support core operations including client workflows, transactions, internal processes, and service delivery.",
    examples: [
      "Client workflow management systems",
      "Transaction and payment processing systems",
      "Internal operations platforms",
      "Service delivery infrastructure"
    ],
    bgColor: "bg-white"
  },
  {
    id: "integration",
    icon: Link2,
    title: "Systems Integration and Automation",
    description: "Connect platforms, APIs, and tools into a unified system. Automate processes to reduce manual work and improve operational consistency.",
    examples: [
      "API integrations and data synchronization",
      "Workflow automation between systems",
      "Unified data pipelines",
      "Process automation and orchestration"
    ],
    bgColor: "bg-[#f4f9f4]"
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "IT Project Management (M.O.R.E Framework)",
    description: "Coordinate and deliver technical projects using a structured approach that ensures alignment, accountability, and operational impact.",
    examples: [
      "Technical project coordination",
      "Stakeholder alignment and communication",
      "Delivery oversight and risk management",
      "Progress tracking and performance review"
    ],
    framework: {
      title: "M.O.R.E. Framework",
      pillars: [
        { letter: "M", name: "Manage Perception", desc: "Align stakeholders and expectations from the start" },
        { letter: "O", name: "Own Success", desc: "Take accountability for delivery and outcomes" },
        { letter: "R", name: "Relentlessly Reassess", desc: "Continuously review progress, risks, and performance" },
        { letter: "E", name: "Expand Perspective", desc: "Adapt solutions based on broader operational impact" }
      ]
    },
    bgColor: "bg-white"
  },
  {
    id: "consultancy",
    icon: Lightbulb,
    title: "IT Consultancy",
    description: "Provide technical guidance on system architecture, infrastructure decisions, and digital strategy aligned with operational requirements.",
    examples: [
      "System architecture review and design",
      "Infrastructure assessment and planning",
      "Technology selection and evaluation",
      "Digital strategy aligned with operations"
    ],
    bgColor: "bg-[#f4f9f4]"
  }
]

export default function ServicesPage() {
  const whatsappNumber = "8687349490"
  const whatsappMessage = encodeURIComponent("Hi, I'd like to learn more about Canris services.")

  return (
    <CalendlyProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-[#e6f3e5] px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold text-[#001920] md:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-xl text-[#001920]/70 leading-relaxed">
                We engineer, integrate, and coordinate digital systems that run operations. Technical execution with structured delivery.
              </p>
            </div>
          </section>

          {/* Services */}
          {services.map((service) => (
            <section 
              key={service.id} 
              id={service.id}
              className={`${service.bgColor} px-4 py-16 md:py-20`}
            >
              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-[#001920]">{service.title}</h2>
                    <p className="mt-4 text-lg text-[#001920]/70 leading-relaxed">
                      {service.description}
                    </p>
                    <CalendlyTrigger>
                      <Button className="mt-6 bg-primary hover:bg-primary/90 text-white">
                        Schedule a Systems Consultation
                      </Button>
                    </CalendlyTrigger>
                  </div>
                  
                  <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                    <h3 className="font-semibold text-[#001920] mb-4">What this includes:</h3>
                    <ul className="space-y-3">
                      {service.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-[#001920]/70">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* M.O.R.E Framework for Project Management */}
                {service.framework && (
                  <div className="mt-12 rounded-xl bg-[#001920] p-8">
                    <h3 className="text-xl font-semibold text-white text-center mb-6">
                      {service.framework.title}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {service.framework.pillars.map((pillar) => (
                        <div key={pillar.letter} className="text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                            {pillar.letter}
                          </div>
                          <h4 className="mt-3 font-semibold text-white">{pillar.name}</h4>
                          <p className="mt-1 text-sm text-white/60">{pillar.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="bg-[#001920] px-4 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Define the right system architecture for your organization.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CalendlyTrigger>
                  <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white">
                    Schedule a Systems Consultation
                  </Button>
                </CalendlyTrigger>
                <Button 
                  size="lg" 
                  className="h-12 px-8 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:text-white"
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

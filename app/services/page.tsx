import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendlyProvider, CalendlyTrigger } from "@/components/calendly-popup"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Settings, Link2, ClipboardList, Lightbulb, Check, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Canris",
  description: "CANRIS helps organisations digitise business operations through operational analysis, systems engineering, integration, automation and structured project delivery.",
}

const services = [
  {
    id: "systems-engineering",
    icon: Settings,
    title: "Operational Analysis & Process Design",
    description: "Assess current operations, identify inefficiencies and design structured digital workflows that improve operational performance. We engineer the digital systems that support operational processes, service delivery and organisational growth.",
    examples: [
      "Operational workflow assessment and mapping",
      "Process inefficiency identification and improvement",
      "Digital workflow design and optimisation",
      "Operational systems engineering and configuration"
    ],
    bgColor: "bg-white"
  },
  {
    id: "integration",
    icon: Link2,
    title: "Systems Integration & Automation",
    description: "Connect business systems, automate repetitive processes and create seamless operational workflows that improve efficiency, visibility and operational control.",
    examples: [
      "Business system integration and data synchronisation",
      "Workflow automation across departments",
      "Connected operational data pipelines",
      "Process automation to reduce manual work"
    ],
    bgColor: "bg-[#f4f9f4]"
  },
  {
    id: "project-management",
    icon: ClipboardList,
    title: "IT Project Management",
    description: "Coordinate digital transformation initiatives using the M.O.R.E Framework to ensure structured implementation, accountability and measurable business outcomes.",
    examples: [
      "Digital transformation project coordination",
      "Stakeholder alignment and change management",
      "Delivery oversight and risk management",
      "Progress tracking and performance measurement"
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
    description: "Provide strategic technology guidance that supports business digitalisation, operational improvement and long-term scalability across your organisation.",
    examples: [
      "Digital transformation strategy and planning",
      "Operational technology assessment",
      "Technology selection aligned with business goals",
      "Scalability and growth planning for digital operations"
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
                CANRIS helps organisations digitise business operations. We assess how you work, design connected digital workflows, and deliver integrated solutions that improve visibility, accountability and operational control.
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
                Discover how CANRIS can help digitise your business operations and create connected, efficient workflows across your organisation.
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

import { Settings, Link2, ClipboardList, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Settings,
    title: "Operational Analysis & Process Design",
    description: "Assess current operations, identify inefficiencies and design structured digital workflows that improve operational performance. We engineer the digital systems that support operational processes, service delivery and organisational growth.",
    href: "/services#systems-engineering"
  },
  {
    icon: Link2,
    title: "Systems Integration & Automation",
    description: "Connect business systems, automate repetitive processes and create seamless operational workflows",
    href: "/services#integration"
  },
  {
    icon: ClipboardList,
    title: "IT Project Management",
    description: "Coordinate digital transformation initiatives using the M.O.R.E Framework to ensure structured implementation and measurable outcomes",
    href: "/services#project-management"
  },
  {
    icon: Lightbulb,
    title: "IT Consultancy",
    description: "Provide strategic technology guidance that supports business digitalisation, operational improvement and long-term scalability",
    href: "/services#consultancy"
  }
]

export function ServicesOverview() {
  return (
    <section className="bg-[#f4f9f4] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
            How We Digitise Business Operations
          </h2>
          <p className="mt-4 text-lg text-[#001920]/70 max-w-2xl mx-auto">
            We help organisations replace manual processes and disconnected systems with connected digital operations that improve visibility, accountability and control.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#001920]">{service.title}</h3>
              <p className="mt-2 text-[#001920]/60 flex-1">{service.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

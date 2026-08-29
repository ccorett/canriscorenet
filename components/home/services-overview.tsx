import { Settings, Link2, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Settings,
    title: "Marine Project Management",
    description: "CANRIS structures, coordinates and manages marine projects from requirement definition through implementation and closeout. Projects may include vessel upgrades, refits, equipment installations, technology deployments and fleet initiatives.",
    href: "/services#systems-engineering"
  },
  {
    icon: Link2,
    title: "Digital Platform",
    description: "CANRIS develops purpose-built digital platforms to support marine operations and compliance. Our first platform is being developed for the management of small commercial vessel inspections, deficiencies and compliance records.",
    href: "/services#integration"
  }
]

export function ServicesOverview() {
  return (
    <section className="bg-[#f4f9f4] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
            What We Do
          </h2>
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

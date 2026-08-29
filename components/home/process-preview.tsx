import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Define",
    description: "Understand the requirement, vessel, objectives and project constraints."
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the scope, delivery approach, responsibilities, schedule and resources."
  },
  {
    number: "03",
    title: "Coordinate",
    description: "Bring together the specialists, suppliers and technology required for delivery."
  },
  {
    number: "04",
    title: "Deliver",
    description: "Manage implementation, project performance, documentation and closeout."
  }
]

export function ProcessPreview() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-[#001920]/70 max-w-2xl mx-auto">
            A structured approach to marine project delivery from requirement through completion.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-primary/20">{step.number}</div>
              <h3 className="mt-2 text-xl font-semibold text-[#001920]">{step.title}</h3>
              <p className="mt-2 text-[#001920]/60">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/how-we-work"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Learn more about our process
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Understand Operations",
    description: "Review workflows, existing systems and operational challenges"
  },
  {
    number: "02",
    title: "Design the Solution",
    description: "Define the future operational model and supporting system architecture"
  },
  {
    number: "03",
    title: "Engineer & Integrate",
    description: "Build, configure and connect the required systems"
  },
  {
    number: "04",
    title: "Deploy & Enable",
    description: "Implement the solution and prepare teams for successful adoption"
  },
  {
    number: "05",
    title: "Monitor & Improve",
    description: "Measure performance, optimise workflows and continuously improve operations"
  }
]

export function ProcessPreview() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
            Our Digitalisation Process
          </h2>
          <p className="mt-4 text-lg text-[#001920]/70 max-w-2xl mx-auto">
            A structured approach from understanding operations through to continuous improvement.
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

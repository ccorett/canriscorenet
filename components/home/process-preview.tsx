import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Assess Current Systems",
    description: "Review existing infrastructure and identify gaps"
  },
  {
    number: "02",
    title: "Architect the Solution",
    description: "Design system structure and integration points"
  },
  {
    number: "03",
    title: "Engineer and Integrate",
    description: "Build and connect system components"
  },
  {
    number: "04",
    title: "Deploy and Enable Usage",
    description: "Launch systems and enable operations"
  },
  {
    number: "05",
    title: "Monitor and Refine Performance",
    description: "Track performance and optimise continuously"
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
            A structured approach from assessment through to operational deployment.
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

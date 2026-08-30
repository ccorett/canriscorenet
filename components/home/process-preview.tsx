import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { MobileReveal } from "@/components/mobile-reveal"

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
        <MobileReveal>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-[#001920]/70 max-w-2xl mx-auto">
              A structured approach to marine project delivery from requirement through completion.
            </p>
            <p className="mt-2 text-sm font-medium text-primary md:hidden">Swipe through our process</p>
          </div>
        </MobileReveal>
        
        <div className="mobile-scroll-x flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {steps.map((step, index) => (
            <MobileReveal key={index} delay={index * 80} className="min-w-[78vw] shrink-0 snap-center sm:min-w-[62vw] md:min-w-0 md:shrink">
              <div className="relative rounded-xl border border-border bg-[#f4f9f4] p-5 mobile-touch-card md:border-0 md:bg-transparent md:p-0">
                <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                <h3 className="mt-2 text-xl font-semibold text-[#001920]">{step.title}</h3>
                <p className="mt-2 text-[#001920]/60">{step.description}</p>
              </div>
            </MobileReveal>
          ))}
        </div>
        
        <MobileReveal delay={200}>
          <div className="mt-12 text-center">
            <Link 
              href="/how-we-work"
              className="inline-flex items-center rounded-lg px-4 py-2 text-primary font-medium transition-colors active:bg-primary/10 hover:underline"
            >
              Learn more about our process
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </MobileReveal>
      </div>
    </section>
  )
}

import { Wrench, Brain, Users, Building } from "lucide-react"
import { MobileReveal } from "@/components/mobile-reveal"

const differentiators = [
  {
    icon: Wrench,
    title: "Structured Delivery",
    description: "Projects are managed through defined stages and responsibilities."
  },
  {
    icon: Brain,
    title: "Right Expertise",
    description: "Specialist capability is assembled around the requirements of the project."
  },
  {
    icon: Users,
    title: "Coordinated Execution",
    description: "Clients, suppliers and project teams operate within one delivery structure."
  },
  {
    icon: Building,
    title: "Operational Focus",
    description: "Projects are managed with the vessel's operational requirements in mind."
  }
]

export function WhyCanris() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MobileReveal>
            <div>
              <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
                Why CANRIS?
              </h2>
              <p className="mt-4 text-lg text-[#001920]/70 leading-relaxed">
                CANRIS provides a single point of project coordination, bringing together the client, specialists, suppliers and technology required to deliver marine projects effectively.
              </p>
            </div>
          </MobileReveal>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => (
              <MobileReveal key={index} delay={index * 80}>
                <div className="mobile-touch-card rounded-xl bg-[#e6f3e5] p-5 transition-shadow hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-3 font-semibold text-[#001920]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#001920]/60">{item.description}</p>
                </div>
              </MobileReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

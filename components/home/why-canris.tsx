import { Wrench, Brain, Users, Building } from "lucide-react"

const differentiators = [
  {
    icon: Wrench,
    title: "Operations First",
    description: "We understand how your organisation works before designing the digital systems that support it"
  },
  {
    icon: Brain,
    title: "Integrated by Design",
    description: "We connect people, processes and information into unified operational workflows"
  },
  {
    icon: Users,
    title: "Structured Delivery",
    description: "Digital transformation initiatives delivered with accountability, oversight and measurable outcomes"
  },
  {
    icon: Building,
    title: "Built for Growth",
    description: "Solutions designed to scale with your organisation as operations evolve and expand"
  }
]

export function WhyCanris() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
              Why Work With Canris?
            </h2>
            <p className="mt-4 text-lg text-[#001920]/70 leading-relaxed">
              Successful digitalisation requires more than software. It requires understanding operations first, then engineering the systems that support them.
            </p>
            <p className="mt-4 text-[#001920]/60">
              CANRIS combines operational insight with structured delivery to help organisations achieve connected digital operations with greater visibility, accountability and control.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="rounded-xl bg-[#e6f3e5] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold text-[#001920]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#001920]/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

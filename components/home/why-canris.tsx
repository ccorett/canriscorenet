import { Wrench, Brain, Users, Building } from "lucide-react"

const differentiators = [
  {
    icon: Wrench,
    title: "Built as Systems, Not Isolated Tools",
    description: "We build systems with technical rigour and structured methodology"
  },
  {
    icon: Brain,
    title: "Designed for How Your Organization Actually Operates",
    description: "Solutions designed to work as part of your broader infrastructure"
  },
  {
    icon: Users,
    title: "Delivered with Accountability and Structure",
    description: "Projects delivered through structured coordination and oversight"
  },
  {
    icon: Building,
    title: "Integrated Across Your Entire Operation",
    description: "Connect platforms, data, and processes into unified operations"
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
              We engineer digital systems that run your operations. Not just interfaces, but the underlying infrastructure that connects your organization.
            </p>
            <p className="mt-4 text-[#001920]/60">
              Canris combines technical engineering with structured project delivery to ensure systems are reliable, integrated, and operationally sound.
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

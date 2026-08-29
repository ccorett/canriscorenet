import { AlertCircle, RefreshCw, Layers, Clock, Settings } from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Multiple Stakeholders",
    description: "Clients, contractors, suppliers and specialists must work toward the same outcome."
  },
  {
    icon: RefreshCw,
    title: "Unclear Responsibilities",
    description: "Poorly defined roles can create gaps in project delivery."
  },
  {
    icon: AlertCircle,
    title: "Technical Requirements",
    description: "Equipment, vessel requirements and operational needs must align."
  },
  {
    icon: Clock,
    title: "Project Delays",
    description: "Coordination issues can affect schedules, costs and vessel availability."
  },
  {
    icon: Settings,
    title: "Fragmented Information",
    description: "Project decisions, documentation and progress need to remain visible and controlled."
  }
]

export function ProblemsSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
            Marine Projects Can Get Complicated.
          </h2>
          <p className="mt-4 text-lg text-[#001920]/70 max-w-2xl mx-auto">
            Multiple stakeholders, technical requirements, suppliers and operational constraints can make marine projects difficult to coordinate.
          </p>
        </div>
        
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e6f3e5]">
                <problem.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-[#001920]">{problem.title}</h3>
                <p className="mt-1 text-sm text-[#001920]/60">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

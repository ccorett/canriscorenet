import { AlertCircle, RefreshCw, Layers, Clock, Settings } from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Disconnected Systems",
    description: "Platforms and tools that operate in isolation"
  },
  {
    icon: RefreshCw,
    title: "Manual Processes",
    description: "Repetitive tasks that should be automated"
  },
  {
    icon: AlertCircle,
    title: "Undefined Processes",
    description: "Workflows without clear structure or documentation"
  },
  {
    icon: Clock,
    title: "Projects That Drift",
    description: "Initiatives that lose direction without structured delivery"
  },
  {
    icon: Settings,
    title: "Too Many Tools, No Structure",
    description: "Multiple systems with no unified data flow"
  }
]

export function ProblemsSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001920] md:text-4xl">
            Sound Familiar?
          </h2>
          <p className="mt-4 text-lg text-[#001920]/70 max-w-2xl mx-auto">
            Many businesses face these challenges when it comes to their digital infrastructure.
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

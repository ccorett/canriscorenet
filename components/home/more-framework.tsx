const pillars = [
  {
    letter: "M",
    title: "Manage Perception",
    description: "Align stakeholders and expectations from the start"
  },
  {
    letter: "O",
    title: "Own Success",
    description: "Take accountability for delivery and outcomes"
  },
  {
    letter: "R",
    title: "Relentlessly Reassess",
    description: "Continuously review progress, risks, and performance"
  },
  {
    letter: "E",
    title: "Expand Perspective",
    description: "Adapt solutions based on broader operational impact"
  }
]

export function MoreFramework() {
  return (
    <section className="bg-[#001920] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">IT Project Management</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            The M.O.R.E. Framework
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Our project management approach ensures systems are delivered in a structured, controlled, and accountable manner
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="rounded-xl bg-white/5 border border-white/10 p-6 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                {pillar.letter}
              </div>
              <h3 className="mt-4 font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-white/60">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

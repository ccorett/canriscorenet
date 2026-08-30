import { MobileReveal } from "@/components/mobile-reveal"

const pillars = [
  {
    letter: "M",
    title: "Manage Perception",
    description: "Align expectations and responsibilities from the start."
  },
  {
    letter: "O",
    title: "Own Success",
    description: "Maintain accountability for project delivery and outcomes."
  },
  {
    letter: "R",
    title: "Relentlessly Reassess",
    description: "Continuously review progress, risks and requirements."
  },
  {
    letter: "E",
    title: "Expand Perspective",
    description: "Consider the wider operational impact of project decisions."
  }
]

export function MoreFramework() {
  return (
    <section className="bg-[#001920] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <MobileReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Our Project Management Framework</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              The M.O.R.E. Framework
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              The M.O.R.E. Framework guides how CANRIS manages projects and maintains accountability throughout delivery.
            </p>
          </div>
        </MobileReveal>
        
        <div className="mobile-scroll-x flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <MobileReveal key={index} delay={index * 80} className="min-w-[72vw] shrink-0 snap-center sm:min-w-[56vw] md:min-w-0 md:shrink">
              <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center mobile-touch-card">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {pillar.letter}
                </div>
                <h3 className="mt-4 font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/60">{pillar.description}</p>
              </div>
            </MobileReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

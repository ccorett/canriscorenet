import { Wrench, Compass, Sparkles } from "lucide-react"

const points = [
  {
    icon: Wrench,
    title: "We handle the setup",
    description: "From hosting to email configuration, we take care of the technical work.",
  },
  {
    icon: Compass,
    title: "We guide you through what's needed",
    description: "Clear communication at every step. No jargon, no confusion.",
  },
  {
    icon: Sparkles,
    title: "You don't need technical knowledge",
    description: "If you can send a WhatsApp, you can work with us.",
  },
]

export function ObjectionHandling() {
  return (
    <section className="relative border-y border-border/50 bg-card/30 px-4 py-20 md:py-24">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[200px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />
      
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            No Confusion. <span className="text-primary">No Stress.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We make the process simple so you can focus on your business
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {points.map((item) => (
            <div key={item.title} className="group text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,220,220,0.2)]">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

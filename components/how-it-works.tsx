import { MessageSquare, Palette, Settings, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Tell us about your business",
    description: "Share your vision, goals, and what makes your business unique.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "We design your website",
    description: "Our team creates a clean, professional website tailored to you.",
    icon: Palette,
  },
  {
    step: "03",
    title: "We set up your email and systems",
    description: "Business emails, forms, and integrations, all handled for you.",
    icon: Settings,
  },
  {
    step: "04",
    title: "You go live",
    description: "Launch your professional online presence and start growing.",
    icon: Rocket,
  },
]

export function HowItWorks() {
  return (
    <section className="relative border-y border-border/50 bg-card/30 px-4 py-20 md:py-24" id="how-it-works">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,220,220,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,220,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Simple <span className="text-primary">Process</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From conversation to launch in four easy steps
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="group relative text-center">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-primary/50 to-primary/10 lg:block" />
              )}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,220,220,0.2)]">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="mt-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                Step {item.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
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

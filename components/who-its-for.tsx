import { Briefcase, Globe, RefreshCw, Award } from "lucide-react"

const audiences = [
  {
    icon: Briefcase,
    title: "New businesses getting started",
    description: "You're launching something new and need a professional first impression.",
  },
  {
    icon: Globe,
    title: "Businesses with no website",
    description: "You've been meaning to get online but haven't found the right partner.",
  },
  {
    icon: RefreshCw,
    title: "Outdated or poorly built websites",
    description: "Your current site doesn't reflect the quality of your business.",
  },
  {
    icon: Award,
    title: "Companies that want a clean, credible presence",
    description: "You understand that first impressions matter in business.",
  },
]

export function WhoItsFor() {
  return (
    <section className="relative px-4 py-20 md:py-24" id="who-its-for">
      {/* Subtle glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]" />
      
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built for Businesses That Want to Look <span className="text-primary">Professional</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If any of these sound like you, we can help
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group flex gap-4 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,220,220,0.1)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-all group-hover:border-primary/40">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

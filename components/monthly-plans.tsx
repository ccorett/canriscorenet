"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { CalendlyTrigger } from "@/components/calendly-popup"

const plans = [
  {
    name: "Starter Maintenance",
    price: "$30",
    period: "/ month",
    description: "Keep your site online and secure",
    badge: null,
    features: [
      "Hosting management",
      "Minimal support",
      "Static redeploy",
    ],
    highlighted: false,
  },
  {
    name: "Growth Maintenance",
    price: "$79",
    period: "/ month",
    description: "Ongoing support and monitoring",
    badge: "Most Popular",
    features: [
      "Hosting management",
      "Monitoring",
      "Moderate updates",
      "~30 mins support/month",
    ],
    highlighted: true,
  },
  {
    name: "Accelerator Maintenance",
    price: "$149",
    period: "/ month",
    description: "Full management with priority support",
    badge: "Priority Support",
    features: [
      "Hosting management",
      "Monitoring",
      "Priority updates",
      "~1 hr support/month",
      "Chatbot + CRM management",
    ],
    highlighted: false,
  },
]

export function MonthlyPlans() {
  return (
    <section className="relative px-4 py-20 md:py-24" id="monthly-plans">
      {/* Subtle glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ongoing <span className="text-primary">Maintenance</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep your website running smoothly with ongoing management and support.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col border-border/50 bg-card/30 backdrop-blur transition-all duration-300 hover:border-primary/30",
                plan.highlighted && "border-primary/50 shadow-[0_0_30px_rgba(0,220,220,0.15)]"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={cn(
                    "rounded-full px-4 py-1 text-sm font-medium shadow-[0_0_20px_rgba(0,220,220,0.4)]",
                    plan.highlighted 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground border border-primary/30"
                  )}>
                    {plan.badge}
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className={cn("text-4xl font-bold", plan.highlighted && "text-primary")}>{plan.price}</span>
                  <span className="text-muted-foreground"> USD {plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={cn("mt-0.5 h-5 w-5 shrink-0", plan.highlighted ? "text-primary" : "text-muted-foreground")} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CalendlyTrigger>
                  <Button
                    className={cn(
                      "mt-8 w-full transition-all",
                      plan.highlighted 
                        ? "shadow-[0_0_20px_rgba(0,220,220,0.3)] hover:shadow-[0_0_30px_rgba(0,220,220,0.5)]" 
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                    variant={plan.highlighted ? "default" : "secondary"}
                  >
                    Make an Appointment
                  </Button>
                </CalendlyTrigger>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

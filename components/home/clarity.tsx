import { MobileReveal } from "@/components/mobile-reveal"

export function ClaritySection() {
  return (
    <section className="relative overflow-hidden bg-[#e6f3e5] px-4 py-16 md:py-20">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent md:hidden" />
      <div className="relative mx-auto max-w-4xl text-center">
        <MobileReveal>
          <p className="text-xl md:text-2xl font-medium text-[#001920] leading-relaxed">
            Marine projects bring together people, technology, suppliers and operational requirements. CANRIS provides the structure and coordination required to move them from requirement to delivery.
          </p>
        </MobileReveal>
      </div>
    </section>
  )
}

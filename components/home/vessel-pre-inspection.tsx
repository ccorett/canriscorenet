import { MobileReveal } from "@/components/mobile-reveal"

export function VesselPreInspectionSection() {
  return (
    <section
      id="vessel-pre-inspection"
      className="relative scroll-mt-16 overflow-hidden bg-[#f4f9f4] px-4 py-16 md:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:hidden" />
      <div className="mx-auto max-w-3xl text-center">
        <MobileReveal>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            VESSEL PRE-INSPECTION PLATFORM
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#001920] md:text-4xl">
            Vessel Pre-Inspection Platform
          </h2>
        </MobileReveal>

        <MobileReveal delay={100}>
          <div className="relative mt-6 overflow-hidden rounded-xl border border-border/60 bg-white/90 px-6 py-10 shadow-sm md:mt-8 md:px-10 md:py-12">
            <div
              className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute w-[145%] rotate-[-32deg] bg-primary py-3 shadow-[0_6px_24px_rgba(90,169,233,0.4)] md:py-4">
                <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white sm:text-sm md:text-base md:tracking-[0.35em]">
                  COMING SOON
                </p>
              </div>
            </div>

            <div className="relative z-[1]">
              <p className="text-lg text-[#001920]/70 leading-relaxed">
                A digital platform by CANRIS for structured small commercial vessel pre-inspections, deficiency tracking, documentation and compliance readiness.
              </p>
              <p className="mt-3 text-base text-[#001920]/60">
                Built for qualified inspectors, surveyors, vessel operators and marine organisations.
              </p>
            </div>
          </div>
        </MobileReveal>
      </div>
    </section>
  )
}

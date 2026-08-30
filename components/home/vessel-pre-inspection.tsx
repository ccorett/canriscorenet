import { Button } from "@/components/ui/button"

export function VesselPreInspectionSection() {
  return (
    <section
      id="vessel-pre-inspection"
      className="scroll-mt-16 bg-[#f4f9f4] px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          COMING SOON
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#001920] md:text-4xl">
          Vessel Pre-Inspection Platform
        </h2>
        <p className="mt-4 text-lg text-[#001920]/70 leading-relaxed">
          A digital platform being developed by CANRIS to support structured small commercial vessel pre-inspections, deficiency tracking and compliance readiness.
        </p>
        <p className="mt-3 text-base text-[#001920]/60">
          Built for qualified inspectors, surveyors, vessel operators and marine organisations.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="h-12 px-8 text-base"
            disabled
            aria-disabled="true"
          >
            Coming Soon
          </Button>
        </div>
      </div>
    </section>
  )
}

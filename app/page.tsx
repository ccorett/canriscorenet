import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendlyProvider } from "@/components/calendly-popup"
import { ScrollToTop } from "@/components/scroll-to-top"

import { HomeHero } from "@/components/home/hero"
import { ClaritySection } from "@/components/home/clarity"
import { ProblemsSection } from "@/components/home/problems"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyCanris } from "@/components/home/why-canris"
import { MoreFramework } from "@/components/home/more-framework"
import { ProcessPreview } from "@/components/home/process-preview"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <CalendlyProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HomeHero />
          <ClaritySection />
          <ProblemsSection />
          <ServicesOverview />
          <CTASection />
          <WhyCanris />
          <MoreFramework />
          <ProcessPreview />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </CalendlyProvider>
  )
}

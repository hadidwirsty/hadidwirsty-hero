import {
  HeroFooter,
  InteractivePreview,
  MetricsStrip,
  Navbar,
  ParallaxHero,
} from "@/components/hero"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <ParallaxHero />
        <section
          id="produk"
          className="relative z-10 bg-background py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <InteractivePreview />
            <div id="metrik" className="mt-20">
              <MetricsStrip />
            </div>
          </div>
        </section>
      </main>
      <HeroFooter />
    </div>
  )
}

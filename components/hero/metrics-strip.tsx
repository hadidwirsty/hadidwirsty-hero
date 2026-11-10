"use client"

import { motion } from "motion/react"
import { Award, DownloadCloud, Layers, ShieldCheck } from "lucide-react"

import { AnimatedCounter } from "@/components/hero/animated-counter"

interface MetricItem {
  numericValue: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  subtext: string
  icon: typeof Award
}

const METRICS: MetricItem[] = [
  {
    numericValue: 4,
    label: "Aplikasi Pemimpin Kategori",
    subtext: "Dibangun dari nol secara mandiri",
    icon: Layers,
  },
  {
    numericValue: 150,
    suffix: " Jt+",
    label: "Total Unduhan Aplikasi",
    subtext: "Jangkauan pengguna di seluruh dunia",
    icon: DownloadCloud,
  },
  {
    numericValue: 1,
    prefix: "#",
    label: "Aplikasi AI Terdepan",
    subtext: "Peringkat teratas di Apple App Store",
    icon: Award,
  },
  {
    numericValue: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Keandalan Inferensi",
    subtext: "Model berjalan langsung pada perangkat",
    icon: ShieldCheck,
  },
]

export function MetricsStrip() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Header Label */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
        >
          Hanya Angka Nyata di Sini
        </motion.p>
      </div>

      {/* Metrics Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {METRICS.map((metric, idx) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md transition-shadow hover:border-border hover:shadow-lg dark:bg-card/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold tracking-tight text-foreground transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
                  <AnimatedCounter
                    value={metric.numericValue}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </span>
                <div className="flex size-8 items-center justify-center rounded-xl bg-muted/80 text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <Icon className="size-4" />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  {metric.label}
                </h4>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {metric.subtext}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Philosophy Callout Quote */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/50 bg-secondary/30 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          &ldquo;Kami tidak sekadar mengoptimalkan diri mengikuti arus pasar.
          Kami menciptakan terobosan baru dan merancang produk yang selalu
          menjadi andalan pengguna. Skala dan traksi akan menyusul dengan
          sendirinya.&rdquo;
        </p>
      </motion.div>
    </div>
  )
}

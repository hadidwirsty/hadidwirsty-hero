"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Compass, Sparkles } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { InteractivePreview } from "@/components/hero/interactive-preview"
import { MetricsStrip } from "@/components/hero/metrics-strip"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Dynamic Background Ambient Glow (Framer Driven) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="size-145 rounded-full bg-primary/20 blur-[140px] dark:bg-primary/25"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.95, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 size-105 rounded-full bg-accent/30 blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Centered Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated Status Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/70 px-4 py-1.5 text-xs font-medium text-secondary-foreground shadow-xs backdrop-blur-md"
          >
            <span className="flex size-2 animate-pulse rounded-full bg-emerald-500" />
            <Sparkles className="size-3.5 text-primary" />
            <span>Laboratorium Rekayasa Produk & Kecerdasan Buatan</span>
          </motion.div>

          {/* Staggered Heading Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 space-y-2"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[76px] lg:leading-[1.08]">
              Kami Membentuk Kecerdasan
              <br />
              <span className="bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
                di Balik Kreativitas Modern.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Kami mengembangkan perkakas cerdas yang mengubah teknologi
            kecerdasan buatan termutakhir menjadi kekuatan kreatif nyata
            sehari-hari. Digunakan oleh jutaan pengguna, diperkuat oleh riset
            mendalam.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#produk"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "group h-12 rounded-full px-6 text-sm font-semibold shadow-md transition-all hover:shadow-lg"
              )}
            >
              <span>Jelajahi Produk Unggulan</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#metrik"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full px-6 text-sm font-semibold hover:bg-muted"
              )}
            >
              <Compass className="size-4 text-muted-foreground" />
              <span>Lihat Angka Riil</span>
            </Link>
          </motion.div>
        </div>

        {/* Interactive Feature Demo Showcase (Ala Retake di Wishlabs) */}
        <InteractivePreview />

        {/* Metrics Section (Only The Real Numbers Here) */}
        <div id="metrik">
          <MetricsStrip />
        </div>
      </div>
    </section>
  )
}

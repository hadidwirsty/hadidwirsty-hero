"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, Sparkles, Wand2 } from "lucide-react"

import { Button } from "@/components/ui/button"

interface SamplePreset {
  id: string
  title: string
  category: string
  metric: string
  metricLabel: string
  beforeDescription: string
  afterDescription: string
  modelDetail: string
}

const PRESETS: SamplePreset[] = [
  {
    id: "retake",
    title: "Retake AI",
    category: "Penyunting Wajah Generatif",
    metric: "#1",
    metricLabel: "Aplikasi Teratas di App Store",
    beforeDescription: "Foto mentah pencahayaan minim dengan distorsi sensor.",
    afterDescription: "Restorasi pencahayaan studio 8K dengan kedalaman alami.",
    modelDetail:
      "Arsitektur Difusi Khusus Perangkat Bergerak (Latensi < 120ms)",
  },
  {
    id: "wonder",
    title: "Wonder Engine",
    category: "Generator Seni & Visi Digital",
    metric: "40 Jt+",
    metricLabel: "Pengguna Global Aktif",
    beforeDescription:
      "Deskripsi konsep teks abstrak tanpa visualisasi konkret.",
    afterDescription: "Karya visual resolusi tinggi dengan estetika sinematik.",
    modelDetail: "Model Fondasi Multi-Modal dengan Penyesuaian LoRA Cepat",
  },
  {
    id: "pixelup",
    title: "PixelUp Restorasi",
    category: "Peningkat Kualitas Foto Lawas",
    metric: "20 Jt+",
    metricLabel: "Foto Telah Direstorasi",
    beforeDescription: "Arsip fisik tahun 1960-an yang pudar dan buram.",
    afterDescription:
      "Rekonstruksi warna autentik dan ketajaman tekstur mikro.",
    modelDetail: "Super-Resolution Neural Network Berakurasi Tinggi",
  },
]

export function InteractivePreview() {
  const [activeTab, setActiveTab] = React.useState<string>("retake")
  const [showTransformed, setShowTransformed] = React.useState<boolean>(true)

  const activePreset = PRESETS.find((p) => p.id === activeTab) ?? PRESETS[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto mt-12 w-full max-w-4xl"
    >
      {/* Outer Glow Wrapper */}
      <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary/30 via-accent/20 to-primary/30 opacity-60 blur-xl transition-all duration-500 hover:opacity-100 dark:from-primary/20 dark:via-accent/10 dark:to-primary/20" />

      {/* Main Glass Card */}
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
        {/* Top Control Bar */}
        <div className="flex flex-col gap-4 border-b border-border/50 pb-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Preset Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-muted/70 p-1">
            {PRESETS.map((preset) => {
              const isActive = activeTab === preset.id
              return (
                <button
                  key={preset.id}
                  onClick={() => setActiveTab(preset.id)}
                  className={`relative rounded-xl px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 rounded-xl bg-primary shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{preset.title}</span>
                </button>
              )
            })}
          </div>

          {/* Toggle Switch Before / After */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs text-muted-foreground">Status Demo:</span>
            <div className="flex items-center rounded-xl border border-border bg-background/80 p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setShowTransformed(false)}
                className={`rounded-lg px-2.5 py-1 transition-all ${
                  !showTransformed
                    ? "bg-secondary text-secondary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sebelum
              </button>
              <button
                type="button"
                onClick={() => setShowTransformed(true)}
                className={`flex items-center gap-1 rounded-lg px-2.5 py-1 transition-all ${
                  showTransformed
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="size-3" />
                <span>Sesudah (AI)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Body with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePreset.id + String(showTransformed)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 items-center gap-6 pt-6 md:grid-cols-12"
          >
            {/* Visual Canvas Area */}
            <div className="relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-linear-to-br from-muted/80 via-background to-secondary/60 p-6 md:col-span-7">
              {/* Decorative Matrix Grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Status Header Inside Canvas */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md">
                  <span
                    className={`size-1.5 rounded-full ${
                      showTransformed
                        ? "animate-pulse bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  />
                  {showTransformed
                    ? "Hasil Pemrosesan AI"
                    : "Kondisi Masukan Awal"}
                </span>

                <span className="font-mono text-[11px] text-muted-foreground">
                  {showTransformed ? "4096 × 4096 px" : "720 × 720 px"}
                </span>
              </div>

              {/* Center Visualization Graphic */}
              <div className="relative z-10 my-4 flex flex-col items-center justify-center text-center">
                <div
                  className={`flex size-16 items-center justify-center rounded-2xl border transition-all duration-500 ${
                    showTransformed
                      ? "border-primary/40 bg-primary/10 text-primary shadow-lg shadow-primary/15"
                      : "border-border bg-muted/60 text-muted-foreground"
                  }`}
                >
                  {showTransformed ? (
                    <Wand2 className="size-8" />
                  ) : (
                    <Sparkles className="size-8 opacity-40" />
                  )}
                </div>

                <p className="mt-4 max-w-sm text-sm font-medium text-foreground">
                  {showTransformed
                    ? activePreset.afterDescription
                    : activePreset.beforeDescription}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {showTransformed
                    ? "Model inferensi beroperasi secara luring pada perangkat."
                    : "Data mentah sebelum diproses oleh arsitektur difusi kami."}
                </p>
              </div>

              {/* Footer Indicator Inside Canvas */}
              <div className="relative z-10 flex items-center justify-between border-t border-border/40 pt-3 text-[11px] text-muted-foreground">
                <span>Model: In-House Engine</span>
                <span className="font-medium text-foreground">
                  {activePreset.category}
                </span>
              </div>
            </div>

            {/* Metadata & Proof Column */}
            <div className="flex flex-col justify-between space-y-6 md:col-span-5">
              <div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Bukti Nyata Kategori
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                  {activePreset.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {activePreset.category}. Dirancang dari nol menggunakan riset
                  mandiri sebelum pasar terbentuk.
                </p>
              </div>

              {/* Metric Box */}
              <div className="rounded-2xl border border-border/80 bg-secondary/40 p-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-foreground">
                    {activePreset.metric}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {activePreset.metricLabel}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                  <Check className="size-3.5" />
                  <span>Terbukti dalam Skala Jutaan Pengguna</span>
                </div>
              </div>

              {/* Technical Footnote */}
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  Spesifikasi Lab:
                </span>
                <p className="leading-relaxed">{activePreset.modelDetail}</p>
              </div>

              {/* Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowTransformed(!showTransformed)}
                className="w-full rounded-xl text-xs font-medium"
              >
                {showTransformed
                  ? "Bandingkan dengan Data Awal"
                  : "Tampilkan Transformasi AI"}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Moon, Sparkles, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const emptySubscribe = () => () => {}

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="size-4.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-foreground">
              HADID WIRSTY
            </span>
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
              Lab Kreativitas & AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link
            href="#produk"
            className="transition-colors hover:text-foreground"
          >
            Produk
          </Link>
          <Link
            href="#metrik"
            className="transition-colors hover:text-foreground"
          >
            Metrik
          </Link>
          <Link
            href="#teknologi"
            className="transition-colors hover:text-foreground"
          >
            Teknologi
          </Link>
          <Link
            href="#ulasan"
            className="transition-colors hover:text-foreground"
          >
            Ulasan
          </Link>
          <Link
            href="#karier"
            className="transition-colors hover:text-foreground"
          >
            Karier
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Ganti Tema Tampilan"
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>

          {/* CTA Link styled as Button */}
          <Link
            href="#karier"
            className="hidden items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-transform duration-200 hover:opacity-90 active:scale-95 sm:inline-flex"
          >
            Mulai Kolaborasi
          </Link>
        </div>
      </div>
    </motion.header>
  )
}

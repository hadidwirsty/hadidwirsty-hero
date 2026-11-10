"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

export function ParallaxHero() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Track scroll progress of the parallax hero container (260vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Multi-plane parallax translations matching Wishlabs depth layers
  const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"])
  const factoryY = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"])
  const valleyY = useTransform(scrollYProgress, [0, 1], ["0%", "-46%"])
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <div
      ref={containerRef}
      className="relative h-[260vh] w-full"
      style={{
        background:
          "linear-gradient(180deg, #112f72 -25%, #6e8bf3 5%, #e891e3 55%, #6b50cf 100%)",
      }}
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* PARALLAX ARTWORK BACKGROUND STACK */}
        <motion.div
          style={{ scale: sceneScale }}
          className="pointer-events-none absolute inset-0 size-full origin-bottom select-none"
        >
          {/* Layer 1: Ambient Clouds */}
          <motion.div
            style={{ y: cloudY }}
            className="absolute top-0 left-1/2 w-full max-w-[2400px] min-w-300 -translate-x-1/2 will-change-transform"
          >
            <Image
              src="/hero/cloud.png"
              alt="Awan Ambien"
              width={1147}
              height={2048}
              priority
              className="h-auto w-full object-cover select-none"
              draggable={false}
            />
          </motion.div>

          {/* Layer 2: Factory / Citadel on Hill */}
          <motion.div
            style={{ y: factoryY }}
            className="absolute top-0 left-1/2 z-1 w-full max-w-[2400px] min-w-300 -translate-x-1/2 will-change-transform"
          >
            <Image
              src="/hero/factory.png"
              alt="Pabrik dan Kastel Riset"
              width={1150}
              height={2048}
              priority
              className="h-auto w-full object-cover select-none"
              draggable={false}
            />
          </motion.div>

          {/* Layer 3: Misty Valley */}
          <motion.div
            style={{ y: valleyY }}
            className="absolute top-0 left-1/2 z-2 w-full max-w-[2400px] min-w-300 -translate-x-1/2 will-change-transform"
          >
            <Image
              src="/hero/valley.png"
              alt="Lembah Kabut Parallax"
              width={1147}
              height={2048}
              priority
              className="h-auto w-full object-cover select-none"
              draggable={false}
            />
          </motion.div>

          {/* Layer 4: Foreground Mountain Ridge & Pine Trees */}
          <motion.div
            style={{ y: mountainY }}
            className="absolute top-0 left-1/2 z-3 w-full max-w-[2400px] min-w-300 -translate-x-1/2 will-change-transform"
          >
            <Image
              src="/hero/mountain.png"
              alt="Punggungan Gunung Depan"
              width={1147}
              height={2048}
              priority
              className="h-auto w-full object-cover select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

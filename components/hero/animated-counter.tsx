"use client"

import * as React from "react"
import { useInView, useMotionValue, useSpring } from "motion/react"

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const springVal = useSpring(motionVal, { damping: 30, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [display, setDisplay] = React.useState("0")

  React.useEffect(() => {
    if (isInView) {
      motionVal.set(value)
    }
  }, [isInView, motionVal, value])

  React.useEffect(() => {
    return springVal.on("change", (latest) => {
      if (decimals > 0) {
        setDisplay(latest.toFixed(decimals))
      } else {
        setDisplay(Math.round(latest).toString())
      }
    })
  }, [springVal, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, GraduationCap, Trophy, Users } from "lucide-react"

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-violet-600" />,
      value: 50000,
      label: "Students",
      suffix: "+",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-violet-600" />,
      value: 200,
      label: "Courses",
      suffix: "+",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-violet-600" />,
      value: 150,
      label: "Instructors",
      suffix: "+",
    },
    {
      icon: <Trophy className="h-8 w-8 text-violet-600" />,
      value: 99,
      label: "Satisfaction Rate",
      suffix: "%",
    },
  ]

  return (
    <section className="py-12 border-y bg-white">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              isInView={isInView}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  isInView: boolean
  delay: number
}

function StatItem({ icon, value, label, suffix = "", isInView, delay }: StatItemProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, value, delay])

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 p-4 rounded-full bg-violet-50 transition-all duration-300 hover:bg-violet-100 hover:scale-110">
        {icon}
      </div>
      <div className="text-3xl font-bold sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
        {count}
        {suffix}
      </div>
      <p className="text-gray-500 mt-1">{label}</p>
    </motion.div>
  )
}

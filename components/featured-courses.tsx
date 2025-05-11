"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { courses } from "@/lib/data"

export default function FeaturedCourses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const featuredCourses = courses.slice(0, 6)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredCourses.map((course, index) => (
        <motion.div
          key={course.id}
          className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={500}
              height={300}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {course.isBestseller && (
              <Badge className="absolute left-2 top-2 bg-yellow-500 hover:bg-yellow-600">Bestseller</Badge>
            )}
            {course.isNew && <Badge className="absolute left-2 top-2 bg-green-500 hover:bg-green-600">New</Badge>}
          </div>
          <div className="p-4 sm:p-6">
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="outline" className="bg-violet-50 text-violet-700 hover:bg-violet-100">
                {course.category}
              </Badge>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="h-4 w-4 fill-yellow-500" />
                <span className="text-sm font-medium">{course.rating}</span>
              </div>
            </div>
            <h3 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight text-gray-900 mb-1 group-hover:text-violet-600 transition-colors">
              {course.title}
            </h3>
            <p className="line-clamp-2 text-sm text-gray-500 mb-3">{course.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-gray-900">${course.price.toFixed(2)}</div>
              <Button
                size="sm"
                className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
              >
                View Course
              </Button>
            </div>
          </div>
          {hoveredIndex === index && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

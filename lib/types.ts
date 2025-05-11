export interface Course {
  id: string
  title: string
  description: string
  price: number
  rating: number
  students: number
  category: string
  image: string
  instructor: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  isBestseller?: boolean
  isNew?: boolean
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
    role: string
  }
  date: string
  readTime: number
  tags: string[]
}

export interface Testimonial {
  id: string
  name: string
  title: string
  avatar: string
  quote: string
}

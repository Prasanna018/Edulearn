import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import FeaturedCourses from "@/components/featured-courses"
import TestimonialsSection from "@/components/testimonials-section"
import StatsCounter from "@/components/stats-counter"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-100 to-white py-16 md:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential With{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                    Modern Learning
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Interactive courses, expert instructors, and a community that supports your learning journey.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="transition-all duration-300 hover:bg-violet-50">
                  Browse Courses
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-700">Our Courses</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn From The Best</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our wide range of courses designed to help you achieve your goals.
              </p>
            </div>
          </div>
          <FeaturedCourses />
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-violet-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                <BookOpen className="h-8 w-8 text-violet-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Interactive Learning</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Engage with interactive content, quizzes, and hands-on projects to reinforce your learning.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                <GraduationCap className="h-8 w-8 text-violet-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Expert Instructors</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Learn from industry professionals with years of experience in their respective fields.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                <Users className="h-8 w-8 text-violet-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Join a community of learners and instructors to collaborate and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}

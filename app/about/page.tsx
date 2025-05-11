import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-100 to-white py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Transforming Education for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Digital Age
              </span>
            </h1>
            <p className="mt-4 text-gray-500 md:text-xl max-w-2xl mx-auto">
              We're on a mission to make high-quality education accessible to everyone, everywhere. Learn about our
              journey, our team, and our vision for the future of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-500">
                <p>
                  EduLearn was founded in 2018 with a simple yet powerful vision: to break down barriers to education
                  and create a platform where anyone, regardless of their background or location, could access
                  high-quality learning resources.
                </p>
                <p>
                  What started as a small collection of programming tutorials has grown into a comprehensive educational
                  platform offering hundreds of courses across multiple disciplines, from web development and data
                  science to design, business, and more.
                </p>
                <p>
                  Our journey hasn't been without challenges, but our commitment to our mission has never wavered. With
                  each course we create, each instructor we partner with, and each student we help succeed, we move one
                  step closer to realizing our vision of a world where quality education is a right, not a privilege.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/courses">
                    Explore Our Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="transition-all duration-300 hover:bg-violet-50" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/images/blog-6.png"
                  alt="Team collaboration"
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-violet-100 rounded-full p-2">
                    <GraduationCap className="h-6 w-6 text-violet-600" />
                  </div>
                  <div className="font-bold text-xl">50,000+</div>
                </div>
                <p className="text-gray-500">Students have transformed their careers with our courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-violet-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Mission & Values</h2>
            <p className="text-gray-500 md:text-lg">
              At the core of everything we do are the principles that guide our decisions and shape our culture.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="bg-violet-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessible Education</h3>
              <p className="text-gray-500">
                We believe that quality education should be accessible to everyone, regardless of their background,
                location, or financial situation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="bg-violet-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
              <p className="text-gray-500">
                We foster a supportive community where students and instructors can connect, collaborate, and grow
                together.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="bg-violet-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion for Excellence</h3>
              <p className="text-gray-500">
                We are committed to excellence in everything we do, from the quality of our courses to the support we
                provide our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-gray-500 md:text-lg">
              The passionate individuals behind EduLearn who are dedicated to transforming education.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/images/testimonial-1.png",
                bio: "Former educator with a passion for making quality education accessible to all.",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image: "/images/testimonial-4.png",
                bio: "Tech innovator focused on creating seamless learning experiences through technology.",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Content",
                image: "/images/testimonial-3.png",
                bio: "Curriculum expert dedicated to creating engaging and effective learning materials.",
              },
              {
                name: "David Wilson",
                role: "Chief Marketing Officer",
                image: "/images/testimonial-2.png",
                bio: "Marketing strategist passionate about spreading the word about educational opportunities.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-violet-600 mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-violet-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Why Choose EduLearn</h2>
            <p className="text-gray-500 md:text-lg">
              What sets us apart and why thousands of students trust us with their educational journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of experience in their respective fields.",
              },
              {
                title: "Comprehensive Curriculum",
                description:
                  "Our courses cover everything from fundamentals to advanced topics, ensuring a complete learning experience.",
              },
              {
                title: "Hands-on Projects",
                description:
                  "Apply what you learn through practical projects that build your portfolio and reinforce concepts.",
              },
              {
                title: "Flexible Learning",
                description: "Study at your own pace, on your own schedule, from anywhere in the world.",
              },
              {
                title: "Supportive Community",
                description: "Join a community of learners and instructors who are there to help you succeed.",
              },
              {
                title: "Career Support",
                description:
                  "Get guidance on building your portfolio, preparing for interviews, and advancing your career.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <CheckCircle2 className="h-6 w-6 text-violet-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 md:text-lg">
                Find answers to common questions about our platform and courses.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">How do I get started with EduLearn?</AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Simply create an account, browse our course catalog, and enroll in any course
                  that interests you. Once enrolled, you'll have immediate access to the course materials and can start
                  learning right away.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Are the courses self-paced?</AccordionTrigger>
                <AccordionContent>
                  Yes, all our courses are self-paced, allowing you to learn on your own schedule. There are no
                  deadlines for completing courses, so you can take as much time as you need to master the material.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Do I get a certificate upon completion?</AccordionTrigger>
                <AccordionContent>
                  Yes, you'll receive a certificate of completion for each course you finish. These certificates can be
                  added to your resume or LinkedIn profile to showcase your new skills to potential employers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">How long do I have access to a course?</AccordionTrigger>
                <AccordionContent>
                  Once you enroll in a course, you have lifetime access to the course materials. This allows you to
                  revisit the content whenever you need a refresher or want to stay updated with new additions to the
                  course.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Is there any support available if I get stuck?
                </AccordionTrigger>
                <AccordionContent>
                  We offer multiple support channels, including a Q&A section for each course, community forums, and
                  direct access to instructors. Our team is committed to helping you succeed in your learning journey.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">Can I get a refund if I'm not satisfied?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 30-day money-back guarantee for all our courses. If you're not completely satisfied
                  with your purchase, you can request a full refund within 30 days of enrollment, no questions asked.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6">Still have questions? We're here to help!</p>
              <Button
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Our Support Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-violet-100 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-gray-700 md:text-lg mb-8">
              Join thousands of students who are already transforming their lives through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="transition-all duration-300 hover:bg-white" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

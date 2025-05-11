"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-violet-100 to-indigo-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-10 border border-violet-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Newsletter</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest courses, educational resources, and exclusive offers.
              </p>
            </div>
            {isSubmitted ? (
              <motion.div
                className="w-full rounded-lg bg-green-50 p-4 text-center border border-green-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-green-700 font-medium">Thank you for subscribing to our newsletter!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-violet-600">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-violet-600">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

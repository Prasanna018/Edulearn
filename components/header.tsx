"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GraduationCap, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-violet-600" />
          <span className="font-bold text-xl">EduLearn</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-violet-600 relative group",
                pathname === item.href ? "text-violet-600" : "text-gray-600",
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full",
                  pathname === item.href ? "w-full" : "w-0",
                )}
              ></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-4">
          <Button variant="outline" size="sm" className="hover:bg-violet-50 transition-colors duration-300">
            Log In
          </Button>
          <Button
            size="sm"
            className="bg-violet-600 hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
          >
            Sign Up
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b py-4">
                <Link href="/" className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-violet-600" />
                  <span className="font-bold text-xl">EduLearn</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-violet-600 py-2",
                      pathname === item.href ? "text-violet-600" : "text-gray-600",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-t py-6 flex flex-col gap-4">
                <Button variant="outline" className="w-full hover:bg-violet-50">
                  Log In
                </Button>
                <Button className="w-full bg-violet-600 hover:bg-violet-700">Sign Up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

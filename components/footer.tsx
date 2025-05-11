import Link from "next/link"
import { Facebook, GraduationCap, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4 col-span-full lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-violet-600" />
                <span className="font-bold text-xl">EduLearn</span>
              </div>
            </Link>
            <p className="text-gray-500 max-w-xs">
              Empowering learners worldwide with high-quality education and interactive courses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Business & Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors duration-300">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-gray-500 hover:text-violet-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-violet-600 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-violet-600 transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

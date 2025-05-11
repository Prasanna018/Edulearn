import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { blogPosts } from "@/lib/data"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-b from-violet-50 to-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Educational Resources & Blog
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the latest insights, tutorials, and educational resources to enhance your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 py-6 bg-white shadow-sm focus:ring-2 focus:ring-violet-200 transition-all duration-300"
              />
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group">
              <div className="grid gap-8 md:grid-cols-2 items-center rounded-xl overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="aspect-video w-full h-full overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="inline-block rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700 mb-4">
                    Featured Article
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-500 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={blogPosts[0].author.avatar || "/placeholder.svg"}
                        alt={blogPosts[0].author.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{blogPosts[0].author.name}</div>
                      <div className="text-sm text-gray-500">{blogPosts[0].author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{blogPosts[0].readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <Suspense fallback={<BlogGridSkeleton />}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={340}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="line-clamp-2 text-gray-500 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <div
                            key={tag}
                            className="inline-flex items-center rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700"
                          >
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                          </div>
                        ))}
                        {post.tags.length > 2 && (
                          <div className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                            +{post.tags.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </Suspense>

          <div className="flex items-center justify-center mt-12">
            <Button variant="outline" className="mx-2 hover:bg-violet-50">
              Previous
            </Button>
            <Button variant="outline" className="mx-2 bg-violet-100 text-violet-700 hover:bg-violet-200">
              1
            </Button>
            <Button variant="outline" className="mx-2 hover:bg-violet-50">
              2
            </Button>
            <Button variant="outline" className="mx-2 hover:bg-violet-50">
              3
            </Button>
            <Button variant="outline" className="mx-2 hover:bg-violet-50">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-500 mb-6">
              Get the latest articles, tutorials, and educational resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-violet-600 hover:bg-violet-700 transition-all duration-300">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogGridSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <Skeleton className="aspect-video w-full" />
            <div className="p-4 sm:p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex gap-2 pt-1">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

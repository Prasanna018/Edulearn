import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarIcon, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same tag)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      <article className="flex-1">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-b from-violet-50 to-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center mb-6 text-sm text-violet-600 hover:text-violet-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container px-4 md:px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-10">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-violet max-w-none">
                <p className="text-lg font-medium text-gray-700 mb-6">{post.excerpt}</p>

                <h2>Introduction</h2>
                <p>
                  In today's rapidly evolving digital landscape, staying updated with the latest trends and technologies
                  is essential for professional growth and success. This article explores key insights and practical
                  strategies to help you navigate the ever-changing world of technology and education.
                </p>

                <h2>Why This Matters</h2>
                <p>
                  The pace of technological change continues to accelerate, transforming industries and creating new
                  opportunities. Understanding these changes and adapting to them is crucial for anyone looking to
                  remain competitive in their field.
                </p>

                <p>
                  As we delve deeper into the digital age, the distinction between technical and non-technical roles is
                  blurring. Even positions that were traditionally considered non-technical now require a basic
                  understanding of digital tools and platforms.
                </p>

                <h2>Key Insights</h2>
                <p>
                  The most successful professionals in any field are those who embrace continuous learning. This doesn't
                  necessarily mean pursuing formal education throughout your career, but rather adopting a mindset of
                  curiosity and openness to new ideas and approaches.
                </p>

                <p>
                  Technology is not just changing how we work but also how we learn. Online platforms, interactive
                  courses, and community-driven learning environments are making education more accessible and
                  personalized than ever before.
                </p>

                <h2>Practical Applications</h2>
                <p>
                  Applying theoretical knowledge to real-world scenarios is where true learning happens. Throughout this
                  article, we'll explore practical ways to implement the concepts discussed, ensuring that you can
                  translate insights into actionable steps for your personal and professional development.
                </p>

                <h2>Looking Ahead</h2>
                <p>
                  The future of education and professional development is exciting and full of possibilities. By staying
                  informed and adaptable, you can position yourself to take advantage of emerging opportunities and
                  navigate challenges with confidence.
                </p>

                <p>
                  Remember that the goal is not to predict the future with perfect accuracy, but to build the skills and
                  mindset that will allow you to thrive regardless of what changes come your way.
                </p>

                <h2>Conclusion</h2>
                <p>
                  As we've explored throughout this article, the landscape of learning and professional development is
                  evolving rapidly. By embracing continuous learning, leveraging technology, and focusing on practical
                  applications, you can stay ahead of the curve and achieve your goals in an increasingly digital world.
                </p>

                <p>
                  The journey of learning is ongoing, and each step you take builds upon the last. We encourage you to
                  reflect on the insights shared here and consider how they might apply to your unique situation and
                  aspirations.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 mb-12">
                {post.tags.map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700"
                  >
                    <Tag className="mr-1 h-3.5 w-3.5" />
                    {tag}
                  </div>
                ))}
              </div>

              {/* Author Bio */}
              <div className="border-t border-b py-8 my-8">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="h-20 w-20 overflow-hidden rounded-full shrink-0">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                    <p className="text-gray-500 mb-3">{post.author.role}</p>
                    <p className="text-gray-700">
                      An experienced educator and industry professional passionate about sharing knowledge and helping
                      others succeed in their learning journey. With years of practical experience and a talent for
                      breaking down complex concepts, they create content that is both informative and accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                    <article className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-2 text-lg font-bold leading-tight tracking-tight text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-gray-500">{relatedPost.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

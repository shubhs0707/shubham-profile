'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'

const posts = [
  {
    title: "Building Scalable Product Teams",
    excerpt: "Insights from scaling product development at Muvi from 10 to 100+ engineers while maintaining agility and innovation.",
    date: "2024-02-15",
    image: "/blog/product-teams.jpg",
    readTime: "8 min read",
    tags: ["Leadership", "Product Management", "Scaling"],
    link: "https://medium.com/@shubham/building-scalable-product-teams"
  },
  {
    title: "AI-Driven Product Development",
    excerpt: "How we're leveraging AI tools and automation to enhance product development workflow and team productivity.",
    date: "2024-01-20",
    image: "/blog/ai-product.jpg",
    readTime: "6 min read",
    tags: ["AI", "Automation", "Product Development"],
    link: "https://medium.com/@shubham/ai-driven-product-development"
  },
  {
    title: "The Future of EdTech Platforms",
    excerpt: "Reflections on building educator-first platforms and the evolving landscape of online education.",
    date: "2023-12-10",
    image: "/blog/edtech-future.jpg",
    readTime: "10 min read",
    tags: ["EdTech", "Future Trends", "User Experience"],
    link: "https://medium.com/@shubham/future-of-edtech-platforms"
  }
]

export function BlogPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.title}
          className="group bg-card rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Post Image */}
          <div className="relative h-48 overflow-hidden">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0 bg-primary/10" />
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title and excerpt */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read more button */}
            <Button
              variant="ghost"
              className="group/button flex items-center gap-2 hover:gap-3 transition-all"
              asChild
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read More 
                <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.article>
      ))}
    </div>
  )
} 
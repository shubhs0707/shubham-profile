'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Quote } from 'lucide-react'
import { useState, useCallback } from 'react'

const testimonials = [
  {
    quote: "Shubham is an exceptional product leader who combines deep technical knowledge with strategic thinking. His ability to drive innovation while keeping the team focused on delivering results is remarkable.",
    author: "Anshuman Bhargava",
    title: "CEO at Muvi.com",
    image: "/testimonials/anshuman.jpg"
  },
  {
    quote: "Working with Shubham was a game-changer for our product team. His approach to problem-solving and user-centric design helped us achieve significant growth in user engagement and retention.",
    author: "Mukul Rustagi",
    title: "Co-founder at Classplus",
    image: "/testimonials/mukul.jpg"
  },
  {
    quote: "Shubham's leadership in building Radio Rocket from scratch was inspiring. His focus on user experience and data-driven decision making created a product that users truly love.",
    author: "Brijesh Bharadwaj",
    title: "Product Lead at Radio Rocket",
    image: "/testimonials/brijesh.jpg"
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Large quote icon */}
      <div className="absolute -top-6 left-0 text-primary/10">
        <Quote size={120} />
      </div>

      {/* Testimonials */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="w-full flex-shrink-0 px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg relative">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Avatar className="w-20 h-20 border-4 border-primary/10">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>

                  <blockquote className="text-lg text-muted-foreground italic relative">
                    "{testimonial.quote}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeIndex ? 'bg-primary' : 'bg-primary/20'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-background shadow-lg hover:bg-muted transition-colors"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-background shadow-lg hover:bg-muted transition-colors"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
} 
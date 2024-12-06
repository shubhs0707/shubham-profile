'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Muvi.com Platform",
    description: "Led the development of Muvi's core platform, enabling businesses to launch their own video/audio streaming service.",
    image: "/projects/muvi.png",
    tags: ["Product Strategy", "Team Leadership", "Platform Development"],
    metrics: [
      "100+ Engineers",
      "5 Product Lines",
      "25% Higher Conversion"
    ],
    link: "https://muvi.com"
  },
  {
    title: "Radio Rocket",
    description: "Mobile app-based radio platform with breakthrough user engagement and innovative features.",
    image: "/projects/radio-rocket.png",
    tags: ["Mobile App", "User Experience", "Growth"],
    metrics: [
      "500K+ Downloads",
      "40 min Daily Usage",
      "40%+ Retention"
    ],
    github: "https://github.com/shubhamagrawal/radio-rocket",
    link: "https://radiorocket.app"
  },
  {
    title: "Classplus Educator Tools",
    description: "Comprehensive marketing and content sharing platform for educators, driving significant user engagement.",
    image: "/projects/classplus.png",
    tags: ["EdTech", "B2B", "Growth Tools"],
    metrics: [
      "50% Daily Usage",
      "20% Customer Acquisition",
      "New Revenue Stream"
    ],
    link: "https://classplus.co"
  }
]

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="group relative bg-card rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0 bg-primary/10" />
            )}
          </div>

          {/* Content */}
          <div className="relative p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.metrics.map(metric => (
                <div 
                  key={metric}
                  className="text-sm font-medium text-muted-foreground"
                >
                  {metric}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {project.link && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Visit Project
                  </a>
                </Button>
              )}
              {project.github && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 
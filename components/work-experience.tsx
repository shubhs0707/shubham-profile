'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: "Chief Product Officer",
    company: "Muvi.com",
    duration: "Apr'23 - Present",
    type: "Product Leadership",
    companyDescription: "Leading OTT & Video Streaming Platform",
    description: [
      "Led product vision and strategy for Muvi.com and its 5 products, leading a team of 8+ Product Managers",
      "Streamlined processes resulting in 30%+ increase in speed and efficiency (measured by Goals achieved)",
      "Made product performance and user experience the core focus, resulting in 25% increase in lead to customer conversion",
      "Implemented data-driven decision making across product teams"
    ]
  },
  {
    title: "Co-founder & CPO",
    company: "Radio Rocket",
    duration: "Dec'21 - Mar'23",
    type: "Startup",
    companyDescription: "Mobile-first Radio Platform",
    description: [
      "Founded Radio Rocket, a mobile app-based radio station for 13 districts",
      "Designed innovative yet simple UX, scaling to 5 lac+ cumulative downloads and 40 minutes average time spent per user per day",
      "Achieved 40%+ week 1 retention through user-centric design and continuous iteration",
      "Raised $500K in funding from Whiteboard Capital and 12 angel investors"
    ]
  },
  {
    title: "Program Manager / Product Lead",
    company: "Classplus",
    duration: "Nov'20 - Dec'21",
    type: "EdTech",
    companyDescription: "Mobile-first SaaS for Educators",
    description: [
      "Conceptualized and executed a growth stack for educators, which was used by ~50% of all engaged users daily",
      "Conceptualized and executed 'Readymade Study Material' solution and other improvements, leading to our app contributing to 20% of all paid customers",
      "Led Classplus Lite android app to 1M+ users"
    ]
  },
  {
    title: "Co-founder / Product",
    company: "Bharat Class",
    duration: "Feb'17 - Oct'20",
    type: "Startup",
    companyDescription: "Online Education Platform",
    featured: ["YourStory", "YouTube"],
    description: [
      "Started a full-stack bank/SSC exam prep app and offline centre from scratch",
      "Pivoted to BharatClass, providing ready-made app and website solutions for online educators during Covid",
      "Onboarded 10,000+ educators and 40,000+ students while maintaining profitability throughout"
    ]
  },
  {
    title: "Product Head",
    company: "BedBathMore",
    duration: "Apr'16 - Jan'17",
    type: "E-commerce",
    companyDescription: "Home & Living E-commerce",
    description: [
      "Launched mobile apps and revamped complete website, leading to 30% increase in NPS",
      "Restructured team and changed priorities resulting in 50% reduction in time to market",
      "Handled multiple in-house projects for product cataloguing, web scraping for affiliate, and product suggestions based on image recognition"
    ]
  },
  {
    title: "Growth / Marketing Manager",
    company: "Toppr",
    duration: "Jan'16 - Mar'16",
    type: "EdTech",
    companyDescription: "Online Learning Platform",
    description: [
      "Improved email strategy (Subject, copy, sender) resulting in 3x increase in open and click-through rates",
      "Led new offline ad campaigns alongside online advertising and marketing initiatives"
    ]
  },
  {
    title: "Co-founder / CEO",
    company: "Adister",
    duration: "Sep'10 - Dec'15",
    type: "Startup",
    companyDescription: "D2C Stationery Brand",
    featured: ["YourStory", "The Hindu", "YouTube"],
    description: [
      "Founded Adister, pioneering ad-supported stylish notebooks at affordable prices",
      "First IIT Roorkee student to opt for deferred placement",
      "Scaled to become the largest online notebook brand in India, managing offices in Delhi and Mumbai"
    ]
  }
]

const typeColors: { [key: string]: string } = {
  'Startup': 'bg-orange-500/10 text-orange-500',
  'Product Leadership': 'bg-blue-500/10 text-blue-500',
  'EdTech': 'bg-green-500/10 text-green-500',
  'E-commerce': 'bg-purple-500/10 text-purple-500'
}

export function WorkExperience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="absolute left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/40 via-primary to-primary/40 rounded-full" />

      <div className="space-y-12">
        {experiences.map((experience, index) => {
          const isHovered = hoveredIndex === index
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline dot with ring */}
              <motion.div 
                className="absolute left-4 top-2 -translate-x-1/2"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="absolute -inset-1 rounded-full border border-primary/30 animate-pulse" />
                {isHovered && (
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-primary/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>

              <div className="space-y-3">
                <motion.div 
                  className="space-y-1"
                  animate={{
                    x: isHovered ? 4 : 0,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {experience.title} • {experience.company}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[experience.type]}`}>
                      {experience.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{experience.duration}</span>
                    <span className="text-xs">•</span>
                    <span className="text-sm italic">{experience.companyDescription}</span>
                  </div>

                  {experience.featured && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium">Featured in:</span>
                      {experience.featured.map((platform, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-muted rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.ul 
                  className="relative list-none space-y-2 text-sm text-muted-foreground ml-4"
                  animate={{
                    x: isHovered ? 8 : 0,
                    transition: { duration: 0.2 }
                  }}
                >
                  {experience.description.map((point, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-2"
                      initial={false}
                      animate={{
                        opacity: isHovered ? 1 : 0.8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <ChevronRight className="w-4 h-4 mt-0.5 text-primary/60" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

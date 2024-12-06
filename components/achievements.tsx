'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Newspaper, Presentation, Lightbulb, Target, ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Link {
  title: string;
  url: string;
  description?: string;
}

interface BaseAchievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HighlightAchievement extends BaseAchievement {
  type: 'highlight';
  highlights: string[];
}

interface LinkAchievement extends BaseAchievement {
  type: 'link';
  links: Link[];
}

type Achievement = HighlightAchievement | LinkAchievement;

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "Leadership Impact",
    type: 'highlight',
    description: "Led product development across multiple companies with significant team growth and business impact.",
    highlights: [
      "Led 100+ engineers across 5 product lines",
      "30% increase in team efficiency",
      "25% higher conversion rates"
    ]
  },
  {
    icon: Users,
    title: "Product Success",
    type: 'highlight',
    description: "Built and scaled multiple successful products with exceptional user engagement.",
    highlights: [
      "500K+ cumulative downloads",
      "40 min average daily usage",
      "40%+ week-1 retention"
    ]
  },
  {
    icon: Newspaper,
    title: "Media Recognition",
    type: 'link',
    description: "Featured in leading publications for entrepreneurial ventures:",
    links: [
      {
        title: "YourStory - BharatClass",
        description: "Coverage of EdTech transformation during Covid",
        url: "https://yourstory.com/2020/08/startup-bharat-satna-edtech-saas-platform-bharatclass-1"
      },
      {
        title: "YourStory - Adister",
        description: "Featured for innovative notebook business",
        url: "https://yourstory.com/2013/07/how-2-iit-roorkee-grads-are-making-money-selling-low-cost-notebooks-the-adister-story"
      },
      {
        title: "The Hindu - Adister",
        description: "Coverage of India's largest online notebook brand",
        url: "https://www.thehindubusinessline.com/blink/work/noteworthy-business/article6745207.ece"
      }
    ]
  },
  {
    icon: Presentation,
    title: "Teaching & Community",
    type: 'highlight',
    description: "Contributed to education and knowledge sharing.",
    highlights: [
      "Ex-Unacademy Educator",
      "2M+ watch minutes",
      "20,000+ followers"
    ]
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    type: 'highlight',
    description: "Pioneered new approaches in product development and automation.",
    highlights: [
      "AI-driven development",
      "Automated workflows",
      "Performance optimization"
    ]
  },
  {
    icon: Target,
    title: "Marketing Success",
    type: 'highlight',
    description: "Led successful digital marketing campaigns for various brands.",
    highlights: [
      "Sattviko",
      "Gigstart",
      "Delhi Tourism"
    ]
  }
]

export function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon
        return (
          <motion.div
            key={achievement.title}
            className="group relative bg-card rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 space-y-4">
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                <Icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {achievement.description}
                </p>
              </div>

              {/* Links or Highlights */}
              {achievement.type === 'link' ? (
                <div className="space-y-2">
                  {achievement.links.map((link, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      className="w-full justify-start p-2 h-auto font-normal hover:bg-muted/50"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm"
                      >
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-1 font-medium text-primary">
                            {link.title}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </div>
                          <div className="text-muted-foreground text-xs mt-0.5">
                            {link.description}
                          </div>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {achievement.highlights.map((highlight, i) => (
                    <div 
                      key={i}
                      className="text-sm font-medium text-primary bg-primary/10 rounded-lg px-3 py-1.5"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hover decoration */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300 -z-10" />
          </motion.div>
        )
      })}
    </div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export function WorkExperience() {
  const experiences = [
    {
      company: "Muvi.com",
      role: "Chief Product Officer",
      period: "Apr'23-Present",
      achievements: [
        "Led product development across 5 product lines with 100+ engineers and 8+ direct PM reports",
        "Drove 30% increase in team speed and goal achievement by streamlining organizational processes",
        "Increased lead-to-customer conversion by 25% by prioritizing product performance and user experience"
      ]
    },
    {
      company: "Radio Rocket",
      role: "Co-Founder & Chief Product Officer",
      period: "Dec'21-Mar'23",
      achievements: [
        "Scaled mobile app-based radio platform to 500,000+ cumulative downloads with breakthrough user engagement:",
        "40 minutes average daily user time",
        "40%+ week-1 user retention rate",
        "Secured $500K funding from Whiteboard Capital and 12 angel investors by demonstrating strong product-market fit"
      ]
    },
    {
      company: "Classplus",
      role: "Program Manager & Product Lead",
      period: "Nov'20-Dec'21",
      achievements: [
        "Built comprehensive marketing tools for educators:",
        "Achieved 50% daily active usage through content sharing and lead generation features",
        "Scaled Classplus Lite to drive 20% of company's new customer acquisition",
        'Launched "Readymade Study Material" module, creating new revenue stream for educators'
      ]
    },
    {
      company: "Bharat Class",
      role: "Co-Founder & Product Lead",
      period: "Feb'17-Oct'20",
      achievements: [
        "Built profitable edtech startup from scratch:",
        "Scaled to 40,000+ students and 10,000+ educators across multiple cities",
        "Maintained consistent revenue growth throughout operations",
        "Led strategic transformation during Covid, pivoting from offline test prep to full-stack digital platform with white-label solutions for educators"
      ]
    },
    {
      company: "BedBathMore",
      role: "Product Head",
      period: "Apr'16-Jan'17",
      achievements: [
        "Improved Net Promoter Score by 30% through comprehensive mobile app and website revamp",
        "Reduced time-to-market by 50% by restructuring product team and realigning priorities",
        "Implemented advanced product features including web scraping, image recognition-based product suggestions"
      ]
    },
    {
      company: "Previous Roles",
      role: "Notable Highlights",
      period: "Apr'13-Mar'16",
      achievements: [
        "Toppr: Drove 1000% increase in email performance through comprehensive content & delivery system redesign",
        "Adister: Scaled to largest online notebook brand in India, managing multi-city operations"
      ]
    }
  ]

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Company and Period */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
              <p className="text-muted-foreground">{exp.period}</p>
              <p className="font-medium">{exp.role}</p>
            </div>

            {/* Achievements */}
            <div className="md:w-2/3">
              <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="pl-2">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

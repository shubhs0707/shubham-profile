'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CoreSkills() {
  const skillCategories = [
    {
      title: "Product",
      skills: [
        "First Principles Product Design",
        "End-to-End Development",
        "AI-Driven Development & Automation"
      ]
    },
    {
      title: "Leadership",
      skills: [
        "Team Management",
        "Agile Project Management",
        "Stakeholder Management"
      ]
    }
  ]

  return (
    <Card className="border-2 h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold">Core Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 sm:space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-primary">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-muted/50 hover:bg-muted rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (categoryIndex * 3 + index) * 0.1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <span className="text-sm sm:text-base font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}


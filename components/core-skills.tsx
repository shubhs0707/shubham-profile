'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CoreSkills() {
  const skills = [
    "Product Management",
    "Full Stack Development",
    "UX/UI Design",
    "Team Management",
    "Project Management",
    "Stakeholder Management",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Core Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg">
          <span className="font-semibold">Product | Full Stack hands-on experience</span>
        </p>
        <p>
          Ideation/Research → UX → UI → App/Website Development → Feedback and Optimization → Marketing
          (Video/Images/Copywriting)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-muted rounded-lg p-3 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


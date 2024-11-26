'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    name: "Quetzal",
    description: "Got the Android + iOS news app & android app built for recruitment consultants from scratch to production."
  },
  {
    name: "Sattviko",
    description: "Entire offline + online marketing (ATL+BTL) from scratch till launch."
  },
  {
    name: "Gigstart & Delhi Tourism",
    description: "Digital marketing campaigns from ideation to execution."
  },
  {
    name: "Unacademy",
    description: "ex Educator - 2 Million+ watch minutes & 20,000+ followers."
  }
]

export function OtherProjects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Other Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-muted rounded-lg p-6 hover:bg-muted/80 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


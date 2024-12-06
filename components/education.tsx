'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Education</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold">Indian Institute of Technology, Roorkee</h3>
          <p className="text-muted-foreground">2009 - 2013</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>B.Tech Metallurgical & Materials Engineering | CGPA: 7.4</li>
            <li>Department Secretary. Active in entrepreneurship, robotics, and choreography.</li>
          </ul>
        </motion.div>
      </CardContent>
    </Card>
  )
}


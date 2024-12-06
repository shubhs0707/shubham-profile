'use client'

import dynamic from 'next/dynamic'
import { useCallback, useRef, memo } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { FloatingMenu } from './floating-menu'
import { ThemeToggle } from './theme-toggle'

// Dynamically import components
const Tools = dynamic(() => import('./tools').then(mod => mod.Tools), { ssr: false })
const Education = dynamic(() => import('./education').then(mod => mod.Education), { ssr: false })
const CoreSkills = dynamic(() => import('./core-skills').then(mod => mod.CoreSkills), { ssr: false })
const WorkExperience = dynamic(() => import('./work-experience').then(mod => mod.WorkExperience), { ssr: false })
const Achievements = dynamic(() => import('./achievements').then(mod => mod.Achievements), { ssr: false })
const Contact = dynamic(() => import('./contact').then(mod => mod.Contact), { ssr: false })
const ResumeHeader = dynamic(() => import('./resume-header').then(mod => mod.ResumeHeader), { ssr: false })

const Section = memo(({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-10 md:py-20 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">
      {children}
    </div>
  </section>
))
Section.displayName = 'Section'

const SectionTitle = memo(({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
    <motion.h2 
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-base md:text-lg text-muted-foreground px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
))
SectionTitle.displayName = 'SectionTitle'

export function ResumeContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={containerRef}
        className="min-h-screen bg-background"
        initial={false}
      >
        <ResumeHeader />
        
        {/* Work Experience Section */}
        <Section className="bg-secondary/5">
          <SectionTitle 
            title="Work Experience" 
            subtitle="Leading teams and building impactful products across different domains"
          />
          <WorkExperience />
        </Section>

        {/* Skills & Tools Section */}
        <Section className="bg-primary/5">
          <SectionTitle 
            title="Skills & Expertise" 
            subtitle="Technologies and tools I work with"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <CoreSkills />
            <Tools />
          </div>
        </Section>

        {/* Achievements Section */}
        <Section>
          <SectionTitle 
            title="Achievements" 
            subtitle="Recognition and milestones"
          />
          <Achievements />
        </Section>

        {/* Education Section */}
        <Section className="bg-secondary/5">
          <SectionTitle 
            title="Education" 
            subtitle="Academic background and certifications"
          />
          <div className="max-w-3xl mx-auto">
            <Education />
          </div>
        </Section>

        {/* Contact Section */}
        <Section>
          <SectionTitle 
            title="Get in Touch" 
            subtitle="Let's connect and discuss opportunities"
          />
          <Contact />
        </Section>

        <FloatingMenu />
        <ThemeToggle />
      </motion.div>
    </LazyMotion>
  )
}

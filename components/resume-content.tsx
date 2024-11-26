'use client'

import dynamic from 'next/dynamic'
import { Button } from './ui/button'
import { Download, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useRef, useEffect, memo } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

// Dynamically import heavy components
const Tools = dynamic(() => import('./tools').then(mod => mod.Tools), { ssr: false })
const Education = dynamic(() => import('./education').then(mod => mod.Education), { ssr: false })
const CoreSkills = dynamic(() => import('./core-skills').then(mod => mod.CoreSkills), { ssr: false })
const WorkExperience = dynamic(() => import('./work-experience').then(mod => mod.WorkExperience), { ssr: false })
const OtherProjects = dynamic(() => import('./other-projects').then(mod => mod.OtherProjects), { ssr: false })
const ResumeHeader = dynamic(() => import('./resume-header').then(mod => mod.ResumeHeader), { ssr: false })

// PDF generation utilities lazy loaded
const loadPdfUtils = async () => {
  const [html2canvas, jsPDF] = await Promise.all([
    import('html2canvas'),
    import('jspdf')
  ])
  return { html2canvas: html2canvas.default, jsPDF: jsPDF.default }
}

const CardSection = memo(({ title, children, large = false }: { 
  title: string; 
  children: React.ReactNode;
  large?: boolean;
}) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
  >
    <div className={`relative rounded-xl border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${large ? 'min-h-[300px]' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative p-6 lg:p-8">
        <motion.h2 
          className="text-xl font-semibold text-foreground/90 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  </motion.div>
))
CardSection.displayName = 'CardSection'

const ThemeToggle = memo(({ theme, setTheme }: { theme: string | undefined, setTheme: (theme: string) => void }) => (
  <Button 
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    variant="outline"
    size="icon"
    className="h-10 w-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm"
  >
    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Toggle theme</span>
  </Button>
))
ThemeToggle.displayName = 'ThemeToggle'

export function ResumeContent() {
  const { theme, setTheme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseMoveThrottleRef = useRef<number>()

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    if (containerRef.current) {
      containerRef.current.style.setProperty('--mouse-x', `${x}%`)
      containerRef.current.style.setProperty('--mouse-y', `${y}%`)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (mouseMoveThrottleRef.current) {
        cancelAnimationFrame(mouseMoveThrottleRef.current)
      }
    }
  }, [handleMouseMove])

  const generatePDF = useCallback(async () => {
    try {
      const content = document.getElementById('resume-content')
      if (!content) return

      const { html2canvas, jsPDF } = await loadPdfUtils()
      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      })

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
      pdf.save('resume.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <div 
        ref={containerRef}
        className="min-h-screen bg-background"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 shadow-sm">
          <ResumeHeader />
        </div>

        {/* Header Controls */}
        <div className="fixed top-6 right-6 flex items-center gap-3 z-50">
          <motion.div whileHover={{ scale: 1.1 }} initial={false}>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} initial={false}>
            <Button 
              onClick={generatePDF}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm"
            >
              <Download className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Download PDF</span>
            </Button>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 lg:px-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-8 space-y-6 lg:space-y-8">
              <CardSection title="Work Experience" large>
                <WorkExperience />
              </CardSection>

              <CardSection title="Other Projects" large>
                <OtherProjects />
              </CardSection>
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:col-span-4 space-y-6">
              <CardSection title="Tools & Technologies">
                <Tools />
              </CardSection>

              <CardSection title="Core Skills">
                <CoreSkills />
              </CardSection>

              <CardSection title="Education">
                <Education />
              </CardSection>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

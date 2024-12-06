'use client'

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import { Download } from 'lucide-react'

export function ResumeHeader({ onDownload }: { onDownload: () => void }) {
  const contactLinks = [
    {
      id: 'email',
      href: 'mailto:shubham.july90@gmail.com',
      icon: FaEnvelope,
      text: 'shubham.july90@gmail.com',
      label: 'Email'
    },
    {
      id: 'phone',
      href: 'tel:+917718824116',
      icon: FaPhone,
      text: '+91 77188 24116',
      label: 'Phone'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/shubhamagrawal',
      icon: FaLinkedin,
      text: 'LinkedIn',
      label: 'Connect on LinkedIn'
    },
    {
      id: 'github',
      href: 'https://github.com/shubhamagrawal',
      icon: FaGithub,
      text: 'GitHub',
      label: 'View GitHub Profile'
    }
  ]

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background" />
      
      {/* Content */}
      <div className="container relative mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left column - Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              <Avatar className="w-full h-full border-4 border-primary/10 shadow-2xl">
                <AvatarImage src="/profile.png" alt="Shubham Agrawal" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
            </div>
          </motion.div>

          {/* Right column - Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold tracking-tight text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Shubham Agrawal
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl font-medium text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Full Stack Product Leader with 11+ Years Experience
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Passionate about building impactful products that solve real problems. 
                Experienced in leading teams, driving innovation, and delivering results.
              </motion.p>
            </div>

            {/* Download Resume Button */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={onDownload}
                className="flex items-center gap-2 text-base"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Contact Links */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className="group flex items-center gap-3 text-base text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  title={link.label}
                >
                  <span className="bg-background shadow-md p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                    <link.icon className="w-5 h-5" />
                  </span>
                  <span className="group-hover:underline hidden sm:inline">{link.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

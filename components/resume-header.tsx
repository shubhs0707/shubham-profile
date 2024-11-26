'use client'

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from 'react'

export function ResumeHeader() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange(latest => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const avatarSize = useTransform(scrollY, [0, 100], [80, 48])
  const headerPadding = useTransform(scrollY, [0, 100], [32, 16])
  const nameSize = useTransform(scrollY, [0, 100], [32, 24])
  const subtitleSize = useTransform(scrollY, [0, 100], [16, 14])

  const contactLinks = [
    {
      id: 'email',
      href: 'mailto:shubham.july90@gmail.com',
      icon: FaEnvelope,
      text: 'shubham.july90@gmail.com'
    },
    {
      id: 'phone',
      href: 'tel:+917718824116',
      icon: FaPhone,
      text: '+91 77188 24116'
    },
    {
      id: 'linkedin',
      href: 'https://linkedin.com/in/yourusername',
      icon: FaLinkedin,
      text: 'LinkedIn'
    },
    {
      id: 'github',
      href: 'https://github.com/yourusername',
      icon: FaGithub,
      text: 'GitHub'
    }
  ]

  return (
    <motion.div
      className={`w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      initial={false}
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex items-center gap-6"
          style={{ padding: headerPadding }}
        >
          <motion.div style={{ width: avatarSize, height: avatarSize }}>
            <Avatar className="w-full h-full border-2 border-primary/20 shadow-lg">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Shubham Agrawal" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <motion.h1 
                  className="font-bold tracking-tight text-primary"
                  style={{ fontSize: nameSize }}
                >
                  Shubham Agrawal
                </motion.h1>
                <motion.p 
                  className="font-medium text-muted-foreground mt-1"
                  style={{ fontSize: subtitleSize }}
                >
                  Software Engineer & UI/UX Enthusiast
                </motion.p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.02 }}
                    initial={false}
                  >
                    <span className="bg-muted p-2 rounded-md group-hover:bg-primary/10 transition-colors">
                      <link.icon className="w-4 h-4" />
                    </span>
                    <span className="group-hover:underline hidden sm:inline">{link.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

'use client'

import { Button } from './ui/button'
import { Download, Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function FloatingMenu() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const menuItems = [
    {
      icon: theme === 'dark' ? Sun : Moon,
      onClick: toggleTheme,
      label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
    },
    {
      icon: Download,
      onClick: () => window.print(),
      label: 'Download PDF'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute bottom-16 right-0 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="shadow-lg"
                  onClick={item.onClick}
                  title={item.label}
                >
                  <item.icon className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="default"
        size="icon"
        className="shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </div>
  )
}

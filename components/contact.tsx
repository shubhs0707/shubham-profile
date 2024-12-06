'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, MessageSquare, Send, Phone, Loader2 } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useToast } from './ui/use-toast'

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      })
      return
    }

    try {
      setIsSubmitting(true)
      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_name: "Shubham",
          reply_to: formState.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setFormState({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground">
              I'm always interested in hearing about new opportunities, collaborations, 
              or just having a great conversation about product development and technology.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a 
                  href="mailto:shubham.july90@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  shubham.july90@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <div className="space-y-1">
                  <span className="block text-muted-foreground">+91 7718824116</span>
                  <a 
                    href="https://wa.me/917718824116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Social</h4>
                <div className="space-y-1">
                  <a 
                    href="https://linkedin.com/in/shubhamagrawal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/shubhamagrawal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-card"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-card"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[150px] bg-card"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 
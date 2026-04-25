"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EnrollmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={ref} id="enroll" className="py-20 lg:py-32 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to start your enrollment process. Our team will 
              contact you with more information about available programs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Application Received!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. Our team will contact you within 24-48 hours 
                  with more information about the enrollment process.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="e.g., 0712 345 678"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Course *
                    </label>
                    <select
                      required
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select a course</option>
                      <option value="cosmetology">Cosmetology</option>
                      <option value="tailoring">Tailoring & Fashion</option>
                      <option value="construction">Construction Skills</option>
                      <option value="agribusiness">Agribusiness</option>
                      <option value="ict">ICT & Digital Skills</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about yourself
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your background, goals, and why you're interested in this training..."
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 mb-8">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    id="terms"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I understand that registration requires Ksh. 2,000 and daily training 
                    costs Ksh. 200. I agree to be contacted by ASH Global Initiatives.
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

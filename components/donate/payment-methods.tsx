"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Smartphone, Building2, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PaymentMethods() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Payment Methods
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred payment method to make a donation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* M-Pesa */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-green-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">M-Pesa</h3>
                  <p className="text-muted-foreground text-sm">Mobile Money</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Paybill Number</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg font-bold text-foreground">247247</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("247247", "paybill")}
                    >
                      {copied === "paybill" ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-secondary rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Account Number</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg font-bold text-foreground">ASH GLOBAL</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("ASH GLOBAL", "account")}
                    >
                      {copied === "account" ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Go to M-Pesa &gt; Lipa na M-Pesa &gt; Paybill &gt; Enter details above
              </p>
            </div>
          </motion.div>

          {/* Bank Transfer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Bank Transfer</h3>
                  <p className="text-muted-foreground text-sm">Co-operative Bank</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Account Name</div>
                  <div className="font-bold text-foreground">ASH Global Initiatives</div>
                </div>

                <div className="p-4 bg-secondary rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Account Number</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg font-bold text-foreground">01234567890</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("01234567890", "bank")}
                    >
                      {copied === "bank" ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-secondary rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Branch</div>
                  <div className="font-bold text-foreground">Murang&apos;a Branch</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

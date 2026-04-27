"use client"

import React from "react"
import { motion } from "motion/react"
import { Award, BadgeCheck, Download, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificateUrl = "/Print - Udyam Registration Certificate.pdf"

const CertificationSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest"
          >
            <BadgeCheck className="w-3 h-3 md:w-4 md:h-4" />
            Government Recognized
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-foreground"
          >
            Our <span className="text-primary italic text-shadow-glow">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl text-sm md:text-base px-4"
          >
            Officially registered and recognized — building trust through verified credentials.
          </motion.p>
        </div>

        {/* Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)]">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
              {/* Icon Badge */}
              <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mx-auto md:mx-0">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>

              {/* Info */}
              <div className="text-center md:text-left space-y-2">
                <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                  <FileText className="w-3 h-3" />
                  Official Document
                </div>
                <h3 className="text-xl md:text-2xl font-black text-foreground">
                  Udyam Registration Certificate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ministry of Micro, Small &amp; Medium Enterprises, Government of India
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
                <Button asChild className="gap-2 font-bold">
                  <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2 font-bold">
                  <a href={certificateUrl} download>
                    Download <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <object
                data={certificateUrl}
                type="application/pdf"
                className="w-full h-[480px] md:h-[640px]"
                aria-label="Udyam Registration Certificate"
              >
                <div className="p-8 text-center text-sm text-muted-foreground">
                  Your browser can&apos;t display the PDF inline.{" "}
                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline font-medium"
                  >
                    Open the certificate in a new tab
                  </a>
                  .
                </div>
              </object>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationSection

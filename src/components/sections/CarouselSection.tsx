"use client"

import React from "react"
import { motion } from "motion/react"
import { BadgeCheck, ShieldCheck, Star } from "lucide-react"

const trustedBrands = [
  { name: "Brand One", logo: "/WhatsApp Image 2026-01-10 at 5.37.01 PM.jpeg" },
  { name: "Brand Two", logo: "/WhatsApp Image 2026-01-10 at 5.37.00 PM.jpeg" },
  { name: "Brand Three", logo: "/WhatsApp Image 2026-01-10 at 5.37.01 PM (1).jpeg" },
  { name: "Brand Four", logo: "/WhatsApp Image 2026-01-10 at 5.37.02 PM.jpeg" },
  { name: "Brand Five", logo: "/WhatsApp Image 2026-01-10 at 5.37.02 PM (1).jpeg" },
  { name: "Brand Six", logo: "/WhatsApp Image 2026-01-10 at 5.37.02 PM (2).jpeg" },
  { name: "Brand Seven", logo: "/WhatsApp Image 2026-01-10 at 5.37.02 PM (3).jpeg" },
]

const LogoCard = ({ brand }: { brand: typeof trustedBrands[0] }) => (
  <div className="relative shrink-0 w-36 md:w-56 h-24 md:h-32 flex items-center justify-center group mx-3 md:mx-8">
    {/* Glass Background Effect */}
    <div className="absolute inset-0 bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl transition-all duration-300 md:group-hover:bg-card/80 md:group-hover:border-primary/30 md:group-hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]" />
    
    {/* Logo Image Logic: 
        - Mobile: grayscale-0 (Full Color), opacity-100
        - Desktop (md): grayscale (B&W), opacity-50, turns to color on group-hover
    */}
    <img 
      src={brand.logo} 
      alt={brand.name} 
      className="relative z-10 max-w-[70%] max-h-[50%] object-contain transition-all duration-500 
                 grayscale-0 opacity-100 
                 md:grayscale md:opacity-50 md:contrast-125 
                 md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110"
    />
  </div>
)

const CarouselSection = () => {
  // Triple the items to ensure the marquee is seamless on all screen sizes
  const duplicatedBrands = [...trustedBrands, ...trustedBrands, ...trustedBrands]

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      {/* Background Glows for Brand Consistency */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="container px-4 mx-auto mb-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest"
          >
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
            Brand Partners
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-foreground"
          >
            Our <span className="text-primary italic text-shadow-glow">Trusted</span> Brands
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground max-w-xl text-sm md:text-base px-4"
          >
            Powering the digital presence of the next generation of creators and startups.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex items-center group/marquee">
        {/* Left/Right Fades to hide edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />

        <motion.div 
          className="flex whitespace-nowrap py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, 
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <LogoCard key={idx} brand={brand} />
          ))}
        </motion.div>
      </div>

      {/* Trust Indicator Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 opacity-80 px-6"
      >
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-[10px] md:text-xs font-bold text-foreground uppercase tracking-tighter">Premium Service</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          <BadgeCheck className="w-4 h-4 text-primary" />
          <span className="text-[10px] md:text-xs font-bold text-foreground uppercase tracking-tighter">Growth Guaranteed</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          <div className="flex -space-x-1">
             {[...Array(3)].map((_, i) => (
               <div key={i} className="w-5 h-5 rounded-full border border-background bg-primary/20 text-[8px] flex items-center justify-center font-bold text-primary">
                 ✓
               </div>
             ))}
          </div>
          <span className="text-[10px] md:text-xs font-bold text-foreground uppercase tracking-tighter">50+ Brands Scaled</span>
        </div>
      </motion.div>
    </section>
  )
}

export default CarouselSection
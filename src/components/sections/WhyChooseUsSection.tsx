"use client"

import React from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Shield, Pencil, Settings2, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Zap className="size-6" />,
    title: "Fast Delivery",
    description: "Rapid turnarounds without compromising on quality or brand standards."
  },
  {
    icon: <Cpu className="size-6" />,
    title: "Powerful Results",
    description: "Algorithmic strategies designed for maximum reach and high conversion."
  },
  {
    icon: <Shield className="size-6" />,
    title: "Secure Handling",
    description: "Enterprise-grade safety and privacy for your valuable digital assets."
  },
  {
    icon: <Pencil className="size-6" />,
    title: "Brand Alignment",
    description: "Content that speaks your brand's unique language and core values."
  },
  {
    icon: <Settings2 className="size-6" />,
    title: "Transparent Flow",
    description: "Full visibility into your growth metrics, strategy, and daily performance."
  },
  {
    icon: <Sparkles className="size-6" />,
    title: "AI Optimization",
    description: "Leveraging cutting-edge tools for trend-ready and viral performance."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section - High Contrast Black & White */}
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-8 leading-[1.1]"
          >
            Why Brands Choose <br />
            <span className="bg-black text-white px-3 py-1 inline-block transform -rotate-1 italic">Social_Buzzz.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 font-semibold leading-relaxed max-w-2xl"
          >
            We simplify social growth. No fluff, just high-performance 
            strategies that put your brand at the center of the conversation.
          </motion.p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              {/* Icon Container - Inverts on hover */}
              <div className="mb-6 p-3 w-fit rounded-xl bg-zinc-100 text-black group-hover:bg-black group-hover:text-white transition-all duration-300 border border-transparent group-hover:border-black">
                {feature.icon}
              </div>
              
              <h3 className="text-base font-bold uppercase tracking-[0.2em] text-black mb-3">
                {feature.title}
              </h3>
              
              {/* Bold Black Accent Line */}
              <div className="w-10 h-[3px] bg-black mb-5 group-hover:w-20 transition-all duration-500" />
              
              <p className="text-zinc-600 text-sm leading-relaxed font-bold max-w-[280px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-32 w-full h-[2px] bg-black/5" />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
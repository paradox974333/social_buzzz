"use client"

import React from "react"
import { motion } from "motion/react"
import { TrendingUp, Eye, CheckCircle, BarChart3, ArrowUpRight } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const growthData = [
  { day: 'D1', followers: 0 },
  { day: 'D10', followers: 1500 },
  { day: 'D20', followers: 3800 },
  { day: 'D30', followers: 6200 },
  { day: 'D40', followers: 8800 },
  { day: 'D46', followers: 10000 },
]

const stats = [
  { label: 'Days to 10K', value: '46', sub: 'Record speed', icon: TrendingUp },
  { label: 'Avg. Views', value: '20K+', sub: 'Viral consistency', icon: Eye },
  { label: 'Success Rate', value: '100%', sub: 'Client satisfaction', icon: CheckCircle },
  { label: 'Assets', value: '500+', sub: 'Premium content', icon: BarChart3 },
]

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Refined Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Minimalist */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
            >
              Proven Impact
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-tight font-bold tracking-tighter"
            >
              The Numbers Behind <br />
              <span className="text-muted-foreground/50">Our Strategy.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground max-w-xs text-sm leading-relaxed"
          >
            We combine data-driven precision with creative excellence to deliver growth that isn't just fast—it's sustainable.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Growth Chart Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-card/30 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  Growth Velocity <ArrowUpRight className="w-4 h-4 text-primary" />
                </h3>
                <p className="text-xs text-muted-foreground">Follower accumulation over 46 days</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-primary">+10,000</span>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">New Followers</p>
              </div>
            </div>

            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="followers" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorPrimary)" 
                    animationDuration={2000}
                  />
                  <XAxis dataKey="day" hide />
                  <YAxis hide domain={[0, 'auto']} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Quick Stats Column */}
          <div className="md:col-span-4 grid grid-cols-1 gap-4">
            {stats.slice(0, 2).map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/30 border border-white/5 rounded-3xl p-6 flex items-center justify-between group hover:border-primary/20 transition-colors"
              >
                <div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{stat.label}</p>
                  <h4 className="text-3xl font-bold tracking-tighter">{stat.value}</h4>
                  <p className="text-[10px] text-primary/70 mt-1 font-medium italic">{stat.sub}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-4 bg-primary rounded-3xl p-8 flex flex-col justify-between text-primary-foreground group relative overflow-hidden"
          >
            {/* Abstract Decorative Pattern */}
            <div className="absolute top-0 right-0 opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <TrendingUp size={180} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <CheckCircle className="mb-4" size={32} />
              <h3 className="text-2xl font-bold tracking-tight">Client Satisfaction</h3>
            </div>
            <div className="relative z-10">
              <span className="text-6xl font-black italic">100%</span>
              <p className="text-sm opacity-80 mt-2 font-medium">Based on 50+ managed accounts</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-8 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">The Viral Factor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our content doesn't just look good—it performs. We leverage current trends and psychological triggers to ensure your brand stays at the top of the feed.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold">500</div>
                <p className="text-[10px] mt-2 text-muted-foreground uppercase">Reels</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold">20M</div>
                <p className="text-[10px] mt-2 text-muted-foreground uppercase">Reach</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Instagram, TrendingUp, Users, Eye, CheckCircle, BarChart3 } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";

// --- Data Types & Configuration ---
interface Achievement {
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: React.ElementType;
}

const achievements: Achievement[] = [
  {
    title: 'Days to 10K',
    value: 46,
    suffix: '',
    description: 'Record breaking speed',
    icon: TrendingUp
  },
  {
    title: 'Average Views',
    value: 20,
    suffix: 'K+',
    description: 'Consistent viral reach',
    icon: Eye
  },
  {
    title: 'Client Satisfaction',
    value: 100,
    suffix: '%',
    description: '5-Star reviews',
    icon: CheckCircle
  },
  {
    title: 'Content Created',
    value: 500,
    suffix: '+',
    description: 'Premium assets delivered',
    icon: BarChart3
  }
];

// Mock Data for the Charts
const growthData = [
  { day: 'Day 1', followers: 0 },
  { day: 'Day 10', followers: 1200 },
  { day: 'Day 20', followers: 3500 },
  { day: 'Day 30', followers: 5800 },
  { day: 'Day 40', followers: 8900 },
  { day: 'Day 46', followers: 10000 },
];

const engagementData = [
  { name: 'Reels', value: 85 },
  { name: 'Posts', value: 65 },
  { name: 'Stories', value: 45 },
];

// --- Helper Components ---

const CountUpAnimation = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg shadow-xl">
        <p className="text-zinc-400 text-sm mb-1">{label}</p>
        <p className="text-indigo-400 font-bold text-lg">
          {payload[0].value.toLocaleString()} {payload[0].name === 'followers' ? 'Followers' : '% Reach'}
        </p>
      </div>
    );
  }
  return null;
};

// --- Main Component ---

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-black text-zinc-100 overflow-hidden relative">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            Performance Metrics
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We don't just create content; we engineer growth. Our numbers reflect the consistent value we deliver to our clients.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-zinc-800/50 group-hover:bg-indigo-500/20 transition-colors">
                    <achievement.icon className="w-6 h-6 text-zinc-400 group-hover:text-indigo-400" />
                  </div>
                  <CountUpAnimation end={achievement.value} suffix={achievement.suffix} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                    <p className="text-sm text-zinc-500 mt-1">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Section: Graphs & Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Featured Success Story Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-zinc-900 to-black border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-indigo-600/5 blur-[80px] rounded-full pointer-events-none" />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-pink-600 rounded-lg text-white">
                    <Instagram size={20} />
                  </div>
                  <span className="text-sm font-medium text-pink-500">Case Study</span>
                </div>
                <CardTitle className="text-2xl text-white">@shanta_kadlis</CardTitle>
                <CardDescription className="text-zinc-400">
                  From 0 to 10K followers in record time.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/30">
                    <div className="text-2xl font-bold text-white">46</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Days</div>
                  </div>
                  <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/30">
                    <div className="text-2xl font-bold text-emerald-400">+10,000</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">New Followers</div>
                  </div>
                </div>
                
                {/* Mini Bar Chart for Engagement Breakdown */}
                <div className="h-48 w-full mt-4">
                  <p className="text-sm text-zinc-400 mb-4">Engagement Distribution</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={engagementData}>
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {engagementData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#6366f1' : '#3f3f46'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Main Growth Chart */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  Growth Trajectory
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Visualizing the exponential growth curve over the campaign period.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] md:h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <XAxis 
                        dataKey="day" 
                        stroke="#71717a" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#71717a" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(value) => `${value / 1000}k`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area 
                        type="monotone" 
                        dataKey="followers" 
                        stroke="#6366f1" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorFollowers)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
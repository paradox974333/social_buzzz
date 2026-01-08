import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";

interface Achievement {
  title: string;
  value: number;
  suffix: string;
  description: string;
}

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
    <span ref={ref} className="text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const achievements: Achievement[] = [
  {
    title: 'Days to 10K',
    value: 46,
    suffix: '',
    description: 'Shanta Kadlis Collection milestone'
  },
  {
    title: 'Average Views',
    value: 20,
    suffix: 'K+',
    description: 'Across all client accounts'
  },
  {
    title: 'Client Satisfaction',
    value: 100,
    suffix: '%',
    description: 'Happy customers and growing'
  },
  {
    title: 'Content Created',
    value: 500,
    suffix: '+',
    description: 'High-quality posts and reels'
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-accent">
                <CardContent className="p-0 space-y-4">
                  <CountUpAnimation end={achievement.value} suffix={achievement.suffix} />
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl">Featured Success Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Instagram className="h-12 w-12 text-primary" />
                <div className="text-left">
                  <h4 className="text-2xl font-bold">@shanta_kadlis_collection</h4>
                  <p className="text-muted-foreground">Reached 10K followers in just 46 days!</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">46</div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25K</div>
                  <div className="text-sm text-muted-foreground">Avg Reach</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;

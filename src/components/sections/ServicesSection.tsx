import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Play, Code, CheckCircle } from "lucide-react";
import type { ReactNode } from "react";

interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: 'Complete Account Management',
    description: 'Full-service social media management for your brand',
    price: '₹6,000/month',
    features: [
      '6 high-quality reels with professional voice-over',
      'Festival posters for every occasion',
      'Regular brand-related posts',
      'Consistent visibility and engagement',
      'Strong brand presence building'
    ],
    icon: <Users className="h-8 w-8" />
  },
  {
    title: 'Clothing Brand Management',
    description: 'Specialized content creation for fashion brands',
    price: '₹500/video',
    features: [
      'self shoot reel',
      'Professional video editing',
      'Trending music integration',
      'Relevant hashtag research',
      'Content shooting guidance',
      'Account access required'
    ],
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    title: 'Full Production Service',
    description: 'Complete content creation with our team',
    price: '₹2,000/video',
    features: [
      'Professional cameraman',
      'On-camera talent provided',
      'Product showcase expertise',
      'Complete video production',
      'No need to appear on camera'
    ],
    icon: <Play className="h-8 w-8" />
  },
  {
    title: 'Website Development & SEO',
    description: 'Modern websites with search optimization',
    price: 'Custom Pricing',
    features: [
      'pricing depends on requirements',
      'Modern tech stack',
      'SEO optimization',
      'Domain setup',
      'Responsive design',
      'Pricing varies by requirements'
    ],
    icon: <Code className="h-8 w-8" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive social media solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="pt-2">
                    <Badge variant="secondary" className="text-lg px-3 py-1 bg-primary/10 text-primary">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

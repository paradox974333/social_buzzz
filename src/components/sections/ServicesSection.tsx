"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Assuming you have this, otherwise use standard <button>
import { Users, TrendingUp, Play, Code, CheckCircle, Phone, X } from "lucide-react";
import type { ReactNode } from "react";

// --- Types ---
interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: ReactNode;
}

// --- Data ---
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
      'Self shoot reel',
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
      'Pricing depends on requirements',
      'Modern tech stack',
      'SEO optimization',
      'Domain setup',
      'Responsive design',
      'Pricing varies by requirements'
    ],
    icon: <Code className="h-8 w-8" />
  }
];

// --- Sub-Component for the Contact Actions ---
const CardContactActions = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:9110441250';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919110441250', '_blank');
  };

  return (
    <div className="mt-auto h-[52px] relative"> 
      {/* Fixed height container to prevent layout jump */}
      <AnimatePresence mode="wait">
        {!showOptions ? (
          <motion.div
            key="contact-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full"
          >
            <Button
              onClick={() => setShowOptions(true)}
              className="w-full py-6 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 shadow-sm text-base"
            >
              Contact Us
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="options-btns"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex gap-2 w-full"
          >
            <Button
              onClick={handleCall}
              variant="outline"
              className="flex-1 py-6 rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              className="flex-1 py-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
               <svg
                viewBox="0 0 24 24"
                className="mr-2 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat
            </Button>
            
            {/* Close/Reset button (Optional, click outside to reset handled by UX flow mostly, but here for clarity) */}
            <Button
               variant="ghost" 
               size="icon" 
               onClick={(e) => { e.stopPropagation(); setShowOptions(false); }}
               className="h-12 w-8 rounded-full text-muted-foreground hover:bg-muted"
            >
               <X className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---
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
              className="flex"
            >
              <Card className="flex flex-col h-full w-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
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
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Replaced the old <a> tag with the new Actions Component */}
                  <CardContactActions />

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
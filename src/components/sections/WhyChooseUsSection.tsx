import { Zap, Cpu, Shield, Pencil, Settings2, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Zap className="size-4 text-primary" />,
    title: "Fast Delivery",
    description: "Quick turnaround times for content creation and account management."
  },
  {
    icon: <Cpu className="size-4 text-primary" />,
    title: "Powerful Results",
    description: "Data-driven strategies that boost engagement and follower growth."
  },
  {
    icon: <Shield className="size-4 text-primary" />,
    title: "Account Security",
    description: "Safe and secure handling of your social media accounts."
  },
  {
    icon: <Pencil className="size-4 text-primary" />,
    title: "Custom Content",
    description: "Tailored content that matches your brand identity perfectly."
  },
  {
    icon: <Settings2 className="size-4 text-primary" />,
    title: "Full Control",
    description: "Complete transparency and control over your social media presence."
  },
  {
    icon: <Sparkles className="size-4 text-primary" />,
    title: "AI-Enhanced",
    description: "Modern tools and AI assistance for optimal content performance."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Choose Social Buzzz</h2>
          <p className="text-muted-foreground">We combine creativity, technology, and strategy to deliver exceptional results that make your brand stand out.</p>
        </div>

        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                {feature.icon}
                <h3 className="text-sm font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

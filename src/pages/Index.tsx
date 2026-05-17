import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TeamSection from "@/components/sections/TeamSection";
import FooterSection from "@/components/sections/FooterSection";
import FloatingContactButton from "@/components/FloatingContactButton";
import Navbar from "@/components/Navbar";
import CarouselSection from "@/components/sections/CarouselSection";
import CertificationSection from "@/components/sections/CertificationSection";
import GeminiChatBot from "@/components/GeminiChatBot";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Social Buzzz",
  url: "https://socialbuzzz18.in",
  logo: "https://socialbuzzz18.in/IMG_0210.JPG",
  description:
    "Professional social media management, content creation, video production, Google & Meta ads, and web development agency.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9110441250",
    contactType: "customer service",
  },
  sameAs: [
    "https://instagram.com/social_buzzz18",
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Social Buzzz — Social Media Marketing &amp; Growth Agency</title>
        <meta name="description" content="Professional social media management, content creation, video production, Google &amp; Meta ads, and web development. Make your brand viral with Social Buzzz." />
        <meta property="og:title" content="Social Buzzz — Social Media Marketing &amp; Growth Agency" />
        <meta property="og:description" content="Professional social media management, content creation, video production, Google &amp; Meta ads, and web development. Make your brand viral." />
        <meta property="og:url" content="https://socialbuzzz18.in/" />
        <meta name="twitter:title" content="Social Buzzz — Social Media Marketing &amp; Growth Agency" />
        <meta name="twitter:description" content="Professional social media management, content creation, video production, Google &amp; Meta ads, and web development." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
      <Navbar />
      <HeroSection />
      
      {/* Main Content Area */}
      <div className="relative z-20 bg-background">
        <ServicesSection />
        <CarouselSection />
        <WhyChooseUsSection />
        <TeamSection />  {/* <--- Added here */}
        <FooterSection />
      </div>
      <GeminiChatBot />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
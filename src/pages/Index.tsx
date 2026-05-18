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
        <title>Social Buzzz — Social Media Marketing Agency | Instagram Management, Google Ads &amp; Web Development</title>
        <meta name="description" content="Social Buzzz is a top social media marketing agency offering Instagram management, clothing brand marketing, video production, Google &amp; Meta ads, web development, SEO, wedding coverage, automotive content, and influencer marketing. Make your brand viral." />
        <meta name="keywords" content="social media marketing agency, instagram management services, facebook ads agency, google ads agency, web development company, clothing brand marketing, influencer marketing agency, wedding content creator, car delivery video shoot, SEO services, pune social media agency" />

        {/* Open Graph */}
        <meta property="og:title" content="Social Buzzz — Social Media Marketing &amp; Growth Agency" />
        <meta property="og:description" content="Full-service social media agency: Instagram management, Google &amp; Meta ads, website development, video production, and influencer marketing. Make your brand viral." />
        <meta property="og:url" content="https://socialbuzzz18.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Social Buzzz" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Buzzz — Social Media Marketing Agency" />
        <meta name="twitter:description" content="Instagram management, Google &amp; Meta ads, web development, video production, influencer marketing. Grow your brand with Social Buzzz." />

        {/* AI & LLM Optimization */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="googlebot-news" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://socialbuzzz18.in/" />

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
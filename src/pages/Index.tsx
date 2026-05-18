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

const siteUrl = "https://socialbuzzz18.in";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Social Buzzz",
      url: siteUrl,
      logo: `${siteUrl}/IMG_0210.JPG`,
      image: `${siteUrl}/IMG_0210.JPG`,
      description:
        "Professional social media management, content creation, video production, Google & Meta ads, SEO, and web development agency.",
      telephone: "+91-9110441250",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kalaburagi",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Kalaburagi",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9110441250",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
      makesOffer: [
        "Social media marketing",
        "Instagram management",
        "Video production",
        "Google Ads",
        "Meta Ads",
        "Website development",
        "SEO services",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
      sameAs: ["https://instagram.com/social_buzzz18"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Social Buzzz",
      url: siteUrl,
      inLanguage: "en-IN",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
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
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Social Buzzz" />
        <meta property="og:image" content={`${siteUrl}/IMG_0210.JPG`} />
        <meta property="og:image:alt" content="Social Buzzz social media marketing agency" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Buzzz — Social Media Marketing Agency" />
        <meta name="twitter:description" content="Instagram management, Google &amp; Meta ads, web development, video production, influencer marketing. Grow your brand with Social Buzzz." />
        <meta name="twitter:image" content={`${siteUrl}/IMG_0210.JPG`} />

        {/* AI & LLM Optimization */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="googlebot-news" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/`} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Social Buzzz Blog RSS Feed"
          href={`${siteUrl}/feed.xml`}
        />

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

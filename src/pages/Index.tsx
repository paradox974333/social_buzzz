import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TeamSection from "@/components/sections/TeamSection"; // <--- Import here
import FooterSection from "@/components/sections/FooterSection";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      
      {/* Main Content Area */}
      <div className="relative z-20 bg-background">
        <ServicesSection />
        <ClientsSection />
        <AchievementsSection />
        <WhyChooseUsSection />
        <TeamSection />  {/* <--- Added here */}
        <FooterSection />
      </div>
      
      <FloatingContactButton />
    </div>
  );
};

export default Index;
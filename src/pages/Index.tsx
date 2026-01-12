import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TeamSection from "@/components/sections/TeamSection"; // <--- Import here
import FooterSection from "@/components/sections/FooterSection";
import FloatingContactButton from "@/components/FloatingContactButton";
import CarouselSection from "@/components/sections/CarouselSection";
import BotPenguin from "@/components/BotPenguin";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      
      {/* Main Content Area */}
      <div className="relative z-20 bg-background">
        <ServicesSection />
        <ClientsSection />
        <CarouselSection /> 
        <AchievementsSection />
        <WhyChooseUsSection />
        <TeamSection />  {/* <--- Added here */}
        <FooterSection />
      </div>
      <BotPenguin />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
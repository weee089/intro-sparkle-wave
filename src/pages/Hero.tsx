import { Suspense } from 'react';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { WeeWebChat } from '@/components/ui/v0-ai-chat';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-[#FFF5F0] overflow-hidden">
        {/* Animated Gradient Background */}
        <AnimatedGradientBackground
          startingGap={120}
          Breathing={true}
          gradientColors={[
            "#FFF5F0",
            "#FFE8E0",
            "#FFD5C8",
            "#FFC4B0",
            "#FFB398",
            "#FFA280",
            "#FFF5F0"
          ]}
          gradientStops={[0, 20, 35, 50, 65, 80, 100]}
          animationSpeed={0.015}
          breathingRange={8}
          topOffset={0}
        />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent z-10" />

        {/* Chat Interface */}
        <div className="relative z-20 flex items-center justify-center min-h-screen px-4 pt-16">
          <WeeWebChat />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Hero;

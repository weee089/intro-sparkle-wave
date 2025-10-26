import { Suspense } from 'react';
import InteractiveShader from '@/components/ui/aurora-shader';
import { WeeWebChat } from '@/components/ui/v0-ai-chat';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-[#F8F6F3] overflow-hidden">
        {/* Aurora Shader Background - Very Light */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Suspense fallback={
            <div className="h-screen w-full bg-gradient-to-br from-[#F8F6F3] via-primary/5 to-[#F8F6F3]" />
          }>
            <InteractiveShader
              flowSpeed={0.2}
              colorIntensity={0.3}
              noiseLayers={3}
              mouseInfluence={0.1}
            />
          </Suspense>
        </div>

        {/* Overlay gradient - Very light skin tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F3]/95 via-[#F5F3F0]/80 to-[#F8F6F3]/95 z-10" />
        
        {/* Subtle shadow overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.03)] z-10" />

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

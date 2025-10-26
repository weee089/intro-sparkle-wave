import { Suspense } from 'react';
import InteractiveShader from '@/components/ui/aurora-shader';
import { WeeWebChat } from '@/components/ui/v0-ai-chat';
import Navbar from '@/components/Navbar';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Aurora Shader Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Suspense fallback={
            <div className="h-screen w-full bg-gradient-to-br from-background via-primary/10 to-background" />
          }>
            <InteractiveShader
              flowSpeed={0.3}
              colorIntensity={0.8}
              noiseLayers={4}
              mouseInfluence={0.2}
            />
          </Suspense>
        </div>

        {/* Overlay gradient for better readability with subtle shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-10" />
        
        {/* Subtle shadow overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] z-10" />

        {/* Chat Interface */}
        <div className="relative z-20 flex items-center justify-center min-h-screen px-4 pt-16">
          <WeeWebChat />
        </div>
      </div>
    </>
  );
};
export default Hero;
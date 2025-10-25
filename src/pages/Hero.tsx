import { Suspense } from 'react';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';
import { WeeWebChat } from '@/components/ui/v0-ai-chat';
import weewebLogo from '@/assets/weeweb-logo.png';

// Using reliable, smaller Unsplash images with explicit dimensions
const heroImages = [{
  src: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&h=600&fit=crop',
  alt: 'Abstract 1'
}, {
  src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop',
  alt: 'Abstract 2'
}, {
  src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop',
  alt: 'Abstract 3'
}, {
  src: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&h=600&fit=crop',
  alt: 'Abstract 4'
}, {
  src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop',
  alt: 'Abstract 5'
}, {
  src: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=600&fit=crop',
  alt: 'Abstract 6'
}, {
  src: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&h=600&fit=crop',
  alt: 'Abstract 7'
}, {
  src: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&h=600&fit=crop',
  alt: 'Abstract 8'
}];
const Hero = () => {
  return <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <img src={weewebLogo} alt="WeeWeb" className="h-12 md:h-16" />
      </div>

      {/* 3D Gallery Background with Suspense */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-screen w-full bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center">
            <div className="text-muted-foreground text-sm">Loading gallery...</div>
          </div>}>
          <InfiniteGallery images={heroImages} speed={1.2} visibleCount={12} className="h-screen w-full" fadeSettings={{
          fadeIn: {
            start: 0.05,
            end: 0.25
          },
          fadeOut: {
            start: 0.4,
            end: 0.43
          }
        }} blurSettings={{
          blurIn: {
            start: 0.0,
            end: 0.1
          },
          blurOut: {
            start: 0.4,
            end: 0.43
          },
          maxBlur: 8.0
        }} />
        </Suspense>
      </div>

      {/* Overlay gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 z-10" />

      {/* Chat Interface */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <WeeWebChat />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-10 left-0 right-0 text-center z-20">
        
        <p className="text-xs text-muted-foreground/60 mt-1">
          Auto-play resumes after 3 seconds of inactivity
        </p>
      </div>
    </div>;
};
export default Hero;
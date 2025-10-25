import InfiniteGallery from '@/components/ui/3d-gallery-photography';
import { WeeWebChat } from '@/components/ui/v0-ai-chat';
import weewebLogo from '@/assets/weeweb-logo.png';

const heroImages = [
  { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80', alt: 'Character 1' },
  { src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80', alt: 'Character 2' },
  { src: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=1920&q=80', alt: 'Character 3' },
  { src: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=1920&q=80', alt: 'Character 4' },
  { src: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=1920&q=80', alt: 'Character 5' },
  { src: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=80', alt: 'Character 6' },
  { src: 'https://images.unsplash.com/photo-1620207458838-bded104a6328?w=1920&q=80', alt: 'Character 7' },
  { src: 'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=1920&q=80', alt: 'Character 8' },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <img src={weewebLogo} alt="WeeWeb" className="h-12 md:h-16" />
      </div>

      {/* 3D Gallery Background */}
      <div className="absolute inset-0 z-0">
        <InfiniteGallery
          images={heroImages}
          speed={1.2}
          visibleCount={12}
          className="h-screen w-full"
          fadeSettings={{
            fadeIn: { start: 0.05, end: 0.25 },
            fadeOut: { start: 0.4, end: 0.43 },
          }}
          blurSettings={{
            blurIn: { start: 0.0, end: 0.1 },
            blurOut: { start: 0.4, end: 0.43 },
            maxBlur: 8.0,
          }}
        />
      </div>

      {/* Overlay gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 z-10" />

      {/* Chat Interface */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <WeeWebChat />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-10 left-0 right-0 text-center z-20">
        <p className="text-sm text-muted-foreground font-medium">
          Use mouse wheel, arrow keys, or touch to navigate
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          Auto-play resumes after 3 seconds of inactivity
        </p>
      </div>
    </div>
  );
};

export default Hero;

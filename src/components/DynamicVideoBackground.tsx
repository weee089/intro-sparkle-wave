import { useEffect, useRef, useState } from 'react';

interface DynamicVideoBackgroundProps {
  videoSrc: string;
  className?: string;
}

export const DynamicVideoBackground = ({ videoSrc, className = '' }: DynamicVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  // Track scroll position for color shifts
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create seamless infinite video by reversing playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (isReversing) {
        if (video.currentTime <= 0.1) {
          setIsReversing(false);
          video.playbackRate = 1.0;
        }
      } else {
        if (video.currentTime >= video.duration - 0.1) {
          setIsReversing(true);
          video.playbackRate = -1.0;
        }
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [isReversing]);

  // Calculate dynamic colors based on scroll
  const getColorOverlay = () => {
    const colors = [
      { r: 59, g: 130, b: 246, a: 0.1 },   // blue
      { r: 139, g: 92, b: 246, a: 0.12 },  // purple
      { r: 236, g: 72, b: 153, a: 0.1 },   // pink
      { r: 249, g: 115, b: 22, a: 0.08 },  // orange
      { r: 34, g: 197, b: 94, a: 0.08 },   // green
    ];

    const colorIndex = Math.floor(scrollProgress * (colors.length - 1));
    const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1);
    const colorProgress = (scrollProgress * (colors.length - 1)) - colorIndex;

    const currentColor = colors[colorIndex];
    const nextColor = colors[nextColorIndex];

    const r = Math.round(currentColor.r + (nextColor.r - currentColor.r) * colorProgress);
    const g = Math.round(currentColor.g + (nextColor.g - currentColor.g) * colorProgress);
    const b = Math.round(currentColor.b + (nextColor.b - currentColor.b) * colorProgress);
    const a = currentColor.a + (nextColor.a - currentColor.a) * colorProgress;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  return (
    <div className={`fixed inset-0 w-full h-full z-0 pointer-events-none ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover opacity-60 scale-110 transition-opacity duration-1000"
        style={{ filter: 'blur(1px)' }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Dynamic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/95 transition-opacity duration-700" />
      
      {/* Dynamic color overlay based on scroll */}
      <div 
        className="absolute inset-0 mix-blend-overlay transition-colors duration-1000 ease-out"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${getColorOverlay()} 0%, transparent 70%)`
        }}
      />
      
      {/* Secondary color layer for depth */}
      <div 
        className="absolute inset-0 mix-blend-color-dodge opacity-30 transition-all duration-1000"
        style={{ 
          background: `linear-gradient(${scrollProgress * 360}deg, ${getColorOverlay()}, transparent)`
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)]" />
      
      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
};

import { WeeWebChat } from '@/components/ui/v0-ai-chat';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { GradientHeading } from '@/components/ui/gradient-heading';
import {
  IconOpenAI,
  IconAnthropic,
  IconGoogleDeepMind,
  IconFigma,
  IconFramer,
  IconCursor,
  IconBolt,
  IconLovable,
  IconReplit,
  IconSupabase,
  IconFirebase,
  IconTrae,
  IconWarp,
  IconVercel,
  IconNetlify
} from '@/components/CompanyIcons';

const logos = [
  { name: "OpenAI", id: 1, img: IconOpenAI },
  { name: "Anthropic", id: 2, img: IconAnthropic },
  { name: "Google DeepMind", id: 3, img: IconGoogleDeepMind },
  { name: "Figma", id: 4, img: IconFigma },
  { name: "Framer", id: 5, img: IconFramer },
  { name: "Cursor", id: 6, img: IconCursor },
  { name: "Bolt", id: 7, img: IconBolt },
  { name: "Lovable", id: 8, img: IconLovable },
  { name: "Replit", id: 9, img: IconReplit },
  { name: "Supabase", id: 10, img: IconSupabase },
  { name: "Firebase", id: 11, img: IconFirebase },
  { name: "Trae", id: 12, img: IconTrae },
  { name: "Warp", id: 13, img: IconWarp },
  { name: "Vercel", id: 14, img: IconVercel },
  { name: "Netlify", id: 15, img: IconNetlify },
];

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden">
        <AnimatedGradientBackground 
          startingGap={125}
          Breathing={true}
          gradientColors={[
            "#000000",
            "#0A0A0A",
            "#1a1a3e",
            "#2563eb",
            "#3b82f6",
            "#ec4899",
            "#f97316",
            "#fb923c"
          ]}
          gradientStops={[0, 20, 35, 50, 60, 70, 85, 100]}
          animationSpeed={0.02}
          breathingRange={5}
          topOffset={0}
        />
        
        {/* Chat Interface */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
          <WeeWebChat />
        </div>
      </div>

      {/* Logo Carousel Section */}
      <div className="relative py-24 bg-[#0f0f0f] border-y border-white/5">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8 px-4">
          <div className="text-center">
            <p className="text-white/60 text-sm mb-2">
              The best are already here
            </p>
            <h2 className="text-white text-4xl font-black">
              Trusted by Leading Companies
            </h2>
          </div>
          <LogoCarousel columnCount={3} logos={logos} />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Hero;

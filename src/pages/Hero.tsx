import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import weewebLogo from '@/assets/weeweb-logo.png';
import { Figma, Github } from "lucide-react";
import { PromptInputBox } from '@/components/ui/ai-prompt-box';
import { useTypingPlaceholder } from '@/hooks/use-typing-placeholder';
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

interface ImportButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ImportButton({ icon, label }: ImportButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-all duration-300"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function BuilderInput() {
  const navigate = useNavigate();
  const placeholder = useTypingPlaceholder();

  const handleSend = (message: string) => {
    if (message.trim()) {
      const systemPrompt = `User request: ${message}
Build a dynamic, AI-powered workspace that includes automated data visualization, collaborative tools, and deployment-ready features.
Use clean design with WeeOS branding, ensure intuitive navigation, and optimized performance.`;
      navigate('/builder', { state: { prompt: systemPrompt } });
    }
  };

  return (
    <PromptInputBox
      onSend={handleSend}
      placeholder={placeholder || "Describe what you want to build..."}
      className="w-full"
    />
  );
}

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
        
      {/* Builder Interface */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="w-full max-w-6xl mx-auto space-y-12 md:space-y-16 py-20">
          
          {/* Hero Heading with Inline Logo */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
                Build anything with{" "}
              </span>
              <span className="inline-flex items-center gap-2 md:gap-3">
                <img src={weewebLogo} alt="WeeWeb" className="h-8 sm:h-10 md:h-12 lg:h-16 inline-block" />
                <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
                  WeeWeb
                </span>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto">
              Transform your ideas into reality with AI-powered development
            </p>
          </div>

          {/* Input Area */}
          <div className="w-full max-w-4xl mx-auto space-y-4">
            <BuilderInput />
            
            {/* Import Buttons */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-sm text-white/40">or import from</span>
              <ImportButton icon={<Figma className="w-4 h-4" />} label="Figma" />
              <ImportButton icon={<Github className="w-4 h-4" />} label="GitHub" />
            </div>
          </div>
        </div>
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
      <ScrollToTop />
    </>
  );
};
export default Hero;

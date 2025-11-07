import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { AnimatedTagline } from '@/components/ui/animated-tagline';
import { FloatingOrbs } from '@/components/ui/floating-orbs';
import weewebLogo from '@/assets/weeweb-logo.png';
import { ImageIcon, FileUp, Figma, MonitorIcon, CircleUserRound, Sparkles, Zap } from "lucide-react";
import { PromptInputBox } from '@/components/ui/ai-prompt-box';
import { useTypingPlaceholder } from '@/hooks/use-typing-placeholder';
import { Link } from 'react-router-dom';
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

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <button
      type="button"
      className="group flex items-center gap-2 px-5 py-2.5 bg-[#1F2023]/80 hover:bg-[#2E3033] backdrop-blur-sm rounded-full border border-[#444444] text-[#9CA3AF] hover:text-white hover:border-[#9b87f5]/70 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(155,135,245,0.25)] hover:scale-105 active:scale-95"
    >
      <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
        {icon}
      </div>
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
    <>
      <PromptInputBox
        onSend={handleSend}
        placeholder={placeholder || "Describe what you want to build..."}
        className="w-full"
      />

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-8 flex-wrap px-4">
        <ActionButton icon={<ImageIcon className="w-4 h-4" />} label="Clone Screenshot" />
        <ActionButton icon={<Figma className="w-4 h-4" />} label="Import Figma" />
        <ActionButton icon={<FileUp className="w-4 h-4" />} label="Upload Project" />
        <ActionButton icon={<MonitorIcon className="w-4 h-4" />} label="Landing Page" />
        <ActionButton icon={<CircleUserRound className="w-4 h-4" />} label="Sign Up Form" />
      </div>
    </>
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
        
        {/* Floating Gradient Orbs */}
        <FloatingOrbs />
        
      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-5xl mx-auto space-y-8 md:space-y-10">
          {/* Large WeeWeb Logo */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img src={weewebLogo} alt="WeeWeb" className="h-12 md:h-16 lg:h-20" />
            </div>
            
            {/* Animated Tagline */}
            <AnimatedTagline />
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 mt-4 max-w-2xl mx-auto">
              Transform your ideas into stunning applications with the power of AI
            </p>
            
            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
              <Link 
                to="/builder"
                className="group flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Building Free
              </Link>
              <Link 
                to="/pricing"
                className="group flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Pricing
              </Link>
            </div>
          </div>

          {/* Input Area */}
          <div className="w-full max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
            <BuilderInput />
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

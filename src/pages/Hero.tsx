import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { TextLoop } from '@/components/ui/text-loop';
import weewebLogo from '@/assets/weeweb-logo.png';
import { ImageIcon, FileUp, Figma, MonitorIcon, CircleUserRound, ArrowUpIcon, Paperclip } from "lucide-react";
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

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({ minHeight, maxHeight }: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustHeight = useCallback((reset?: boolean) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    if (reset) {
      textarea.style.height = `${minHeight}px`;
      return;
    }
    textarea.style.height = `${minHeight}px`;
    const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY));
    textarea.style.height = `${newHeight}px`;
  }, [minHeight, maxHeight]);
  
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);
  
  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);
  
  return { textareaRef, adjustHeight };
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}

function BuilderInput() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200
  });

  const handleSubmit = () => {
    if (value.trim()) {
      const systemPrompt = `User request: ${value}
Build a dynamic, AI-powered workspace that includes automated data visualization, collaborative tools, and deployment-ready features.
Use clean design with WeeOS branding, ensure intuitive navigation, and optimized performance.`;
      navigate('/builder', { state: { prompt: systemPrompt } });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <div className="relative bg-[#1e293b]/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
        <div className="overflow-y-auto">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Describe what you want to build—dashboards, workflows, apps... make it yours."
            className={cn(
              "w-full px-6 py-5",
              "resize-none",
              "bg-transparent",
              "border-none",
              "text-white text-lg",
              "focus:outline-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-white/40",
              "min-h-[140px]"
            )}
            style={{ overflow: "hidden" }}
          />
        </div>

        <div className="flex items-center justify-between p-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="group p-2.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Paperclip className="w-5 h-5 text-white/60 group-hover:text-white" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className={cn(
              "px-5 py-2.5 rounded-lg transition-all border flex items-center justify-center gap-2 font-medium",
              value.trim()
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-primary/90"
                : "text-white/40 border-white/10 bg-white/5 cursor-not-allowed"
            )}
            disabled={!value.trim()}
          >
            <ArrowUpIcon className="w-4 h-4" />
            Generate
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
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
        
      {/* Builder Interface */}
      <div className="relative z-20 flex flex-col items-center justify-start pt-20 px-4 min-h-screen">
        <div className="w-full max-w-5xl mx-auto space-y-8">
          {/* Large WeeWeb Logo and Title */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <img src={weewebLogo} alt="WeeWeb" className="h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Build a landing page
            </h1>
            <div className="text-lg md:text-xl text-white/70 h-8">
              <TextLoop interval={3}>
                <span>"Create a marketing analytics dashboard with real-time data and team collaboration."</span>
                <span>"Build a customer onboarding workflow with task assignments and automated notifications."</span>
                <span>"Generate a SaaS landing page with feature sections and signup form."</span>
                <span>"Make a personal finance tracker with categories, budget alerts, and graphs."</span>
                <span>"Design a project management hub for remote teams with chat and file sharing."</span>
              </TextLoop>
            </div>
          </div>

          {/* Input Area */}
          <div className="w-full max-w-3xl mx-auto">
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
    </>
  );
};
export default Hero;

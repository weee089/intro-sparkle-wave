import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { FeaturesSection } from '@/components/FeaturesSection';
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
      className="flex items-center gap-2 px-5 py-3 bg-background hover:bg-muted rounded-full border border-border hover:border-primary/50 text-foreground transition-all shadow-sm hover:shadow-md hover:scale-[1.02]"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
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
      navigate('/builder', { state: { prompt: value } });
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
      <div className="relative bg-white rounded-2xl border border-border shadow-2xl shadow-primary/10">
        <div className="overflow-y-auto">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Describe your dream website or app..."
            className={cn(
              "w-full px-8 py-6",
              "resize-none",
              "bg-transparent",
              "border-none",
              "text-foreground text-lg",
              "focus:outline-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-muted-foreground",
              "min-h-[160px]"
            )}
            style={{ overflow: "hidden" }}
          />
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="group p-3 hover:bg-primary/10 rounded-xl transition-all border border-transparent hover:border-primary/20"
              title="Attach files"
            >
              <Paperclip className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className={cn(
              "px-6 py-3 rounded-xl transition-all border flex items-center justify-center gap-2 font-semibold text-base",
              value.trim()
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:bg-primary/90 hover:scale-[1.02]"
                : "text-muted-foreground border-border bg-muted cursor-not-allowed"
            )}
            disabled={!value.trim()}
          >
            <ArrowUpIcon className="w-5 h-5" />
            Generate
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        {/* Builder Interface */}
        <div className="relative z-20 flex flex-col items-center justify-start pt-24 px-4 min-h-screen">
          <div className="w-full max-w-5xl mx-auto space-y-12">
            {/* Large WeeWeb Logo and Title */}
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-4 animate-fade-in">
                <img src={weewebLogo} alt="WeeWeb" className="h-20" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in">
                Build Your Dream Website
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                Create stunning landing pages, dashboards, and apps with AI—no code required
              </p>
            </div>

            {/* Input Area */}
            <div className="w-full max-w-3xl mx-auto animate-fade-in">
              <BuilderInput />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Logo Carousel Section */}
      <div className="relative py-24 bg-muted/30 border-y border-border">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8 px-4">
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-2">
              The best are already here
            </p>
            <h2 className="text-foreground text-4xl font-black">
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

import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import weewebLogo from '@/assets/weeweb-logo.png';
import { ImageIcon, FileUp, Figma, MonitorIcon, CircleUserRound, ArrowUpIcon, Paperclip, PlusIcon } from "lucide-react";

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

const Builder = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        console.log("Building:", value);
        setValue("");
        adjustHeight(true);
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <button 
            onClick={() => navigate('/hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={weewebLogo} alt="WeeWeb" className="h-8" />
          </button>
          <div className="flex items-center gap-6">
            <button className="text-sm text-white/70 hover:text-white transition-colors">
              Preview
            </button>
            <button className="text-sm text-white/70 hover:text-white transition-colors">
              Code
            </button>
            <button className="text-sm text-white/70 hover:text-white transition-colors">
              Admin
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-20 px-4 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-5xl mx-auto space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              What do you want to build?
            </h1>
            <p className="text-white/60 text-lg">
              Describe your idea and watch it come to life
            </p>
          </div>

          {/* Input Area */}
          <div className="w-full max-w-3xl mx-auto">
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
                  placeholder="Create a dashboard for tracking sales metrics..."
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
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg text-sm text-white/70 transition-colors border border-white/20 hover:border-white/40 hover:bg-white/5 flex items-center gap-2"
                  >
                    <PlusIcon className="w-4 h-4" />
                    New Project
                  </button>
                  <button
                    type="button"
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
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
              <ActionButton icon={<ImageIcon className="w-4 h-4" />} label="Clone Screenshot" />
              <ActionButton icon={<Figma className="w-4 h-4" />} label="Import Figma" />
              <ActionButton icon={<FileUp className="w-4 h-4" />} label="Upload Project" />
              <ActionButton icon={<MonitorIcon className="w-4 h-4" />} label="Landing Page" />
              <ActionButton icon={<CircleUserRound className="w-4 h-4" />} label="Sign Up Form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;

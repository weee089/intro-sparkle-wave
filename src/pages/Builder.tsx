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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#ec4899]">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <button 
          onClick={() => navigate('/hero')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src={weewebLogo} alt="WeeWeb" className="h-10" />
        </button>
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-white/80 transition-colors">
            Preview
          </button>
          <button className="text-white hover:text-white/80 transition-colors">
            Code
          </button>
          <button className="text-white hover:text-white/80 transition-colors">
            Admin
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Create a dashboard
            </h1>
          </div>

          {/* Input Area */}
          <div className="w-full">
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
              <div className="overflow-y-auto">
                <Textarea
                  ref={textareaRef}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    adjustHeight();
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Create a dashboard..."
                  className={cn(
                    "w-full px-6 py-5",
                    "resize-none",
                    "bg-transparent",
                    "border-none",
                    "text-white text-base",
                    "focus:outline-none",
                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                    "placeholder:text-gray-400",
                    "min-h-[120px]"
                  )}
                  style={{ overflow: "hidden" }}
                />
              </div>

              <div className="flex items-center justify-between p-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="group p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Paperclip className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg text-sm text-gray-300 transition-colors border border-dashed border-white/20 hover:border-primary hover:bg-white/10 flex items-center gap-2"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Project
                  </button>
                  <button
                    type="button"
                    className={cn(
                      "p-2 rounded-lg transition-colors border flex items-center justify-center",
                      value.trim()
                        ? "bg-primary text-primary-foreground border-primary shadow-sm hover:bg-primary/90"
                        : "text-gray-400 border-white/20 hover:bg-white/10"
                    )}
                  >
                    <ArrowUpIcon className="w-5 h-5" />
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

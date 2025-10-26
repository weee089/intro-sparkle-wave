import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { TextLoop } from "@/components/ui/text-loop";
import weewebLogo from '@/assets/weeweb-logo.png';
import { ImageIcon, FileUp, Figma, MonitorIcon, CircleUserRound, ArrowUpIcon, Paperclip, PlusIcon } from "lucide-react";
interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}
function useAutoResizeTextarea({
  minHeight,
  maxHeight
}: UseAutoResizeTextareaProps) {
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
  return {
    textareaRef,
    adjustHeight
  };
}
export function WeeWebChat() {
  const [value, setValue] = useState("");
  const {
    textareaRef,
    adjustHeight
  } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200
  });
  const suggestions = [
    "Build a landing page",
    "Create a dashboard",
    "Design a portfolio site",
    "Generate a SaaS template"
  ];
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue("");
        adjustHeight(true);
      }
    }
  };
  return <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-8">
            {/* Logo */}
            <div className="flex items-center justify-center mb-2">
                <img src={weewebLogo} alt="WeeWeb" className="h-16 md:h-20 drop-shadow-2xl" />
            </div>
            
            {/* Animated Suggestions */}
            <div className="text-center min-h-[2.5rem] flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                    <TextLoop interval={3}>
                        {suggestions.map(text => <span key={text}>{text}</span>)}
                    </TextLoop>
                </h1>
            </div>

            <div className="w-full">
                <div className="relative bg-card/80 backdrop-blur-xl rounded-xl border border-border shadow-2xl">
                    <div className="overflow-y-auto">
                        <Textarea ref={textareaRef} value={value} onChange={e => {
            setValue(e.target.value);
            adjustHeight();
          }} onKeyDown={handleKeyDown} placeholder="Create a dashboard..." className={cn("w-full px-4 py-3", "resize-none", "bg-transparent", "border-none", "text-foreground text-sm", "focus:outline-none", "focus-visible:ring-0 focus-visible:ring-offset-0", "placeholder:text-muted-foreground placeholder:text-sm", "min-h-[60px]")} style={{
            overflow: "hidden"
          }} />
                    </div>

                    <div className="flex items-center justify-between p-3 border-t border-border/50">
                        <div className="flex items-center gap-2">
                            <button type="button" className="group p-2 hover:bg-accent rounded-lg transition-colors flex items-center gap-1">
                                <Paperclip className="w-4 h-4 text-muted-foreground" />
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button type="button" className="px-2 py-1 rounded-lg text-sm text-muted-foreground transition-colors border border-dashed border-border hover:border-primary hover:bg-accent/50 flex items-center justify-between gap-1">
                                <PlusIcon className="w-4 h-4" />
                                Project
                            </button>
                            <button type="button" className={cn("px-1.5 py-1.5 rounded-lg text-sm transition-colors border flex items-center justify-between gap-1", value.trim() ? "bg-primary text-primary-foreground border-primary shadow-sm" : "text-muted-foreground border-border hover:bg-accent")}>
                                <ArrowUpIcon className="w-4 h-4" />
                                <span className="sr-only">Send</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <ActionButton icon={<ImageIcon className="w-4 h-4" />} label="Clone Screenshot" />
                    <ActionButton icon={<Figma className="w-4 h-4" />} label="Import Figma" />
                    <ActionButton icon={<FileUp className="w-4 h-4" />} label="Upload Project" />
                    <ActionButton icon={<MonitorIcon className="w-4 h-4" />} label="Landing Page" />
                    <ActionButton icon={<CircleUserRound className="w-4 h-4" />} label="Sign Up Form" />
                </div>
            </div>
        </div>;
}
interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}
function ActionButton({
  icon,
  label
}: ActionButtonProps) {
  return <button type="button" className="flex items-center gap-2 px-4 py-2 bg-card/60 hover:bg-card/80 backdrop-blur-sm rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all shadow-sm hover:shadow-md">
            {icon}
            <span className="text-xs">{label}</span>
        </button>;
}
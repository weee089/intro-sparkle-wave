import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import weewebLogo from '@/assets/weeweb-logo.png';
import { CheckCircle2, FileText, Loader2, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { CodeDisplay } from "@/components/CodeDisplay";
import { ComponentPreview } from "@/components/ComponentPreview";
import { toast } from "sonner";

interface ActivityItem {
  id: number;
  type: 'analyzing' | 'generating' | 'writing' | 'styling' | 'completed';
  message: string;
  status: 'completed' | 'inProgress';
}

const Builder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prompt = location.state?.prompt || "Create a dashboard...";
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isBuilding, setIsBuilding] = useState(true);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  useEffect(() => {
    generateComponent();
  }, []);

  const generateComponent = async () => {
    setIsBuilding(true);
    setError(null);
    
    // Add activity steps
    const activitySteps: ActivityItem[] = [
      { id: 1, type: 'analyzing', message: 'Analyzing your prompt...', status: 'inProgress' },
      { id: 2, type: 'generating', message: 'Generating component structure...', status: 'inProgress' },
      { id: 3, type: 'writing', message: 'Writing React component...', status: 'inProgress' },
      { id: 4, type: 'styling', message: 'Styling with Tailwind CSS...', status: 'inProgress' },
    ];

    // Show activities progressively
    for (let i = 0; i < activitySteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setActivities(prev => [...prev, { ...activitySteps[i], status: 'completed' }]);
    }

    try {
      const { data, error: invokeError } = await supabase.functions.invoke('generate-component', {
        body: { prompt }
      });

      if (invokeError) {
        throw new Error(invokeError.message);
      }

      if (!data?.code) {
        throw new Error("No code generated");
      }

      setGeneratedCode(data.code);
      setActivities(prev => [...prev, {
        id: 5,
        type: 'completed',
        message: 'Component generated successfully!',
        status: 'completed'
      }]);
      setIsBuilding(false);
      toast.success("Component generated successfully!");
      
    } catch (err) {
      console.error("Generation error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to generate component";
      setError(errorMessage);
      setIsBuilding(false);
      
      if (errorMessage.includes("Rate limit")) {
        toast.error("Rate limit exceeded. Please try again later.");
      } else if (errorMessage.includes("Credits exhausted")) {
        toast.error("Credits exhausted. Please add funds to your workspace.");
      } else {
        toast.error("Failed to generate component. Please try again.");
      }
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'GeneratedComponent.tsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Component downloaded!");
  };

  const getIcon = (type: string, status: string) => {
    if (status === 'inProgress') {
      return <Loader2 className="w-4 h-4 text-primary animate-spin" />;
    }
    return <CheckCircle2 className="w-4 h-4 text-green-400" />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="flex items-center justify-between px-6 py-4">
          <button 
            onClick={() => navigate('/hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={weewebLogo} alt="WeeWeb" className="h-8" />
          </button>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`text-sm transition-colors ${activeTab === 'preview' ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Preview
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`text-sm transition-colors ${activeTab === 'code' ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Code
            </button>
            {generatedCode && (
              <button 
                onClick={handleDownload}
                className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content - Split View */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Activity Log */}
        <div className="w-96 border-r border-white/10 bg-[#0f0f0f] overflow-y-auto">
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-white/60 text-sm">Building your project:</h2>
              <p className="text-white text-base font-medium">{prompt}</p>
            </div>

            <div className="space-y-3 pt-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 animate-fade-in"
                >
                  {getIcon(activity.type, activity.status)}
                  <div className="flex-1 min-w-0">
                    <p className="text-white/90 text-sm">
                      {activity.message}
                    </p>
                  </div>
                  {activity.status === 'completed' && (
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  )}
                </div>
              ))}
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 text-sm">{error}</p>
                  <button 
                    onClick={generateComponent}
                    className="mt-2 text-xs text-red-300 hover:text-red-200 underline"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Code Display Area */}
        <div className="flex-1 bg-[#0a0a0a] overflow-hidden">
          {isBuilding ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <img src={weewebLogo} alt="WeeWeb" className="h-12" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-white text-2xl font-semibold">
                    WeeWeb is generating your component...
                  </h2>
                  <p className="text-white/60 text-lg">This usually takes a few moments</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  <span className="text-white/60 text-sm">Generating with AI...</span>
                </div>
              </div>
            </div>
          ) : generatedCode ? (
            <div className="h-full">
              {activeTab === 'code' ? (
                <CodeDisplay code={generatedCode} language="typescript" />
              ) : (
                <ComponentPreview code={generatedCode} />
              )}
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
                  <FileText className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-white text-xl font-semibold">Generation Failed</h2>
                <p className="text-white/60 max-w-md">{error}</p>
                <button 
                  onClick={generateComponent}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Builder;

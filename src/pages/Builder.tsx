import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import weewebLogo from '@/assets/weeweb-logo.png';
import { CheckCircle2, FileText, Edit3, Loader2 } from "lucide-react";

interface ActivityItem {
  id: number;
  type: 'write' | 'edit' | 'read';
  file: string;
  status: 'completed' | 'inProgress';
}

const Builder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prompt = location.state?.prompt || "Create a dashboard...";
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isBuilding, setIsBuilding] = useState(true);

  useEffect(() => {
    // Simulate building activities
    const simulatedActivities: ActivityItem[] = [
      { id: 1, type: 'write', file: 'src/pages/Dashboard.tsx', status: 'completed' },
      { id: 2, type: 'read', file: 'src/index.css', status: 'completed' },
      { id: 3, type: 'edit', file: 'src/App.tsx', status: 'completed' },
      { id: 4, type: 'write', file: 'src/components/Chart.tsx', status: 'completed' },
      { id: 5, type: 'edit', file: 'src/components/Navbar.tsx', status: 'inProgress' },
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < simulatedActivities.length) {
        setActivities(prev => [...prev, simulatedActivities[currentIndex]]);
        currentIndex++;
      } else {
        setIsBuilding(false);
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: string, status: string) => {
    if (status === 'inProgress') {
      return <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />;
    }
    
    switch (type) {
      case 'write':
        return <FileText className="w-4 h-4 text-blue-400" />;
      case 'edit':
        return <Edit3 className="w-4 h-4 text-blue-400" />;
      case 'read':
        return <FileText className="w-4 h-4 text-blue-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
    }
  };

  const getActionText = (type: string) => {
    switch (type) {
      case 'write':
        return 'Wrote:';
      case 'edit':
        return 'Edit:';
      case 'read':
        return 'Read:';
      default:
        return 'Action:';
    }
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
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  {getIcon(activity.type, activity.status)}
                  <div className="flex-1 min-w-0">
                    <p className="text-white/90 text-sm">
                      {getActionText(activity.type)} <span className="text-white/60">{activity.file}</span>
                    </p>
                  </div>
                  {activity.status === 'completed' && (
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Preview Area */}
        <div className="flex-1 flex items-center justify-center bg-[#0a0a0a]">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
              <img src={weewebLogo} alt="WeeWeb" className="h-12" />
            </div>
            {isBuilding ? (
              <>
                <div className="space-y-2">
                  <h2 className="text-white text-2xl font-semibold">
                    WeeWeb is building your first version...
                  </h2>
                  <p className="text-white/60 text-lg">This usually takes a few moments</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  <span className="text-white/60 text-sm">Building...</span>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto" />
                <h2 className="text-white text-2xl font-semibold">
                  Your project is ready!
                </h2>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all">
                  View Project
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;

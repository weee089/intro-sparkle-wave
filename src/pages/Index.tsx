import { Link } from "react-router-dom";
import { FloatingIconsHero, type FloatingIconsHeroProps } from '@/components/ui/floating-icons-hero-section';
import weewebLogo from '@/assets/weeweb-logo.png';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInCard } from '@/components/ui/sign-in-card';
import { useNavigate } from 'react-router-dom';
import { FeaturesSection } from '@/components/FeaturesSection';
import Hyperspeed from '@/components/ui/Hyperspeed';
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
  IconNetlify,
} from '@/components/CompanyIcons';

const icons: FloatingIconsHeroProps['icons'] = [
  { id: 1, icon: IconOpenAI, className: 'top-[10%] left-[8%]' },
  { id: 2, icon: IconAnthropic, className: 'top-[20%] right-[8%]' },
  { id: 3, icon: IconGoogleDeepMind, className: 'top-[70%] left-[10%]' },
  { id: 4, icon: IconFigma, className: 'bottom-[10%] right-[10%]' },
  { id: 5, icon: IconFramer, className: 'top-[5%] left-[30%]' },
  { id: 6, icon: IconCursor, className: 'top-[8%] right-[25%]' },
  { id: 7, icon: IconBolt, className: 'bottom-[15%] left-[25%]' },
  { id: 8, icon: IconLovable, className: 'top-[40%] left-[5%]' },
  { id: 9, icon: IconReplit, className: 'top-[65%] right-[20%]' },
  { id: 10, icon: IconSupabase, className: 'top-[85%] left-[65%]' },
  { id: 11, icon: IconFirebase, className: 'top-[45%] right-[5%]' },
  { id: 12, icon: IconTrae, className: 'top-[55%] left-[8%]' },
  { id: 13, icon: IconWarp, className: 'top-[12%] left-[50%]' },
  { id: 14, icon: IconVercel, className: 'bottom-[8%] right-[40%]' },
  { id: 15, icon: IconNetlify, className: 'top-[30%] right-[18%]' },
];

const Index = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSignInSuccess = () => {
    setShowSignIn(false);
    navigate('/workspace');
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSignIn) {
        setShowSignIn(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showSignIn]);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Hyperspeed Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            }
          }}
        />
      </div>

      {/* Simple Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={weewebLogo} alt="WeeWeb" className="h-10" />
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSignIn(true)}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sign In
            </button>
            <Link
              to="/hero"
              className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative z-10">
        <FloatingIconsHero
          title="Welcome to WeeWeb"
          subtitle="Experience the future of web development with cutting-edge tools and technologies that empower creators worldwide."
          ctaText="Get Started"
          ctaHref="/hero"
          icons={icons}
        />

        {/* Features Section */}
        <FeaturesSection />
      </div>

      {/* Sign In Modal */}
      <AnimatePresence>
        {showSignIn && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSignIn(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <div className="pointer-events-auto">
                <SignInCard onSuccess={handleSignInSuccess} />
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;

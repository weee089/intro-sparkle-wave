import { Link } from "react-router-dom";
import { FloatingIconsHero, type FloatingIconsHeroProps } from '@/components/ui/floating-icons-hero-section';
import weewebLogo from '@/assets/weeweb-logo.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInCard } from '@/components/ui/sign-in-card';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div className="min-h-screen bg-background">
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

      <FloatingIconsHero
        title="Welcome to WeeWeb"
        subtitle="Experience the future of web development with cutting-edge tools and technologies that empower creators worldwide."
        ctaText="Get Started"
        ctaHref="/hero"
        icons={icons}
      />

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
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <SignInCard onSuccess={handleSignInSuccess} />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;

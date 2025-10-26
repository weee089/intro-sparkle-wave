import { FloatingIconsHero, type FloatingIconsHeroProps } from '@/components/ui/floating-icons-hero-section';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
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
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/hero');
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-background">
        <FloatingIconsHero
          title="Welcome to WeeWeb"
          subtitle="Experience the future of web development with cutting-edge tools and technologies that empower creators worldwide."
          ctaText="Get Started"
          ctaHref="/hero"
          icons={icons}
        />
      </div>
    </>
  );
};

export default Index;

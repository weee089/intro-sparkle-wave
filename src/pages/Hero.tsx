import { WeeWebChat } from '@/components/ui/v0-ai-chat';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden" style={{
        background: 'radial-gradient(125% 125% at 50% 101%, rgba(245,87,2,1) 10.5%, rgba(245,120,2,1) 16%, rgba(245,140,2,1) 17.5%, rgba(245,170,100,1) 25%, rgba(238,174,202,1) 40%, rgba(202,179,214,1) 65%, rgba(148,201,233,1) 100%)'
      }}>
        {/* Chat Interface */}
        <div className="relative z-20 flex items-center justify-center min-h-screen px-4 pt-16">
          <WeeWebChat />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Hero;

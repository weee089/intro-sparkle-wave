import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SignInCard } from '@/components/ui/sign-in-card';
import weewebLogo from '@/assets/weeweb-logo.png';
import { cn } from '@/lib/utils';
const menuItems = [{
  label: 'Product',
  items: [{
    label: 'AI Builder',
    href: '/ai-builder'
  }, {
    label: 'Visual Editor',
    href: '/visual-editor'
  }, {
    label: 'Backend Generator',
    href: '/backend'
  }]
}, {
  label: 'Templates',
  items: [{
    label: 'Websites',
    href: '/templates/websites'
  }, {
    label: 'Dashboards',
    href: '/templates/dashboards'
  }, {
    label: 'SaaS Starters',
    href: '/templates/saas'
  }]
}, {
  label: 'Resources',
  items: [{
    label: 'Docs',
    href: '/docs'
  }, {
    label: 'Blog',
    href: '/blog'
  }, {
    label: 'Roadmap',
    href: '/roadmap'
  }]
}, {
  label: 'Community',
  items: [{
    label: 'Discord',
    href: '/discord'
  }, {
    label: 'Showcase',
    href: '/showcase'
  }, {
    label: 'Feedback',
    href: '/feedback'
  }]
}];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (showSignIn || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSignIn, mobileMenuOpen]);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showSignIn) setShowSignIn(false);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showSignIn, mobileMenuOpen]);
  const handleSignInSuccess = () => {
    setShowSignIn(false);
    navigate('/workspace');
  };
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/60 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-background/30 backdrop-blur-md border-b border-white/5")}>
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/hero" className="flex items-center">
            <img src={weewebLogo} alt="WeeWeb" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(menu => <div key={menu.label} className="relative" onMouseEnter={() => setActiveDropdown(menu.label)} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1 text-sm font-medium transition-colors text-slate-50">
                  {menu.label}
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === menu.label && <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.2
              }} className="absolute top-full left-0 mt-2 min-w-[170px] bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                      {menu.items.map(item => <Link key={item.label} to={item.href} className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                          {item.label}
                        </Link>)}
                    </motion.div>}
                </AnimatePresence>
              </div>)}
            <Link to="/pricing" className="text-sm font-medium text-slate-50 hover:text-primary transition-colors ml-2">
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth" className="px-4 py-2 text-sm font-medium transition-colors text-slate-50">
              Sign In
            </Link>
            <Link to="/auth" className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-background border-t border-border overflow-hidden">
              <div className="container mx-auto px-4 py-4 space-y-4">
                {menuItems.map(menu => <div key={menu.label}>
                    <div className="font-medium text-sm text-muted-foreground mb-2">
                      {menu.label}
                    </div>
                    <div className="space-y-2 pl-4">
                      {menu.items.map(item => <Link key={item.label} to={item.href} className="block text-sm text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </Link>)}
                    </div>
                  </div>)}
                <Link to="/pricing" className="block text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </Link>
                <div className="pt-4 space-y-2">
                  <Link to="/auth" className="block w-full px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-accent transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                  <Link to="/auth" className="block w-full px-4 py-2 text-sm font-medium text-center bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </motion.header>

      {/* Sign In Modal */}
      <AnimatePresence>
        {showSignIn && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setShowSignIn(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <div className="pointer-events-auto">
                <SignInCard onSuccess={handleSignInSuccess} />
              </div>
            </div>
          </>}
      </AnimatePresence>
    </>;
}
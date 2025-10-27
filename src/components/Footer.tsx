import { Link } from 'react-router-dom';
import weewebLogo from '@/assets/weeweb-logo.png';

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f0f] border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img src={weewebLogo} alt="WeeWeb" className="h-10 mb-4" />
            <p className="text-white/70 text-sm leading-relaxed">
              Experience web development with cutting-edge AI-powered tools and technologies.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-white/60 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link to="/templates" className="text-white/60 hover:text-white transition-colors text-sm">Templates</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/ai-builder" className="text-white/60 hover:text-white transition-colors text-sm">AI Builder</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-white/50 text-xs">
            © 2024 WeeWeb. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

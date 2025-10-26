import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Join thousands of developers building the future with WeeWeb's AI-powered platform
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-accent text-foreground rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-white/70 hover:text-primary transition-colors text-sm">Features</Link></li>
              <li><Link to="/templates" className="text-white/70 hover:text-primary transition-colors text-sm">Templates</Link></li>
              <li><Link to="/pricing" className="text-white/70 hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/ai-builder" className="text-white/70 hover:text-primary transition-colors text-sm">AI Builder</Link></li>
              <li><Link to="/deployment" className="text-white/70 hover:text-primary transition-colors text-sm">Deployment</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link to="/press" className="text-white/70 hover:text-primary transition-colors text-sm">Press</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-white/70 hover:text-primary transition-colors text-sm">Docs</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/tutorials" className="text-white/70 hover:text-primary transition-colors text-sm">Tutorials</Link></li>
              <li><Link to="/roadmap" className="text-white/70 hover:text-primary transition-colors text-sm">Roadmap</Link></li>
              <li><Link to="/status" className="text-white/70 hover:text-primary transition-colors text-sm">Status</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li><a href="https://discord.gg/weeweb" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors text-sm">Discord</a></li>
              <li><a href="https://github.com/weeweb" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors text-sm">GitHub</a></li>
              <li><a href="https://linkedin.com/company/weeweb" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors text-sm">LinkedIn</a></li>
              <li><Link to="/showcase" className="text-white/70 hover:text-primary transition-colors text-sm">Showcase</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 mb-8">
          <a href="https://github.com/weeweb" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/company/weeweb" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/weeweb" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 WeeWeb. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/60 hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/security" className="text-white/60 hover:text-primary transition-colors">Security</Link>
              <Link to="/cookies" className="text-white/60 hover:text-primary transition-colors">Cookie Settings</Link>
            </div>
            <div className="flex gap-4 text-xs text-white/60">
              <span className="px-2 py-1 border border-white/20 rounded">SOC 2</span>
              <span className="px-2 py-1 border border-white/20 rounded">GDPR</span>
              <span className="px-2 py-1 border border-white/20 rounded">SSL Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

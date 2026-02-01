
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
          <div className="flex justify-center md:justify-start">
  <img
    src="/logo.png"
    alt="Dynamic Eagle"
    className="
      h-24              // bigger in footer
      md:h-28
      w-auto
      object-contain
      drop-shadow-lg    // stronger shadow on dark footer bg
      brightness-110
    "
  />
</div>
            <p className="text-sm leading-relaxed">
              Founded in 2014, Dynamic Eagle Training and Networking is a 100% black owned multi-utility company dedicated to providing cost effective, professional services and solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#EE3124] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#EE3124] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#EE3124] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#/services" className="hover:text-[#F37021] transition-colors">Corporate Training</a></li>
              <li><a href="#/gallery" className="hover:text-[#F37021] transition-colors">Gallery</a></li>
              <li><a href="#/blog" className="hover:text-[#F37021] transition-colors">Blog & Insights</a></li>
              <li><a href="#/services" className="hover:text-[#F37021] transition-colors">K53 Driving School</a></li>
              <li><a href="#/services" className="hover:text-[#F37021] transition-colors">Accommodation (B&B)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#EE3124] shrink-0" />
                <span>26 Office Centre and Conferencing, Fourway/Douglasdale, Johannesburg, Gauteng</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#EE3124] shrink-0" />
                <span>+27 87 550 3221</span>
              </li>
              <p className="flex items-center gap-2">
  <Phone size={18} className="text-orange-500" />
  +27 61 417 4795
  <a href="https://wa.me/27614174795" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
    (WhatsApp)
  </a>
</p>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#EE3124] shrink-0" />
                <span>info@dynamiceagle.co.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Accreditation</h4>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-tighter">SERVICES SETA</p>
                <p className="text-sm font-bold text-white">#6485 Full Accreditation</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-tighter">BBBEE STATUS</p>
                <p className="text-sm font-bold text-[#F37021]">Level 1 Contributor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Dynamic Eagle Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

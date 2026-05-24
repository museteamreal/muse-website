import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Mail } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function FooterParallax({ scrollContainer }: { scrollContainer?: React.RefObject<HTMLDivElement | null> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useScroll({
    target: containerRef,
    container: scrollContainer,
    offset: ["start end", "end start"]
  });

  return (
    <div className="bg-[#fcfbf8] w-full pb-12">
      <div ref={containerRef} className="w-full relative">
        <div className="w-full px-4 sm:px-6 z-30 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100 rounded-2xl md:rounded-3xl overflow-hidden"
          >
            {/* Top Half */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-12 gap-10 md:gap-0">
              
              {/* Logo Area */}
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-10 md:h-10 fill-[#fb8500]">
                  <circle cx="16" cy="16" r="3.5" />
                  <circle cx="16" cy="6" r="3.5" />
                  <circle cx="16" cy="26" r="3.5" />
                  <circle cx="6" cy="16" r="3.5" />
                  <circle cx="26" cy="16" r="3.5" />
                  <circle cx="8.93" cy="8.93" r="3.5" />
                  <circle cx="23.07" cy="8.93" r="3.5" />
                  <circle cx="8.93" cy="23.07" r="3.5" />
                  <circle cx="23.07" cy="23.07" r="3.5" />
                </svg>
                <span className="font-['Instrument_Serif',serif] italic font-medium tracking-wide text-gray-900 text-2xl md:text-3xl">
                  MUSE
                </span>
              </div>

              {/* Links Area */}
              <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-24">
                <div className="flex flex-col gap-4">
                  <h4 className="uppercase tracking-widest text-sm font-bold text-gray-900">Product</h4>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Features</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Integrations</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">AI Workspace</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="uppercase tracking-widest text-sm font-bold text-gray-900">Company</h4>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">About Muse</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Careers</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Press Kit</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="uppercase tracking-widest text-sm font-bold text-gray-900">Resources</h4>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Documentation</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Changelog</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Community</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="uppercase tracking-widest text-sm font-bold text-gray-900">Legal</h4>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Cookie Settings</a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-100 bg-white p-6 md:px-12 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
              <p className="text-sm text-gray-500 font-medium text-center sm:text-left">
                © 2026 MUSE All Rights Reserved
              </p>
              
              <div className="flex gap-4">
                {[DiscordIcon, InstagramIcon, XIcon, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

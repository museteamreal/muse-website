import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavbarProps = {
  isScrolled?: boolean;
  isPricingPage?: boolean;
};

const solutionsMenu = {
  leftTitle: "Who is it for?",
  leftItems: [
    { title: "Marketers", desc: "Launch pages in minutes." },
    { title: "Ops", desc: "Tools that fit your flow." },
    { title: "People", desc: "HR tools your team loves." },
  ],
  rightTitle: "Use cases",
  rightItems: [
    { title: "Prototyping", desc: "Proof of concept in hours." },
    { title: "Internal tools", desc: "Built for your team." },
  ]
};

const resourcesMenu = {
  leftTitle: "Resources",
  leftItems: [
    { title: "Blog", desc: "Ideas, updates, stories." },
    { title: "Connectors", desc: "Build from what you already use." },
    { title: "Partners", desc: "Build more together." },
    { title: "Docs", desc: "Everything under the hood." },
    { title: "Templates", desc: "Begin with a template." },
    { title: "Guides", desc: "Learn as you build." },
  ],
  rightTitle: "Announcement"
};

const MenuItem = ({ isScrolled, title, desc }: { isScrolled: boolean; title: string; desc: string }) => (
  <a href="#" className={`flex flex-col p-3 rounded-xl transition-colors group ${isScrolled ? 'hover:bg-gray-100/50' : 'hover:bg-white/10'}`}>
    <span className={`text-[15px] font-semibold transition-colors ${isScrolled ? 'text-neutral-900 group-hover:text-black' : 'text-white/90 group-hover:text-white'}`}>{title}</span>
    <span className={`text-[14px] transition-colors ${isScrolled ? 'text-neutral-500' : 'text-white/60 group-hover:text-white/80'}`}>{desc}</span>
  </a>
);

export default function Navbar({ isScrolled: _isScrolled = false, isPricingPage = false }: NavbarProps) {
  const isScrolled = _isScrolled || isPricingPage;
  const [open, setOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-50 flex justify-center"
      style={{
        paddingTop: '24px',
        paddingLeft: '16px',
        paddingRight: '16px',
        transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Navbar Container */}
      <nav
        className="relative rounded-full flex items-center justify-between"
        style={{
          padding: '8px 8px',
          maxWidth: isScrolled ? '640px' : '760px',
          width: '100%',
          boxShadow: isScrolled
            ? '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)'
            : '0 4px 16px rgba(0,0,0,0.04)',
          transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Glass Background */}
        <div className={`absolute inset-0 rounded-full pointer-events-none overflow-hidden ${isScrolled ? 'bg-white/80 backdrop-blur-md border border-gray-200/50' : 'liquid-glass'}`}></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Logo & Brand */}
          <a
            href="/"
            className="shrink-0 flex items-center origin-left cursor-pointer"
            style={{
              paddingLeft: isScrolled ? '6px' : '4px',
              gap: isScrolled ? '8px' : '6px',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 fill-[#fb8500]">
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
            <span
              className={`font-sans font-bold tracking-wide transition-colors duration-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              style={{
                fontSize: isScrolled ? '17px' : '18px',
                transition: 'font-size 800ms cubic-bezier(0.16, 1, 0.3, 1), color 500ms',
              }}
            >
              MUSE
            </span>
          </a>

          {/* Desktop Links */}
          <div
            className={`hidden md:flex items-center transition-colors duration-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            style={{
              gap: isScrolled ? '14px' : '24px',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'gap 800ms cubic-bezier(0.16, 1, 0.3, 1), color 500ms',
            }}
          >
            {/* Solution with Dropdown */}
            <div className="relative group/nav">
              <a href="#" className="flex items-center gap-1.5 relative cursor-pointer py-2" style={{ transition: 'opacity 400ms ease' }}>
                Solution
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/nav:-rotate-180" />
              </a>

              {/* Dropdown Container */}
              <div 
                className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-500"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className={`w-[800px] rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border overflow-hidden flex ${isScrolled ? 'bg-white border-neutral-100' : 'liquid-glass border-white/20'}`}>
                  <div className="flex-[1.5] p-8">
                    <h4 className={`text-[13px] font-medium mb-4 px-3 ${isScrolled ? 'text-neutral-500' : 'text-white/60'}`}>{solutionsMenu.leftTitle}</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {solutionsMenu.leftItems.map(item => <MenuItem key={item.title} isScrolled={isScrolled} {...item} />)}
                    </div>
                  </div>
                  <div className={`flex-1 p-8 border-l ${isScrolled ? 'bg-[#f8f6f0]/50 border-neutral-100/80' : 'bg-black/10 border-white/10'}`}>
                    <h4 className={`text-[13px] font-medium mb-4 px-3 ${isScrolled ? 'text-neutral-500' : 'text-white/60'}`}>{solutionsMenu.rightTitle}</h4>
                    <div className="flex flex-col gap-1">
                      {solutionsMenu.rightItems.map(item => <MenuItem key={item.title} isScrolled={isScrolled} {...item} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources with Dropdown */}
            <div className="relative group/nav-res">
              <a href="#" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-400 cursor-pointer py-2">
                Resources
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/nav-res:-rotate-180" />
              </a>

              {/* Dropdown Container */}
              <div 
                className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover/nav-res:opacity-100 group-hover/nav-res:translate-y-0 group-hover/nav-res:pointer-events-auto transition-all duration-500"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className={`w-[800px] rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border overflow-hidden flex ${isScrolled ? 'bg-white border-neutral-100' : 'liquid-glass border-white/20'}`}>
                  <div className="flex-[1.5] p-8">
                    <h4 className={`text-[13px] font-medium mb-4 px-3 ${isScrolled ? 'text-neutral-500' : 'text-white/60'}`}>{resourcesMenu.leftTitle}</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {resourcesMenu.leftItems.map(item => <MenuItem key={item.title} isScrolled={isScrolled} {...item} />)}
                    </div>
                  </div>
                  <div className={`flex-[1.2] p-8 border-l flex flex-col ${isScrolled ? 'bg-[#f8f6f0]/50 border-neutral-100/80' : 'bg-black/10 border-white/10'}`}>
                    <h4 className={`text-[13px] font-medium mb-4 px-3 ${isScrolled ? 'text-neutral-500' : 'text-white/60'}`}>{resourcesMenu.rightTitle}</h4>
                    <div className={`flex-1 rounded-2xl p-4 shadow-sm border flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow ${isScrolled ? 'bg-white border-neutral-100' : 'bg-white/10 border-white/10'}`}>
                      <div className="w-full aspect-[16/9] rounded-xl mb-4 flex items-center justify-center bg-[#fdf2f8] relative overflow-hidden">
                         <div className="absolute inset-0 flex items-center justify-center opacity-80 mix-blend-multiply">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm z-10 flex items-center justify-center border border-neutral-100">
                              <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-sm" style={{ borderTopLeftRadius: '50%', borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}></div>
                            </div>
                            <div className="absolute w-8 h-8 rounded-full bg-blue-400 -ml-16 -mt-8"></div>
                            <div className="absolute w-10 h-10 rounded-full bg-green-400 ml-16 mt-8"></div>
                            <div className="absolute w-6 h-6 rounded-full bg-yellow-400 ml-20 -mt-12"></div>
                         </div>
                      </div>
                      <div>
                        <h5 className={`text-[15px] font-semibold leading-snug mb-2 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>Connect Lovable to Google Workspace and Gemini Enterprise to build apps and more on data you already have</h5>
                        <span className={`text-[14px] font-medium transition-colors ${isScrolled ? 'text-neutral-600 group-hover:text-black' : 'text-white/70 group-hover:text-white'}`}>Learn more &rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="/pricing" className="hover:opacity-70 transition-opacity duration-400 py-2">Pricing</a>
            <a href="#" className="hover:opacity-70 transition-opacity duration-400 py-2">Security</a>
          </div>

          {/* Right Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto md:ml-0">
            <button
              className="bg-[#fb8500] text-white rounded-full flex items-center gap-2 hover:bg-[#e87800]"
              style={{
                paddingLeft: '16px',
                paddingRight: '6px',
                paddingTop: '6px',
                paddingBottom: '6px',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span
                className="font-medium"
                style={{
                  fontSize: '13px',
                  transition: 'font-size 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Start Creating
              </span>
              <div
                className="bg-white/20 rounded-full flex items-center justify-center shrink-0"
                style={{
                  width: '24px',
                  height: '24px',
                  transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden flex items-center justify-center rounded-full hover:bg-white/20 transition-colors ${isScrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white'}`}
              style={{
                width: '40px',
                height: '40px',
                transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute top-full left-2 right-2 mt-2 rounded-[24px] shadow-2xl p-4 z-20 md:hidden flex flex-col gap-2 overflow-hidden ${isScrolled ? 'bg-white border border-gray-100' : 'liquid-glass'}`}
            >
              {/* Mobile Solutions Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className={`px-4 py-3 text-[15px] font-semibold flex items-center justify-between rounded-xl transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'}`}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-4"
                    >
                      <div className="flex flex-col gap-1 py-2">
                        {[...solutionsMenu.leftItems, ...solutionsMenu.rightItems].map(item => (
                          <a 
                            key={item.title} 
                            href="#" 
                            onClick={() => setOpen(false)}
                            className={`py-2 text-[14px] transition-colors ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'}`}
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Resources Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className={`px-4 py-3 text-[15px] font-semibold flex items-center justify-between rounded-xl transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'}`}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-4"
                    >
                      <div className="flex flex-col gap-1 py-2">
                        {resourcesMenu.leftItems.map(item => (
                          <a 
                            key={item.title} 
                            href="#" 
                            onClick={() => setOpen(false)}
                            className={`py-2 text-[14px] transition-colors ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'}`}
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/pricing" onClick={() => setOpen(false)} className={`px-4 py-3 text-[15px] font-semibold rounded-xl transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'}`}>Pricing</a>
              <a href="#" onClick={() => setOpen(false)} className={`px-4 py-3 text-[15px] font-semibold rounded-xl transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10'}`}>Security</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

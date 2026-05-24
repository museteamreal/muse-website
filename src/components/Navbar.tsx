import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Navbar({ isScrolled, isPricingPage }: { isScrolled?: boolean; isPricingPage?: boolean }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutId = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const MenuItem = ({ title, desc }: { title: string; desc: string }) => (
    <a href="#" className="flex flex-col p-3 rounded-xl hover:bg-[#f4f2ea] transition-colors group">
      <span className="text-[15px] font-semibold text-neutral-900 group-hover:text-black">{title}</span>
      <span className="text-[14px] text-neutral-500">{desc}</span>
    </a>
  );

  const navBgClass = isScrolled || isPricingPage
    ? 'bg-white shadow-sm border-b border-neutral-200'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between transition-all duration-300 ${navBgClass}`} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-sm" style={{ borderTopLeftRadius: '50%', borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}></div>
        <span className="text-xl font-bold tracking-tight">Lovable</span>
      </div>

      <div className="hidden md:flex items-center gap-8 relative">
        <div 
          className="flex items-center gap-1 text-[15px] font-medium text-neutral-800 hover:text-black transition-colors cursor-pointer py-2"
          onMouseEnter={() => handleMouseEnter('Solutions')}
        >
          Solutions
          <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${activeMenu === 'Solutions' ? 'rotate-180' : ''}`} />
        </div>
        <div 
          className="flex items-center gap-1 text-[15px] font-medium text-neutral-800 hover:text-black transition-colors cursor-pointer py-2"
          onMouseEnter={() => handleMouseEnter('Resources')}
        >
          Resources
          <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${activeMenu === 'Resources' ? 'rotate-180' : ''}`} />
        </div>
        <a href="#" className="text-[15px] font-medium text-neutral-800 hover:text-black transition-colors py-2" onMouseEnter={() => handleMouseEnter('Community')}>Community</a>
        <a href="#" className="text-[15px] font-medium text-neutral-800 hover:text-black transition-colors py-2" onMouseEnter={() => handleMouseEnter('Enterprise')}>Enterprise</a>
        <a href="#" className="text-[15px] font-medium text-neutral-800 hover:text-black transition-colors py-2" onMouseEnter={() => handleMouseEnter('Pricing')}>Pricing</a>
        <a href="#" className="text-[15px] font-medium text-neutral-800 hover:text-black transition-colors py-2" onMouseEnter={() => handleMouseEnter('Security')}>Security</a>

        {/* Mega Menus */}
        <AnimatePresence>
          {activeMenu === 'Solutions' && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 mt-2 w-[800px] -ml-[200px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-100 flex overflow-hidden"
              onMouseEnter={() => handleMouseEnter('Solutions')}
            >
              <div className="flex-1 p-8 bg-white">
                <h4 className="text-[13px] font-medium text-neutral-500 mb-4 px-3">{solutionsMenu.leftTitle}</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {solutionsMenu.leftItems.map(item => <MenuItem key={item.title} {...item} />)}
                </div>
              </div>
              <div className="w-[300px] bg-[#f8f6f0] p-8 border-l border-neutral-100/50">
                <h4 className="text-[13px] font-medium text-neutral-500 mb-4 px-3">{solutionsMenu.rightTitle}</h4>
                <div className="flex flex-col gap-1">
                  {solutionsMenu.rightItems.map(item => <MenuItem key={item.title} {...item} />)}
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === 'Resources' && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 mt-2 w-[800px] -ml-[100px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-100 flex overflow-hidden"
              onMouseEnter={() => handleMouseEnter('Resources')}
            >
              <div className="flex-1 p-8 bg-white">
                <h4 className="text-[13px] font-medium text-neutral-500 mb-4 px-3">{resourcesMenu.leftTitle}</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {resourcesMenu.leftItems.map(item => <MenuItem key={item.title} {...item} />)}
                </div>
              </div>
              <div className="w-[340px] bg-[#f8f6f0] p-8 border-l border-neutral-100/50 flex flex-col">
                <h4 className="text-[13px] font-medium text-neutral-500 mb-4 px-3">{resourcesMenu.rightTitle}</h4>
                <div className="flex-1 rounded-2xl bg-white p-4 shadow-sm border border-neutral-100 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-full aspect-[16/9] rounded-xl mb-4 flex items-center justify-center bg-[#fdf2f8] relative overflow-hidden">
                     {/* Dummy graphic for the announcement */}
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
                    <h5 className="text-[15px] font-semibold text-neutral-900 leading-snug mb-2">Connect Lovable to Google Workspace and Gemini Enterprise to build apps and more on data you already have</h5>
                    <span className="text-[14px] font-medium text-neutral-600 group-hover:text-black transition-colors">Learn more &rarr;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-[14px] font-medium text-neutral-800 border border-neutral-300/50 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/50 transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
          Log in
        </button>
        <button className="px-4 py-2 text-[14px] font-medium text-white bg-black rounded-xl hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.1)]">
          Get started
        </button>
      </div>
    </nav>
  );
}

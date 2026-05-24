import { motion } from 'framer-motion';
import { Layout, Bot, Gift, Bell } from 'lucide-react';

export default function DashboardNav() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between z-50 px-8 py-5" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
      
      {/* LEFT SECTION (App Builder + Bot + Home) */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2.5 p-1.5 rounded-[20px] border border-white/30 bg-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] liquid-glass"
      >
        <button className="flex items-center gap-2 px-4 py-2 bg-[#f4f7f9] text-[#1e293b] rounded-[14px] font-bold text-[13px] shadow-[inset_0px_3px_6px_rgba(255,255,255,1),_inset_0px_-3px_8px_rgba(0,0,0,0.15),_0_6px_16px_rgba(0,0,0,0.15)] hover:bg-white transition-all transform hover:-translate-y-[1px]">
          <Layout className="w-4 h-4 text-[#334155]" />
          App builder
        </button>
        
        <button className="flex items-center justify-center w-[36px] h-[36px] rounded-xl hover:bg-white/30 transition-colors text-white">
          <Bot className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </motion.div>



      {/* RIGHT SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3.5"
      >
        <button className="px-5 py-2.5 bg-[#fce490] text-[#594206] rounded-full font-bold text-[13px] shadow-[inset_0px_3px_6px_rgba(255,255,255,0.9),_inset_0px_-3px_8px_rgba(180,120,0,0.25),_0_6px_16px_rgba(0,0,0,0.2)] hover:bg-[#fdeaa5] transition-transform hover:-translate-y-[1px]">
          Buy Credits
        </button>
        
        <div className="flex items-center gap-2.5">
          <button className="flex items-center justify-center w-[38px] h-[38px] bg-white text-[#334155] rounded-full shadow-[inset_0px_3px_6px_rgba(255,255,255,1),_inset_0px_-3px_8px_rgba(0,0,0,0.15),_0_6px_16px_rgba(0,0,0,0.15)] hover:-translate-y-[1px] transition-transform">
            {/* Using Gift icon but solid and thick to look more like the box */}
            <Gift className="w-[18px] h-[18px] text-[#1e293b]" fill="currentColor" strokeWidth={2} />
          </button>
          
          <button className="flex items-center justify-center w-[38px] h-[38px] bg-white text-[#334155] rounded-full shadow-[inset_0px_3px_6px_rgba(255,255,255,1),_inset_0px_-3px_8px_rgba(0,0,0,0.15),_0_6px_16px_rgba(0,0,0,0.15)] hover:-translate-y-[1px] transition-transform">
            <Bell className="w-[18px] h-[18px] text-[#1e293b]" fill="currentColor" strokeWidth={2} />
          </button>
          
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-[2px] border-white/90 shadow-[0_6px_20px_rgba(0,0,0,0.25)] cursor-pointer hover:border-white transition-colors bg-[#f59e0b]">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f59e0b" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>

    </nav>
  );
}

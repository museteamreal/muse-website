import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center w-full mt-[120px] mb-[-60px] z-20 relative"
    >
      <div className="flex items-center gap-3 p-1.5 pr-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] liquid-glass">
        <div className="flex items-center gap-2.5 pl-1">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111111] text-orange-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_4px_10px_rgba(0,0,0,0.3)]">
            <Sparkles className="w-[14px] h-[14px]" />
          </button>
          <span className="text-white/95 font-bold text-[13px] whitespace-nowrap drop-shadow-md">
            Launch Offer — Save 50% on
          </span>
        </div>

        <button className="px-5 py-2 bg-[#111111] text-white rounded-full font-bold text-[13px] shadow-[inset_0_3px_6px_rgba(255,255,255,0.2),_0_6px_16px_rgba(0,0,0,0.3)] hover:bg-black transition-all transform hover:-translate-y-[1px]">
          Offer Activated
        </button>
      </div>
    </motion.div>
  );
}

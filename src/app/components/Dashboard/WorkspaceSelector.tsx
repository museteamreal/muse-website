import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function WorkspaceSelector() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center w-full mt-[80px] mb-8 z-10 relative"
    >
      <button 
        className="liquid-glass flex items-center gap-3 px-5 py-2.5 rounded-full transition-transform duration-300"
      >
        {/* Colorful Gradient Orb */}
        <div 
          className="w-5 h-5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          style={{
            background: 'linear-gradient(135deg, #ff4b2b, #ff8e53, #8aff8a)',
          }}
        />
        
        <span 
          className="text-white font-semibold text-[15px] tracking-tight"
          style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}
        >
          MUSE Workspace
        </span>

        <ChevronDown className="w-4 h-4 text-white/70 ml-1" />
      </button>
    </motion.div>
  );
}

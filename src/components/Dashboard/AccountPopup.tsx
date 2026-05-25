import { User, Settings, Languages, HelpCircle, Handshake, LogOut, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AccountPopup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute bottom-full left-0 mb-2 w-[240px] bg-white rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-200 z-50 overflow-hidden font-sans"
    >
      <div className="p-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#e8eff5] text-[#557799] flex items-center justify-center font-semibold text-sm shrink-0">
            P
          </div>
          <div className="flex flex-col truncate">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight truncate">Piyush Chakraborty</h3>
            <p className="text-[12px] text-gray-500 truncate">piyushkunx@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-100 w-full" />

      <div className="py-1.5">
        <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors text-left group">
          <User className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-900" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">View profile</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors text-left group">
          <Settings className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-900" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">Account settings</span>
        </button>
        <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors text-left group">
          <div className="flex items-center gap-3">
            <Languages className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-900" strokeWidth={1.5} />
            <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">Language</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" />
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors text-left group">
          <HelpCircle className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-900" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">Help & support</span>
        </button>
      </div>

      <div className="h-[1px] bg-gray-100 w-full" />

      <div className="py-1.5">
        <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors text-left group">
          <Handshake className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-900" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">Become an affiliate</span>
        </button>
      </div>

      <div className="h-[1px] bg-gray-100 w-full" />

      <div className="py-1.5">
        <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition-colors text-left group">
          <LogOut className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-900" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">Log out</span>
        </button>
      </div>
    </motion.div>
  );
}

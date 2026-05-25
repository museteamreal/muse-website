import { Info, Diamond, Check, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WorkspacePopup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: 'blur(4px)', scale: 0.95 }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, y: -10, filter: 'blur(4px)', scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-200 z-50 overflow-hidden font-sans"
    >
      <div className="p-3">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg">
            Pw
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 leading-tight">Piyush's Workspace</h3>
            <p className="text-[13px] text-gray-500">1 member</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mb-2">
          <button className="flex-1 py-1.5 px-3 border border-gray-200 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Settings
          </button>
          <button className="flex-1 py-1.5 px-3 border border-gray-200 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Invite members
          </button>
        </div>
      </div>

      <div className="h-[1px] bg-gray-100 w-full" />

      {/* Credit Usage */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-0.5">
          <h4 className="text-[14px] font-semibold text-gray-900">Credit usage</h4>
          <Info className="w-4 h-4 text-blue-400" />
        </div>
        <p className="text-[12px] text-gray-500 mb-3">Renews at 6/1/26 | 12:00 AM UTC</p>

        {/* Message Credits */}
        <div className="mb-2">
          <div className="flex items-center justify-between text-[13px] mb-1.5">
            <span className="font-medium text-gray-800">Message credits</span>
            <span className="text-gray-500">0/25</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gray-300 w-0 rounded-full" />
          </div>
          <p className="text-[12px] text-gray-500 mt-1.5">Daily limit: 0/5</p>
        </div>

        {/* Integration Credits */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-[13px] mb-1.5 mt-2">
            <span className="font-medium text-gray-800">Integration credits</span>
            <span className="text-gray-500">0/100</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gray-300 w-0 rounded-full" />
          </div>
        </div>

        {/* Upgrade Button */}
        <button className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-[#fffaf5] border border-[#ffecd1] text-[#ff7733] rounded-lg text-[13px] font-semibold hover:bg-[#fff0e0] transition-colors">
          <Diamond className="w-4 h-4" />
          Upgrade your plan
        </button>
      </div>

      <div className="h-[1px] bg-gray-100 w-full" />

      {/* My Workspaces */}
      <div className="p-3">
        <h4 className="text-[12px] text-gray-500 mb-2">My workspaces</h4>
        <button className="w-full flex items-center justify-between p-1 hover:bg-gray-50 rounded-md transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-semibold">
              Pw
            </div>
            <span className="text-[13px] font-medium text-gray-800">Piyush's Workspace</span>
          </div>
          <Check className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
        </button>
      </div>

      <div className="h-[1px] bg-gray-100 w-full" />

      {/* Create New Workspace */}
      <div className="p-2">
        <button className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors">
          <div className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-gray-500 bg-white">
            <Plus className="w-4 h-4" strokeWidth={1.5} />
          </div>
          <span className="text-[13px] font-medium text-gray-800">Create new workspace</span>
        </button>
      </div>
    </motion.div>
  );
}

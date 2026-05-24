import { useState } from 'react';
import { Layers, Smartphone, AppWindow, Paperclip, Sparkles, ChevronDown, Globe, SlidersHorizontal, Mic, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PromptInterface() {
  const [activeTab, setActiveTab] = useState('fullstack');

  return (
    <div className="w-full max-w-[900px] mx-auto font-['Inter',sans-serif]">
      
      {/* Tabs */}
      <div className="flex items-end pl-1">
        
        {/* Tab 1: Full Stack App */}
        <button 
          onClick={() => setActiveTab('fullstack')}
          className={`relative flex items-center gap-2 px-5 py-3 rounded-t-2xl border-t border-l border-r transition-all duration-300 z-10 ${
            activeTab === 'fullstack' 
              ? 'bg-white border-[#c0e0fc] text-[#1c2b33]' 
              : 'bg-white/40 border-transparent text-white hover:bg-white/60'
          }`}
          style={{ 
            marginBottom: activeTab === 'fullstack' ? '-1px' : '0'
          }}
        >
          <Layers className="w-4 h-4" />
          <span className="font-semibold text-[14px]">Full Stack App</span>
        </button>

        {/* Tab 2: Mobile App */}
        <button 
          onClick={() => setActiveTab('mobile')}
          className={`relative flex items-center gap-2 px-5 py-3 rounded-t-2xl border-t border-l border-r transition-all duration-300 ml-1 z-10 ${
            activeTab === 'mobile' 
              ? 'bg-white border-[#c0e0fc] text-[#1c2b33]' 
              : 'bg-white/40 border-transparent text-white hover:bg-white/60'
          }`}
          style={{ 
            marginBottom: activeTab === 'mobile' ? '-1px' : '0'
          }}
        >
          <Smartphone className="w-4 h-4" />
          <span className="font-semibold text-[14px]">Mobile App</span>
        </button>

        {/* Tab 3: Landing Page */}
        <button 
          onClick={() => setActiveTab('landing')}
          className={`relative flex items-center gap-2 px-5 py-3 rounded-t-2xl border-t border-l border-r transition-all duration-300 ml-1 z-10 ${
            activeTab === 'landing' 
              ? 'bg-white border-[#c0e0fc] text-[#1c2b33]' 
              : 'bg-white/40 border-transparent text-white hover:bg-white/60'
          }`}
          style={{ 
            marginBottom: activeTab === 'landing' ? '-1px' : '0'
          }}
        >
          <AppWindow className="w-4 h-4" />
          <span className="font-semibold text-[14px]">Landing Page</span>
        </button>
      </div>

      {/* Main Prompt Box */}
      <motion.div 
        className="relative w-full bg-white rounded-2xl rounded-tl-none border border-[#c0e0fc] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex flex-col z-0"
        style={{ minHeight: '180px' }}
        layout
      >
        <textarea 
          placeholder="Build me a SaaS app for..."
          className="w-full flex-1 resize-none outline-none text-[18px] text-gray-700 placeholder:text-gray-300 bg-transparent pt-2 px-1"
        />

        {/* Bottom Actions */}
        <div className="flex items-center justify-between mt-8">
          
          {/* Left Actions */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
              <Paperclip className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </button>
            <button className="h-9 px-4 flex items-center gap-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <Sparkles className="w-4 h-4 text-[#f06e53]" />
              <span className="text-[14px] font-medium">Claude 4.7 Opus</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="h-9 px-4 flex items-center gap-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
              <Globe className="w-4 h-4" />
              <span className="text-[14px] font-medium">Public</span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
              <Mic className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0f0f0] text-gray-700 hover:bg-[#e4e4e4] transition-colors ml-1">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Suggestion Cards */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <motion.button 
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-[10px] shadow-sm text-gray-600 hover:bg-white hover:shadow-md transition-all duration-200"
        >
          <Layers className="w-4 h-4 opacity-70" />
          <span className="text-[13px] font-semibold">My Counter Part</span>
        </motion.button>
        
        <motion.button 
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-[10px] shadow-sm text-gray-600 hover:bg-white hover:shadow-md transition-all duration-200"
        >
          <Layers className="w-4 h-4 opacity-70" />
          <span className="text-[13px] font-semibold">Bill Generator</span>
        </motion.button>
        
        <motion.button 
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-[10px] shadow-sm text-gray-600 hover:bg-white hover:shadow-md transition-all duration-200"
        >
          <Layers className="w-4 h-4 opacity-70" />
          <span className="text-[13px] font-semibold">Word of the Day</span>
        </motion.button>
      </div>

    </div>
  );
}

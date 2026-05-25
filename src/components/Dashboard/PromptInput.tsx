import { Plus, Paperclip, SlidersHorizontal, Mic, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function PromptInput() {
  const [isPlanMode, setIsPlanMode] = useState(false);

  return (
    <div className="w-full max-w-[760px] mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-3 border border-gray-100 flex flex-col">
      <textarea 
        className="w-full resize-none outline-none text-lg text-gray-800 placeholder-gray-400 p-2 h-[80px]"
        placeholder="Describe the app you want to create..."
      />
      
      <div className="flex items-center justify-between mt-2">
        {/* Left Icons */}
        <div className="flex items-center gap-1.5">
          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100">
            <Plus className="w-4 h-4" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100">
            <Paperclip className="w-4 h-4" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100">
            <SlidersHorizontal className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Plan Toggle */}
          <div className="flex items-center gap-2 mr-2">
            <span className="text-sm font-medium text-gray-700">Plan</span>
            <button 
              className={`w-9 h-5 rounded-full relative transition-colors duration-200 ${isPlanMode ? 'bg-orange-500' : 'bg-gray-200'}`}
              onClick={() => setIsPlanMode(!isPlanMode)}
            >
              <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow-sm ${isPlanMode ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>

          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
            <Mic className="w-5 h-5" strokeWidth={2} />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed">
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

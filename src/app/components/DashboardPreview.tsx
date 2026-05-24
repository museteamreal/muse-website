
import { ChevronDown, TrendingDown, TrendingUp, X } from 'lucide-react';
import Gauge from './Gauge';

export default function DashboardPreview() {
  return (
    <div className="px-3 sm:px-4 mt-10 sm:mt-16 pb-12 w-full max-w-[880px] mx-auto relative z-10">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full shadow-xl border border-white/40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Card 1 - Clicks */}
          <div className="bg-white rounded-2xl p-5 flex flex-col shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#fb8500] font-medium text-[13px]">Clicks</span>
              <span className="text-neutral-400 text-[13px] ml-auto">This Month</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[28px] font-semibold text-neutral-900">6,896</span>
              <div className="flex items-center gap-1 bg-red-50 text-red-600 rounded-full px-2 py-0.5 text-[11px] font-medium">
                <TrendingDown className="w-3 h-3" />
                -3,382 (33%)
              </div>
            </div>
            <div className="text-[11px] text-neutral-400 mt-1">Compared to yesterday</div>
            
            <div className="mt-4 text-center text-[11px] font-medium text-neutral-800">
              Month Target achieved
            </div>
            <div className="mt-2">
              <Gauge value={92} color="#fb8500" showLabels min="389K" max="425K" />
            </div>
            
            <div className="mt-auto pt-4">
              <div className="bg-neutral-100 rounded-full p-1 flex">
                <div className="flex-1 text-center bg-white rounded-full py-1 text-[11px] font-medium text-neutral-800 shadow-sm">
                  Impressions
                </div>
                <div className="flex-1 text-center py-1 text-[11px] font-medium text-neutral-500">
                  Clicks
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Form */}
          <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-neutral-700 font-medium">Show figures for</label>
              <button className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-800">
                This month
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-neutral-700 font-medium">Compare period by</label>
              <button className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-800">
                Month-to-date (MTD)
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-neutral-700 font-medium">Ste targets (This month)</label>
              <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2">
                <span className="text-neutral-400 mr-2">#</span>
                <input type="text" defaultValue="10" className="w-full outline-none text-sm text-neutral-800" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] text-neutral-700 font-medium">Ste targets (This year)</label>
              <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2">
                <span className="text-neutral-400 mr-2">#</span>
                <input type="text" defaultValue="100" className="w-full outline-none text-sm text-neutral-800" />
              </div>
            </div>
            
            <div className="mt-auto pt-4 flex items-center">
              <button className="bg-[#fb8500] text-white rounded-lg px-5 py-2 text-[13px] font-medium hover:bg-[#e87800] transition-colors">
                Save
              </button>
              <button className="ml-4 text-neutral-500 underline text-[13px] hover:text-neutral-800 transition-colors">
                Cancel
              </button>
              <button className="ml-auto text-neutral-400 hover:text-neutral-700">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 3 - Video Starts */}
          <div className="bg-white rounded-2xl p-5 flex flex-col shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-[#fb8500] font-medium text-[13px]">Video Starts</span>
              <span className="text-neutral-400 text-[13px] ml-auto">today</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[28px] font-semibold text-neutral-900">0</span>
              <div className="flex items-center gap-1 bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5 text-[11px] font-medium">
                <TrendingUp className="w-3 h-3" />
                0
              </div>
            </div>
            <div className="text-[11px] text-neutral-400 mt-1">Compared to yesterday</div>
            
            <div className="mt-8">
              <Gauge value={68} color="#9ca3af" />
            </div>
            
            <div className="mt-auto pt-4">
              <div className="bg-neutral-100 rounded-full p-1 flex">
                <div className="flex-1 text-center py-1 text-[11px] font-medium text-neutral-500">
                  Video Clicks
                </div>
                <div className="flex-1 text-center bg-white rounded-full py-1 text-[11px] font-medium text-neutral-800 shadow-sm">
                  Video Starts
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

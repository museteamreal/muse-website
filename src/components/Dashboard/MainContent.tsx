import { Bot, BookOpen } from 'lucide-react';
import LandingChatbox from '../../app/components/LandingChatbox';
import AppCard from './AppCard';

export default function MainContent() {
  const tags = [
    "Tasks & Workflows",
    "CRM & Sales",
    "Content & Sites",
    "Finance",
    "Booking",
    "... More"
  ];

  return (
    <div className="flex-1 h-full flex flex-col relative overflow-y-auto bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 chat-scrollbar">

      {/* Top Section */}
      <div className="w-full flex flex-col items-center pt-16 md:pt-24 px-4 md:px-8 z-10 shrink-0 mb-20 lg:mb-32">

        {/* Glow Button using Tailwind */}
        <div className="relative p-[1.5px] overflow-hidden rounded-full mb-8 shadow-sm">
          <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(59,130,246,0.3)_40%,rgba(59,130,246,1)_50%,rgba(59,130,246,0.3)_60%,transparent_100%)]" />
          <button className="relative bg-white rounded-full flex items-center gap-2 px-5 py-2 text-xs md:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <Bot className="w-4 h-4 text-blue-600" />
            Try out the App Builder
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-10 text-center px-4 max-w-2xl leading-tight">
          What will you build next?
        </h1>

        {/* Chatbox Container - Fixed Width & Margin */}
        <div className="w-full max-w-[700px] mx-auto px-2 md:px-0 relative z-50">
          <LandingChatbox />
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 md:gap-3 mt-8 flex-wrap justify-center px-4">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="px-3 md:px-5 py-1.5 md:py-2.5 bg-white/60 backdrop-blur-md hover:bg-white rounded-full text-xs md:text-sm font-semibold text-gray-700 border border-white/50 shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Spacer to push bottom card down if screen is tall */}
      <div className="flex-1 min-h-[0px]"></div>

      {/* Bottom Section (Recent Apps) - Fixed padding/margin and size */}
      <div className="bg-white/80 backdrop-blur-xl rounded-[24px] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1000px] mx-auto p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60 flex flex-col z-10 shrink-0 mb-6 md:mb-8 min-h-[600px]">

        {/* Header/Tabs */}
        <div className="flex items-center justify-between mb-4 md:mb-5">
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-sm md:text-[15px] font-semibold text-gray-900 border-b-2 border-gray-900 pb-1">
              Recent apps
            </button>
            <button className="text-sm md:text-[15px] font-medium text-gray-500 hover:text-gray-900 pb-1">
              Templates
            </button>
          </div>
          <button className="text-xs md:text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center transition-colors">
            View all <span className="ml-1 text-lg leading-none">›</span>
          </button>
        </div>

        {/* App Cards List */}
        <div className="flex gap-4 overflow-x-auto pb-2 chat-scrollbar">
          <AppCard
            iconBgColor="bg-[#8b6bba]"
            icon={(
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            )}
            iconLabel="Aura 999+"
            title="Aura 999+"
            description="Elevate your life with Aura 999+: The ultimate..."
            editedAt="last month"
          />
          <AppCard
            iconBgColor="bg-[#ffffff] text-gray-800 border border-gray-100 shadow-sm"
            icon={<BookOpen className="w-8 h-8 text-yellow-600 mb-1" />}
            iconLabel=""
            title="LearnLink Connect"
            description="Learning Link Academy's student portal, designe..."
            editedAt="9 months ago"
          />
        </div>

      </div>
    </div>
  );
}

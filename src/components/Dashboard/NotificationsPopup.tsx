import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function NotificationsPopup() {
  const [activeTab, setActiveTab] = useState<'notifications' | 'news'>('notifications');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute bottom-full left-0 mb-2 w-[340px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-200 z-50 overflow-hidden font-sans flex flex-col"
      style={{ maxHeight: '500px' }}
    >
      {/* Tabs Header */}
      <div className="p-2 shrink-0">
        <div className="flex bg-[#f3f4f6] rounded-xl p-1 relative">
          {/* Animated Background for active tab */}
          <div 
            className="absolute inset-y-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm transition-all duration-300 ease-out"
            style={{ 
              left: activeTab === 'notifications' ? '4px' : 'calc(50%)',
            }}
          />
          
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 py-1.5 text-[13px] font-medium z-10 transition-colors ${activeTab === 'notifications' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Notifications
          </button>
          <button 
            onClick={() => setActiveTab('news')}
            className={`flex-1 py-1.5 text-[13px] font-medium z-10 transition-colors ${activeTab === 'news' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Latest news
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto chat-scrollbar relative">
        <AnimatePresence mode="wait">
          {activeTab === 'notifications' ? (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center py-12 min-h-[160px]"
            >
              <p className="text-[14px] text-gray-500 font-medium">No notifications yet</p>
            </motion.div>
          ) : (
            <motion.div
              key="news"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col p-3 gap-6"
            >
              {/* News Item 1 */}
              <div className="flex flex-col gap-3 group cursor-pointer">
                <div className="w-full h-[180px] rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop" 
                    alt="News feature" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-bold text-gray-900 leading-tight flex items-start gap-1">
                    More design tools without leaving the Builder
                    <ArrowUpRight className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2} />
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Generate custom images and videos, redesign sites in one click, annotate and collaborate with your teammates on a shared canvas, and refine themes and colors inline. Every project is tailor-made whether you're building for a client or yourself. Simply prompt the chat and take your designs from solid to showstopping.
                  </p>
                  <span className="text-[12px] text-gray-400 mt-1">4 days ago</span>
                </div>
              </div>

              {/* News Item 2 (Mock) */}
              <div className="flex flex-col gap-3 group cursor-pointer border-t border-gray-100 pt-6">
                <div className="w-full h-[180px] rounded-xl overflow-hidden bg-[#e0f0f5] border border-gray-100 flex items-center justify-center">
                   <div className="w-32 h-20 bg-white rounded-xl shadow-sm border border-gray-200"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-bold text-gray-900 leading-tight flex items-start gap-1">
                    New Apps Dashboard Experience
                    <ArrowUpRight className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2} />
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    We've completely redesigned the dashboard to help you find and manage your apps faster than ever before.
                  </p>
                  <span className="text-[12px] text-gray-400 mt-1">1 week ago</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

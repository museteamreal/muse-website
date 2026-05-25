import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, X } from 'lucide-react';
import { mockTemplates } from './Templates';

interface TemplateDetailsModalProps {
  templateId: string;
}

export default function TemplateDetailsModal({ templateId }: TemplateDetailsModalProps) {
  const navigate = useNavigate();
  const template = mockTemplates.find(t => t.id === templateId);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/dashboard/templates');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  if (!template) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center font-sans">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-[4px]"
          onClick={() => navigate('/dashboard/templates')}
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 300,
            mass: 0.8
          }}
          className="relative w-[1000px] max-w-[95vw] h-[580px] max-h-[90vh] bg-white rounded-[32px] shadow-2xl flex flex-col overflow-hidden z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Content Area */}
          <div className="flex flex-1 overflow-hidden p-6 gap-8">
            {/* Left Column - Image Container */}
            <div className="w-[55%] h-full relative rounded-[20px] overflow-hidden border border-gray-200/60 shadow-sm shrink-0">
              <img 
                src={template.image} 
                alt={template.title} 
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlays to match image */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Right Column - Details */}
            <div className="flex-1 flex flex-col relative overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
              
              {/* Close Button */}
              <div className="flex justify-end mb-1 sticky top-0 right-0 bg-white/90 backdrop-blur-sm z-10 pb-2">
                <button 
                  onClick={() => navigate('/dashboard/templates')}
                  className="p-1 text-gray-400 hover:text-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Title */}
              <h2 className="text-[28px] font-semibold text-gray-900 leading-tight mb-4">
                {template.title}
              </h2>
              
              {/* Author & Usages */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-[12px] font-semibold text-gray-700 bg-white shadow-sm shrink-0">
                  {template.author.charAt(0).toUpperCase()}
                </div>
                <div className="text-[14.5px] text-gray-600">
                  by <span className="text-gray-800 font-medium">{template.author}</span> <span className="mx-1.5 text-gray-400">•</span> {template.usages} usages
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mb-2">
                <button className="py-2.5 px-6 bg-[#0f0f0f] hover:bg-black text-white text-[15px] font-semibold rounded-xl flex-1 shadow-sm transition-colors">
                  {template.price === 'Free' ? 'Get for Free' : `Purchase for ${template.price}`}
                </button>
                <button className="py-2.5 px-5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm shrink-0 transition-colors">
                  View app <ExternalLink className="w-[18px] h-[18px]" strokeWidth={2} />
                </button>
              </div>
              
              {/* Note */}
              <p className="text-[12px] text-gray-400 mb-6">
                Payment goes entirely to the creator
              </p>

              {/* Separator */}
              <div className="w-full h-px bg-gray-100 mb-5 shrink-0"></div>

              {/* About Section */}
              <div className="shrink-0 pb-6">
                <h3 className="text-[17px] font-semibold text-gray-900 mb-3">About this app</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-[#f4f4f5] text-gray-600 text-[13px] font-medium rounded-md border border-gray-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="text-[14px] text-gray-500 leading-[1.65] whitespace-pre-wrap">
                  {template.description}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Terms of use */}
          <div className="w-full py-3 bg-[#f3f7f9] border-t border-gray-100 flex items-center justify-center shrink-0">
            <a href="#" className="text-[13.5px] text-gray-500 hover:text-gray-800 transition-colors">
              Terms of use
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

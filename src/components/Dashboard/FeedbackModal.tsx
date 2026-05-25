import { X, ThumbsDown, Frown, Meh, Smile, Heart, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState('');

  const ratings = [
    { id: 'bad', label: 'Bad', icon: ThumbsDown },
    { id: 'poor', label: 'Poor', icon: Frown },
    { id: 'okay', label: 'Okay', icon: Meh },
    { id: 'good', label: 'Good', icon: Smile },
    { id: 'love', label: 'Love it', icon: Heart },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center font-sans">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 m-4"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold text-gray-900 mb-1">How's your experience?</h2>
            <p className="text-[14px] text-gray-500 mb-8">Your feedback shapes what we build next.</p>

            <div className="flex justify-between items-center mb-8 px-2">
              {ratings.map((rating) => {
                const isSelected = selectedRating === rating.id;
                const Icon = rating.icon;
                return (
                  <div key={rating.id} className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => setSelectedRating(rating.id)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-gray-900 text-white shadow-md scale-110' 
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={isSelected ? 2 : 1.5} />
                    </button>
                    <span className={`text-[12px] font-medium ${isSelected ? 'text-gray-900' : 'text-gray-500'}`}>
                      {rating.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Tell us what's on your mind..."
              className="w-full h-32 px-4 py-3 bg-white border border-gray-200 rounded-xl resize-none focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[14px] text-gray-800 placeholder:text-gray-400 mb-4"
            />

            <button 
              disabled={!selectedRating && !feedbackText}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${
                selectedRating || feedbackText 
                  ? 'bg-gray-900 text-white hover:bg-gray-800' 
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
              Send feedback
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

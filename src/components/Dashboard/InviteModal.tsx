import { X, Copy, Share2, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InviteModal({ isOpen, onClose }: InviteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center font-sans p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[800px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex"
          >
            {/* Left side Gradient Blur Image Area */}
            <div className="hidden md:block w-[40%] h-full relative overflow-hidden bg-gradient-to-br from-[#ffefdd] via-[#ffc699] to-[#ff9855]">
              {/* Decorative blurs */}
              <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] bg-[#b4d8ff] rounded-full mix-blend-multiply filter blur-[80px] opacity-60" />
              <div className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[80%] bg-[#ff9977] rounded-full mix-blend-multiply filter blur-[80px] opacity-60" />
              <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-[#fff] rounded-full mix-blend-overlay filter blur-[40px] opacity-40" />
            </div>

            {/* Right side Content */}
            <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-center bg-[#fcfcfd]">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">Invite Friends &<br/>Earn Credits</h2>
              <p className="text-[14px] text-gray-600 mb-8 leading-relaxed max-w-[340px]">
                Share your link and earn 10 credits when friends publish their first app
              </p>

              {/* Referral Link Area */}
              <div className="flex items-center w-full max-w-[400px] bg-white border border-gray-200 rounded-xl p-1 mb-8 shadow-sm">
                <input 
                  type="text" 
                  readOnly 
                  value="https://app.base44.com/register?ref=GAI5BL8WTPW"
                  className="flex-1 bg-transparent px-3 text-[13px] text-gray-500 font-mono outline-none truncate"
                />
                <button className="flex items-center gap-1.5 bg-black text-white px-5 py-2 rounded-lg text-[13px] font-semibold hover:bg-gray-800 transition-colors shrink-0">
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </button>
              </div>

              {/* How it Works */}
              <div className="flex flex-col gap-5 max-w-[400px]">
                <h4 className="text-[14px] font-medium text-gray-500 mb-1">How it Works</h4>
                
                <div className="flex items-start gap-4">
                  <Share2 className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-[14px] text-gray-800 font-medium">Share your unique referral link with friends</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Gift className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-[14px] text-gray-800 font-medium">They get <span className="font-bold">10 credits</span> when they sign up</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Gift className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-[14px] text-gray-800 font-medium">You earn <span className="font-bold">10 credits</span> when they publish their first app</p>
                </div>
              </div>

              {/* Referrals Count */}
              <div className="mt-auto pt-8">
                <p className="text-[14px] text-gray-500 font-medium">Your Referrals (0/5)</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

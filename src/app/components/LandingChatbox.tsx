import React, { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { Plus, Mic, ArrowUp, ChevronDown, Check, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TYPEWRITER_PHRASES = [
  "a web app that...",
  "a portfolio website...",
  "a landing page for my...",
  "a blog about my...",
  "an admin dashboard...",
  "a SaaS platform..."
];

export default function LandingChatbox() {
  const [openPopup, setOpenPopup] = useState<'build' | 'plus' | 'mic' | null>(null);
  const [popupPlacement, setPopupPlacement] = useState<'top' | 'bottom'>('top');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Chatbox interactive state
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [mode, setMode] = useState<'build' | 'plan'>('build');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Typewriter state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(true);

  // Close popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenPopup(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut for toggling mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setMode(prev => prev === 'build' ? 'plan' : 'build');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Typewriter effect
  useEffect(() => {
    setShowTypewriter(text.length === 0);
  }, [text]);

  useEffect(() => {
    if (text.length > 0) return;

    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let typingSpeed = isDeleting ? 30 : 60;
    
    // Pause at the end of typing or deleting
    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // Pause before deleting
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, text.length]);

  const togglePopup = (popup: 'build' | 'plus' | 'mic', event: React.MouseEvent) => {
    if (openPopup === popup) {
      setOpenPopup(null);
      return;
    }
    
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    if (rect.top < 300) {
      setPopupPlacement('bottom');
    } else {
      setPopupPlacement('top');
    }
    
    setOpenPopup(popup);
  };

  // Auto-resize textarea
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  };

  // Mock add image
  const handleAddImage = () => {
    if (images.length >= 4) return;
    const dummyImage = "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=200&auto=format&fit=crop";
    setImages(prev => [...prev, dummyImage]);
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setImages(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div ref={containerRef} className="w-full max-w-[700px] bg-[#fcfcfc] rounded-3xl p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),0_0_10px_0_rgba(0,0,0,0.03)] border border-neutral-200/50 flex flex-col items-start gap-4 relative backdrop-blur-xl transition-all duration-300">
      
      {/* Image Previews */}
      {images.length > 0 && (
        <div className="w-full flex flex-wrap gap-3 px-2 pt-2">
          <AnimatePresence>
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-neutral-200"
              >
                <img src={img} alt="Attached preview" className="w-full h-full object-cover" />
                <button 
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 w-4 h-4 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Textarea Container */}
      <div className="w-full flex justify-start px-2 relative mt-2 mb-4">
        {/* Typewriter Placeholder */}
        {showTypewriter && (
          <div className="absolute top-0 left-2 pointer-events-none text-[16px] font-medium" style={{ color: '#a3a3a3' }}>
            Ask Muse to create <span className="text-neutral-500">{TYPEWRITER_PHRASES[phraseIndex].substring(0, charIndex)}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-4 bg-neutral-400 ml-0.5 align-middle"
            />
          </div>
        )}
        
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          placeholder=""
          className={`w-full bg-transparent outline-none text-[16px] text-neutral-800 font-medium resize-none chat-scrollbar ${text.length > 0 ? 'fade-bottom-mask' : ''}`}
          style={{ 
            minHeight: '24px', 
            maxHeight: '200px', 
            height: '24px' 
          }}
        />
      </div>
      
      <div className="w-full flex items-center justify-between px-2 pb-1 relative">
        <div className="flex items-center gap-2">
          {/* Plus Button */}
          <div className="relative">
            <button 
              onClick={(e) => togglePopup('plus', e)}
              className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center transition-colors ${openPopup === 'plus' ? 'bg-neutral-100 text-black' : 'text-neutral-400 hover:bg-neutral-50'}`}
            >
              <Plus className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openPopup === 'plus' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute ${popupPlacement === 'top' ? 'bottom-[calc(100%+12px)] origin-bottom-left' : 'top-[calc(100%+12px)] origin-top-left'} left-0 w-[240px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-neutral-100 p-4 z-50`}
                >
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[14px] font-bold text-black">Unlock more features</h4>
                    <p className="text-[13px] leading-relaxed text-neutral-600">
                      Attach files and images, apply themes, connect integrations, and more by logging in.
                    </p>
                    <div className="flex justify-end mt-1">
                      <button className="bg-black text-white px-4 py-2 rounded-full text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-sm">
                        Log in
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Add Image Button */}
          <button 
            onClick={handleAddImage}
            disabled={images.length >= 4}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${images.length >= 4 ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-400 hover:text-black hover:bg-neutral-50'}`}
          >
            <ImageIcon className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Build Button */}
          <div className="relative">
            <button 
              onClick={(e) => togglePopup('build', e)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ${openPopup === 'build' ? 'bg-neutral-100 text-black' : 'text-neutral-500 hover:text-black capitalize'}`}
            >
              {mode} <ChevronDown className="w-3.5 h-3.5" />
            </button>
            
            <AnimatePresence>
              {openPopup === 'build' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute ${popupPlacement === 'top' ? 'bottom-[calc(100%+12px)] origin-bottom-right' : 'top-[calc(100%+12px)] origin-top-right'} right-0 w-[200px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-hidden z-50`}
                >
                  <div className="flex flex-col p-1">
                    <button 
                      onClick={() => { setMode('build'); setOpenPopup(null); }}
                      className="flex items-start gap-2.5 w-full text-left p-2.5 hover:bg-neutral-50 rounded-xl transition-colors group"
                    >
                      <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center mt-0.5">
                        {mode === 'build' && <Check className="w-3.5 h-3.5 text-black" />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-semibold text-black">Build</span>
                        <span className="text-[12px] text-neutral-500">Make changes directly</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => { setMode('plan'); setOpenPopup(null); }}
                      className="flex items-start gap-2.5 w-full text-left p-2.5 hover:bg-neutral-50 rounded-xl transition-colors group"
                    >
                      <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center mt-0.5">
                        {mode === 'plan' && <Check className="w-3.5 h-3.5 text-black" />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-semibold text-black">Plan</span>
                        <span className="text-[12px] text-neutral-500">Discuss before building</span>
                      </div>
                    </button>
                  </div>
                  <div className="border-t border-neutral-100 bg-[#fafafa] p-3 flex items-center justify-between">
                    <span className="text-[12px] text-neutral-500 font-medium">Toggle with</span>
                    <div className="flex gap-1">
                      <span className="px-1.5 py-0.5 rounded-md border border-neutral-200 bg-white text-[11px] font-medium text-neutral-600 shadow-sm">Alt</span>
                      <span className="px-1.5 py-0.5 rounded-md border border-neutral-200 bg-white text-[11px] font-medium text-neutral-600 shadow-sm">P</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mic Button */}
          <div className="relative">
            <button 
              onClick={(e) => togglePopup('mic', e)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${openPopup === 'mic' ? 'bg-neutral-100 text-black' : 'text-neutral-400 hover:text-black'}`}
            >
              <Mic className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openPopup === 'mic' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: 10, filter: 'blur(4px)', scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute ${popupPlacement === 'top' ? 'bottom-[calc(100%+12px)] origin-bottom-right' : 'top-[calc(100%+12px)] origin-top-right'} right-0 w-[240px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-neutral-100 p-4 z-50`}
                >
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[14px] font-bold text-black">Unlock more features</h4>
                    <p className="text-[13px] leading-relaxed text-neutral-600">
                      Attach files and images, apply themes, connect integrations, and more by logging in.
                    </p>
                    <div className="flex justify-end mt-1">
                      <button className="bg-black text-white px-4 py-2 rounded-full text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-sm">
                        Log in
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${text.length > 0 || images.length > 0 ? 'bg-black text-white hover:bg-neutral-800' : 'bg-[#e5e5e5] text-white cursor-not-allowed'}`}>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}


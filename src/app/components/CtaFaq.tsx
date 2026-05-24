import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CtaFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "What is MUSE?", 
      answer: "MUSE is an AI-powered platform that helps you design, build, and launch modern web & mobile applications using advanced AI models — all from a single workspace." 
    },
    { 
      question: "Do I need coding experience to use MUSE?", 
      answer: "No. MUSE is designed for everyone — from beginners to professional developers. You can generate apps, interfaces, and workflows using simple prompts." 
    },
    { 
      question: "What are credits in MUSE?", 
      answer: "Credits are used whenever you generate apps, UI components, AI workflows, or use premium AI models. Different actions consume different amounts of credits depending on complexity." 
    },
    { 
      question: "Can I deploy apps built with MUSE?", 
      answer: "Yes. Paid plans allow you to build and deploy full web applications, use custom domains, and access private hosting features directly from MUSE." 
    },
    { 
      question: "Which AI models does MUSE support?", 
      answer: "MUSE supports multiple advanced AI models through one-click integration, giving you access to powerful generation, coding, and creative capabilities inside a single platform." 
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-neutral-900 py-20 max-[900px]:py-[60px]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1100px] w-full mx-auto px-5">
        <div className="grid grid-cols-[1.6fr_1fr] gap-[30px] items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
          {/* Left column */}
          <div 
            className="c5-animated-gradient rounded-[24px] py-20 px-10 text-white flex flex-col justify-center items-center text-center" 
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
          >
            <h2 className="font-normal leading-[1.1] mb-[15px]" style={{ fontSize: '3.5rem', letterSpacing: '-0.03em' }}>
              Ready to Build<br/>Without Limits?
            </h2>
            <p className="text-[0.9rem] mb-[30px] font-normal opacity-85">
              Create apps, websites, and AI-powered experiences faster with Muse.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px] font-medium hover:bg-black transition-all shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_inset_0_-4px_6px_rgba(0,0,0,0.6),_0_12px_24px_rgba(0,0,0,0.25)] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_inset_0_-2px_4px_rgba(0,0,0,0.6),_0_6px_12px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_inset_0_0_0_rgba(0,0,0,0.6)]">
              Start Building
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
            </button>
          </div>

                {/* Right column */}
                <div className="flex flex-col justify-center gap-3">
                  {faqs.map((faq, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <div 
                        key={index}
                        onClick={() => toggleFaq(index)}
                        className={`bg-white border rounded-[10px] py-[18px] px-5 cursor-pointer transition-all duration-200 ${isActive ? 'border-[#eaeaea]' : 'border-[#f0f0f0] hover:border-[#eaeaea]'}`}
                        style={{ boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.04)' : '0 2px 8px rgba(0,0,0,0.02)' }}
                      >
                        <div className="flex justify-between items-center font-normal text-[0.9rem] text-neutral-900">
                          {faq.question}
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </div>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-3 text-[0.9rem] text-[#666] leading-[1.6]">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
        </div>
      </div>
    </section>
  );
}

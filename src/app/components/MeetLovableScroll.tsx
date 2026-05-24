import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const steps = [
  {
    title: "Start with an idea",
    desc: "Describe the app or website you want to create or drop in screenshots and docs.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Watch it come to life",
    desc: "See your vision transform into a working prototype in real-time as AI builds it for you.",
    img: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Refine and ship",
    desc: "Iterate on your creation with simple feedback and deploy it to the world with one click.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function MeetLovableScroll({ scrollContainer }: { scrollContainer?: React.RefObject<HTMLElement> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    container: scrollContainer,
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveStep(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  });

  return (
    <section ref={containerRef} className="px-4 md:px-8 max-w-[1200px] mx-auto relative bg-white w-full mt-24" style={{ height: '200vh' }}>
      <div className="sticky top-[10vh] sm:top-[20vh] h-[80vh] sm:h-[60vh] flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 sm:mb-12">Meet Muse</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <div className="w-full bg-[#f6f5f1] rounded-[32px] aspect-[4/3] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
             {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="absolute inset-0 w-full h-full p-4 sm:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0, 
                    y: activeStep === index ? 0 : 20,
                    zIndex: activeStep === index ? 10 : 0,
                    pointerEvents: activeStep === index ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="w-full h-full rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden border border-neutral-100 bg-white">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
             ))}
          </div>
          
          {/* Text Side */}
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="transition-opacity duration-500 cursor-pointer"
                style={{ opacity: activeStep === index ? 1 : 0.3 }}
                onClick={() => setActiveStep(index)}
              >
                <h3 className="text-3xl font-bold mb-3 transition-colors duration-500" style={{ color: activeStep === index ? '#000' : '#666' }}>{step.title}</h3>
                <p className="text-xl text-neutral-600 transition-colors duration-500" style={{ color: activeStep === index ? '#404040' : '#888' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

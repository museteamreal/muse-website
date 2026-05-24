import { motion } from 'framer-motion';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import VideoBackground from '../components/Dashboard/VideoBackground';
import DashboardNav from '../components/Dashboard/DashboardNav';
import PromptInterface from '../components/PromptInterface';
import WorkspaceSelector from '../components/Dashboard/WorkspaceSelector';
import HeroBanner from '../components/Dashboard/HeroBanner';

export default function Dashboard() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);
  return (
    <div className="relative min-h-screen w-full">
      <VideoBackground />
      
      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        <div className="w-full flex flex-col min-h-max">
          <DashboardNav />
          
          <main className="flex-1 flex flex-col items-center px-[120px]">
            <HeroBanner />
            <WorkspaceSelector />

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-black"
            style={{
              fontFamily: "'Schibsted Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 56px)',
              letterSpacing: '-1.5px',
              lineHeight: 1.1
            }}
          >
            What are we working on Today?
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-center text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '18px',
              letterSpacing: '-0.2px',
              maxWidth: '650px'
            }}
          >
            Design powerful apps, websites, and products through natural AI conversations.
          </motion.p>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-[50px] w-full flex justify-center pb-20"
          >
            <PromptInterface />
          </motion.div>

          </main>
        </div>
      </div>
    </div>
  );
}

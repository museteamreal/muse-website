import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../components/Navbar';
import VideoShowcase from '../components/VideoShowcase';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';
import CoreFeatures from '../components/CoreFeatures';
import Pricing from '../components/Pricing';
import CtaFaq from '../components/CtaFaq';
import FooterParallax from '../components/FooterParallax';
import LandingChatbox from '../components/LandingChatbox';
import LogosMarquee from '../components/LogosMarquee';
import MeetLovableScroll from '../components/MeetLovableScroll';
import '../../styles/fonts.css';

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showcaseProgress, setShowcaseProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: scrollContainerRef.current,
        content: scrollContainerRef.current.firstElementChild as HTMLElement,
        lerp: 0.08,
        smoothWheel: true,
      }
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  const handleScroll = (e: ReactUIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 50);

    // Calculate showcase scroll progress
    if (showcaseRef.current && scrollContainerRef.current) {
      const wrapper = scrollContainerRef.current;
      const showcase = showcaseRef.current;
      const wrapperRect = wrapper.getBoundingClientRect();
      const showcaseRect = showcase.getBoundingClientRect();
      
      const viewportBottom = wrapperRect.bottom;
      const showcaseTop = showcaseRect.top;
      const showcaseHeight = showcaseRect.height;
      
      const distanceFromBottom = viewportBottom - showcaseTop;
      const totalTravel = wrapperRect.height * 0.6 + showcaseHeight * 0.5;
      
      const progress = Math.max(0, Math.min(1, distanceFromBottom / totalTravel));
      setShowcaseProgress(progress);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4 font-['Inter',sans-serif] relative">
      {/* Hero container */}
      <div className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl">
        
        {/* Background Video */}
        <video
          src="https://res.cloudinary.com/dxwfnfcpk/video/upload/v1779305769/vid_online-video-cutter.com_cvqv1v.mp4"
          poster="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=60"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // @ts-ignore
          disableRemotePlayback
          webkit-playsinline="true"
          x5-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none"></div>

        {/* Foreground Content Wrapper */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar"
          onScroll={handleScroll}
        >
          {/* Lenis Content Wrapper */}
          <div className="w-full flex flex-col min-h-max">
            
            <Navbar isScrolled={isScrolled} />
            
            <div className="flex flex-col items-center px-4 pt-4 sm:pt-8 pb-8 sm:pb-12 text-center w-full">

              {/* Headline */}
              <AnimatedHeading 
                text={"Create Beyond the\nLimits"}
                className="mt-5 sm:mt-6 max-w-4xl text-neutral-900"
                style={{
                  fontSize: 'clamp(33px, 7.8vw, 69px)',
                  lineHeight: 1.05,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                }}
                lineStyles={[
                  {},
                  { fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }
                ]}
                delay={200}
              />

              {/* Subtitle */}
              <FadeIn delay={1200} duration={800}>
                <p 
                  className="mt-4 sm:mt-6 text-neutral-700 px-2 max-w-xl mx-auto"
                  style={{
                    fontSize: 'clamp(13px, 3.5vw, 16px)'
                  }}
                >
                  AI-powered tools to build, design, and launch ideas faster than ever.
                </p>
              </FadeIn>

              {/* CTA buttons */}
              {/* CTA buttons */}
              <FadeIn delay={1600} duration={800} className="w-full flex justify-center mt-8">
                <LandingChatbox />
              </FadeIn>
            </div>
            
            <FadeIn delay={2000} duration={1000}>
              <div ref={showcaseRef}>
                <VideoShowcase scrollProgress={showcaseProgress} />
              </div>
            </FadeIn>
            
            <div className="bg-white w-full flex flex-col relative z-10 pt-12">
              <LogosMarquee />
              <MeetLovableScroll scrollContainer={scrollContainerRef as React.RefObject<HTMLElement>} />

              <CoreFeatures />
              <Pricing />
              <CtaFaq />

              {/* Ready to build */}
              <section className="relative py-32 px-4 md:px-8 w-full overflow-hidden flex flex-col items-center justify-center text-center mt-12 bg-[#fcfbf8]">
                <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Ready to build?</h2>
                  <LandingChatbox />
                </div>
              </section>

              <FooterParallax scrollContainer={scrollContainerRef} />
            </div>
            
          </div>
        </div>
      </div>
    </div>);
}

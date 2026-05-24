import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../components/Navbar';
import FooterParallax from '../components/FooterParallax';
import '../../styles/fonts.css';

// Section definitions
const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "types-of-cookies", title: "Types of Cookies" },
  { id: "how-we-use-cookies", title: "How We Use Cookies" },
  { id: "third-party-cookies", title: "Third-Party Cookies" },
  { id: "managing-preferences", title: "Managing Preferences" },
  { id: "analytics-tracking", title: "Analytics & Tracking" },
  { id: "data-privacy", title: "Data Privacy Connection" },
  { id: "policy-updates", title: "Updates to This Policy" },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function Cookies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    // Active section logic
    const sectionElements = sections.map(s => document.getElementById(s.id));
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const el = sectionElements[i];
      if (el && (el.offsetTop - 150) <= scrollTop) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4 font-['Inter',sans-serif] relative">
      <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-sm">
        
        <div 
          ref={scrollContainerRef}
          className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-y-auto overflow-x-hidden no-scrollbar scroll-smooth"
          onScroll={handleScroll}
        >
          <div className="w-full flex flex-col min-h-max bg-[#fafcff] pb-0">
            
            <Navbar isScrolled={isScrolled} isPricingPage={true} />

            {/* Hero Section */}
            <div className="flex flex-col items-center px-4 pt-40 pb-20 text-center w-full mx-auto relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-[100%] bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] opacity-[0.35] blur-[80px] animate-[pulse_8s_ease-in-out_infinite_alternate]" />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block py-1.5 px-4 rounded-full bg-white border border-neutral-200 text-[12px] font-bold tracking-widest text-slate-500 uppercase shadow-sm mb-6"
                >
                  Cookies
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-neutral-900 tracking-tight font-medium mb-6"
                  style={{
                    fontSize: 'clamp(42px, 6vw, 72px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em'
                  }}
                >
                  Cookie Policy
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-neutral-600 max-w-xl mx-auto leading-relaxed text-[17px]"
                >
                  Learn how MUSE uses cookies and tracking technologies to improve your experience.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 text-sm text-neutral-400 font-medium"
                >
                  Last Updated: May 24, 2026
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-16 relative z-10">
              
              {/* Sticky Sidebar Nav */}
              <div className="hidden lg:block w-[280px] shrink-0">
                <div className="sticky top-32 flex flex-col gap-2 border-l border-neutral-200 pl-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left text-[14px] transition-all duration-300 ${
                        activeSection === section.id 
                          ? 'font-medium text-[#fb8500] -ml-[17px] pl-4 border-l-2 border-[#fb8500]' 
                          : 'font-normal text-neutral-500 hover:text-neutral-800 hover:translate-x-1'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 max-w-[800px] space-y-16">
                
                <div id="introduction" className="scroll-mt-32">
                  <FadeIn>
                    <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed bg-white/60 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <h2 className="text-2xl font-semibold text-neutral-900 mb-4 tracking-tight">Introduction</h2>
                      <p className="text-[16px] leading-[1.8] mb-0">
                        Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third party to recognize you and make your next visit easier and the service more useful to you. At MUSE, we use cookies to ensure our platform functions correctly, to understand how you interact with it, and to provide a seamless user experience.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="types-of-cookies" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">1. Types of Cookies We Use</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We classify the cookies used on our platform into several categories based on their function:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                          <strong className="text-neutral-800 font-semibold block mb-2 text-[15px]">Essential Cookies</strong>
                          <p className="text-[14px] leading-relaxed text-neutral-500 m-0">Strictly necessary for the website to function properly, including secure login and core platform mechanics.</p>
                        </div>
                        <div className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                          <strong className="text-neutral-800 font-semibold block mb-2 text-[15px]">Performance & Analytics</strong>
                          <p className="text-[14px] leading-relaxed text-neutral-500 m-0">Help us understand how visitors interact with the site by reporting information anonymously.</p>
                        </div>
                        <div className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                          <strong className="text-neutral-800 font-semibold block mb-2 text-[15px]">Functional Cookies</strong>
                          <p className="text-[14px] leading-relaxed text-neutral-500 m-0">Allow the website to remember choices you make and provide enhanced, more personal features.</p>
                        </div>
                        <div className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                          <strong className="text-neutral-800 font-semibold block mb-2 text-[15px]">Security Cookies</strong>
                          <p className="text-[14px] leading-relaxed text-neutral-500 m-0">Used to authenticate users, prevent fraudulent use of login credentials, and protect user data.</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="how-we-use-cookies" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">2. How We Use Cookies</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>When you use and access our platform, we may place a number of cookie files in your web browser. We use these for the following purposes:</p>
                      <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-600 marker:text-[#fb8500]">
                        <li><strong className="text-neutral-800 font-semibold">Authentication:</strong> To identify you when you visit our platform and as you navigate within it, keeping you logged in.</li>
                        <li><strong className="text-neutral-800 font-semibold">Preferences:</strong> To remember your specific settings, language choices, and UI theme preferences (e.g., dark mode).</li>
                        <li><strong className="text-neutral-800 font-semibold">Performance:</strong> To route traffic optimally between servers and observe load times, ensuring MUSE runs smoothly.</li>
                        <li><strong className="text-neutral-800 font-semibold">Analytics:</strong> To gather insights about feature usage, helping us determine which tools and AI models need optimization.</li>
                        <li><strong className="text-neutral-800 font-semibold">Security:</strong> To detect and defend against security risks, unauthorized access, and malicious activity.</li>
                      </ul>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="third-party-cookies" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">3. Third-Party Cookies</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. Services like payment processors, analytics platforms, and specific development integrations may place their own cookies to ensure seamless operation.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="managing-preferences" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">4. Managing Cookie Preferences</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600 p-6 bg-[#fcfbf8] border border-[#f3ead3] rounded-xl shadow-sm">
                      <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
                      <p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="analytics-tracking" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">5. Analytics & Tracking</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We use automated tracking tools to monitor the health, stability, and usage of MUSE. This anonymous data is crucial for identifying bugs, resolving bottlenecks, and understanding how our global community interacts with our AI features.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="data-privacy" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">6. Data Privacy Connection</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>The information we collect via cookies is subject to our overarching commitment to your privacy. For complete details on how we gather, store, and utilize your personal information, please refer to our full <a href="/privacy-policy" className="text-[#fb8500] hover:underline underline-offset-4 decoration-2">Privacy Policy</a>.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="policy-updates" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">7. Updates to This Policy</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>As the web ecosystem evolves, so will our use of cookies. We reserve the right to update this Cookie Policy at any time. Any changes will be published here with an updated revision date. We encourage you to review this page periodically.</p>
                    </div>
                  </FadeIn>
                </div>

                {/* Contact Card */}
                <FadeIn delay={0.2}>
                  <div className="mt-20 p-8 sm:p-10 bg-white border border-neutral-200/60 rounded-3xl shadow-sm text-center mb-10">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Have Questions?</h3>
                    <p className="text-neutral-500 mb-6 text-[15px]">Need more clarification on how we handle cookies and tracking?</p>
                    <a href="mailto:privacy@muse.ai" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neutral-900 text-white text-[14px] font-medium hover:bg-black transition-colors shadow-sm">
                      Contact Privacy Team
                    </a>
                  </div>
                </FadeIn>

              </div>
            </div>

            <div className="bg-white">
              <FooterParallax scrollContainer={scrollContainerRef} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

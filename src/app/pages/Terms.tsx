import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../components/Navbar';
import FooterParallax from '../components/FooterParallax';
import '../../styles/fonts.css';

// Section definitions
const sections = [
  { id: "eligibility", title: "Eligibility & Accounts" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "user-content", title: "User Content" },
  { id: "subscription", title: "Subscription & Payments" },
  { id: "ai-content", title: "AI Generated Content" },
  { id: "service-availability", title: "Service Availability" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "privacy", title: "Privacy Reference" },
  { id: "termination", title: "Termination" },
  { id: "changes", title: "Changes to Terms" },
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

export default function Terms() {
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
                  Legal
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
                  Terms of Service
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-neutral-600 max-w-xl mx-auto leading-relaxed text-[17px]"
                >
                  These terms govern your use of MUSE and its services. Please read them carefully.
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
                
                <FadeIn>
                  <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed bg-white/60 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <p className="text-[16px] leading-[1.8] mb-0">
                      Welcome to MUSE. By accessing or using our platform, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services. We recommend that you read these terms carefully before creating an account or using our platform.
                    </p>
                  </div>
                </FadeIn>

                <div id="eligibility" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">1. Eligibility & Accounts</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>To use MUSE, you must be at least 18 years old or the age of legal majority in your jurisdiction. You must provide accurate, current, and complete information during the registration process and keep your account details updated.</p>
                      <p>You are solely responsible for safeguarding your password and for all activities that occur under your account. MUSE reserves the right to suspend or terminate accounts that provide inaccurate information or violate our security policies.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="acceptable-use" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">2. Acceptable Use</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>You agree not to misuse the MUSE platform. Specifically, you shall not:</p>
                      <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-600 marker:text-[#fb8500]">
                        <li>Use the platform for any illegal, unauthorized, or harmful purpose.</li>
                        <li>Attempt to reverse engineer, decompile, or extract the source code of the platform.</li>
                        <li>Engage in spamming, phishing, or distributing malicious software.</li>
                        <li>Interfere with or disrupt the integrity or performance of the services.</li>
                      </ul>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="intellectual-property" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">3. Intellectual Property</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>MUSE and its original content, features, functionality, and design elements are and will remain the exclusive property of MUSE and its licensors. Our trademarks, logos, and service marks may not be used in connection with any product or service without our prior written consent.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="user-content" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">4. User Content</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>You retain all ownership rights to the content, projects, and data you create using MUSE. By using the platform, you grant MUSE a limited, worldwide, non-exclusive license to host, process, and store your content strictly for the purpose of providing and improving our services.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="subscription" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">5. Subscription & Payments</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>MUSE offers paid subscription plans. By subscribing, you agree to pay all applicable fees associated with your chosen plan. Subscriptions renew automatically unless canceled before the end of the current billing cycle. All fees are non-refundable except as required by law or explicitly stated in our refund policy.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="ai-content" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">6. AI Generated Content Disclaimer</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600 p-6 bg-[#fff8f3] border border-[#ffe4cc] rounded-xl shadow-sm">
                      <p className="font-medium text-neutral-800">Important Notice regarding AI Outputs:</p>
                      <p>MUSE utilizes advanced artificial intelligence models. As a result, the outputs generated by our services may occasionally contain inaccuracies, inconsistencies, or flawed logic.</p>
                      <p>You are solely responsible for reviewing, testing, and verifying all generated code, content, and application logic before deploying it to a production environment. MUSE assumes no liability for errors in AI-generated outputs.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="service-availability" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">7. Service Availability</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We continuously strive to improve MUSE. We reserve the right to modify, suspend, or discontinue any part of the service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="liability" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">8. Limitation of Liability</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>To the maximum extent permitted by applicable law, in no event shall MUSE, its affiliates, directors, employees, or its licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, this service.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="privacy" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">9. Privacy Reference</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>Your privacy is important to us. Our collection and use of personal information in connection with the platform are described in our Privacy Policy. By using MUSE, you acknowledge that you have read and understood our Privacy Policy.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="termination" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">10. Termination</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="changes" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">11. Changes to Terms</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
                    </div>
                  </FadeIn>
                </div>

                {/* Contact Card */}
                <FadeIn delay={0.2}>
                  <div className="mt-20 p-8 sm:p-10 bg-white border border-neutral-200/60 rounded-3xl shadow-sm text-center mb-10">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Questions about these Terms?</h3>
                    <p className="text-neutral-500 mb-6 text-[15px]">Our legal and support teams are here to help clarify any details.</p>
                    <a href="mailto:legal@muse.ai" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neutral-900 text-white text-[14px] font-medium hover:bg-black transition-colors shadow-sm">
                      Contact Legal Team
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

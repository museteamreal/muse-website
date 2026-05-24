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
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-information", title: "How We Use Information" },
  { id: "ai-data-processing", title: "AI & Data Processing" },
  { id: "cookies-tracking", title: "Cookies & Tracking" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "data-retention", title: "Data Retention" },
  { id: "data-security", title: "Data Security" },
  { id: "user-rights", title: "User Rights & Controls" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "international-usage", title: "International Data Usage" },
  { id: "policy-updates", title: "Policy Updates" },
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

export default function PrivacyPolicy() {
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
                  Privacy
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
                  Privacy Policy
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-neutral-600 max-w-xl mx-auto leading-relaxed text-[17px]"
                >
                  Learn how MUSE collects, uses, and protects your data while providing our services.
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
                        At MUSE, we are deeply committed to protecting your privacy and ensuring transparency in how we handle your data. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our platform, application, and associated services.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="information-we-collect" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">1. Information We Collect</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We collect various types of information to provide and improve our services to you:</p>
                      <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-600 marker:text-[#fb8500]">
                        <li><strong className="text-neutral-800 font-semibold">Account Information:</strong> Name, email address, password, and profile details provided during registration.</li>
                        <li><strong className="text-neutral-800 font-semibold">Usage & Activity Data:</strong> Interactions with our platform, features accessed, session durations, and workflow patterns.</li>
                        <li><strong className="text-neutral-800 font-semibold">Device & Browser Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                        <li><strong className="text-neutral-800 font-semibold">Payment Information:</strong> Billing address and subscription details (payment processing is handled securely by our third-party providers).</li>
                        <li><strong className="text-neutral-800 font-semibold">AI Interaction Data:</strong> Prompts submitted, preferences, and content generated using our AI models.</li>
                      </ul>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="how-we-use-information" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">2. How We Use Information</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We process your data to operate, improve, and secure our services. Specific uses include:</p>
                      <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-600 marker:text-[#fb8500]">
                        <li>Providing, maintaining, and improving the platform's core experience.</li>
                        <li>Personalizing your workspace and tailoring recommendations to your workflow.</li>
                        <li>Ensuring platform security and preventing fraudulent or unauthorized activities.</li>
                        <li>Providing efficient customer support and responding to inquiries.</li>
                        <li>Analyzing usage metrics to enhance our AI systems and underlying architecture.</li>
                      </ul>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="ai-data-processing" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">3. AI & Data Processing</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600 p-6 bg-[#f0f9ff] border border-[#bae6fd] rounded-xl shadow-sm">
                      <p>MUSE leverages advanced AI technologies to generate code and designs. Prompts, project context, and generated outputs may be processed by our models to deliver these services.</p>
                      <p>We handle all prompt data with strict confidentiality. While anonymized and aggregated interaction data may be used to improve system reliability and model accuracy, your personal projects and proprietary code remain yours and are protected by robust security measures.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="cookies-tracking" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">4. Cookies & Tracking Technologies</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We use cookies, web beacons, and similar tracking technologies to track activity on our platform and store certain information. These technologies help us remember your session, understand user behavior, and provide a seamless, personalized experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="third-party-services" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">5. Third-Party Services</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We may share your information with trusted third-party service providers to facilitate our services. This includes cloud hosting providers, payment processors (like Stripe), analytics services, and integration partners (such as GitHub and Vercel). These third parties have access to your data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="data-retention" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">6. Data Retention</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="data-security" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">7. Data Security</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>The security of your data is paramount. We employ industry-standard encryption, secure socket layer (SSL) technology, and rigorous access controls to protect your information from unauthorized access, alteration, or destruction. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="user-rights" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">8. User Rights & Controls</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>Depending on your location, you may have the right to access, update, or delete the personal information we hold about you. You can manage your account details and communication preferences directly from your account settings. If you require assistance exercising your data rights, please contact our support team.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="childrens-privacy" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">9. Children's Privacy</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>Our platform is not intended for use by anyone under the age of 13 (or higher, depending on local laws). We do not knowingly collect personal information from children. If we discover that a child has provided us with personal data, we will immediately delete such information from our servers.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="international-usage" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">10. International Data Usage</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>MUSE operates globally. Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-12" />

                <div id="policy-updates" className="scroll-mt-32">
                  <FadeIn>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">11. Policy Updates</h2>
                    <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-600">
                      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
                    </div>
                  </FadeIn>
                </div>

                {/* Contact Card */}
                <FadeIn delay={0.2}>
                  <div className="mt-20 p-8 sm:p-10 bg-white border border-neutral-200/60 rounded-3xl shadow-sm text-center mb-10">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Privacy Questions or Concerns?</h3>
                    <p className="text-neutral-500 mb-6 text-[15px]">Our team is dedicated to protecting your data and answering any privacy-related inquiries.</p>
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

import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Eye, Fingerprint, Activity, ShieldCheck, ChevronDown } from 'lucide-react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../components/Navbar';
import Footer from '../../components/Footer';
import LandingChatbox from '../components/LandingChatbox';

export default function Security() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
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
  };

  const faqs = [
    { q: "Where is customer data stored?", a: "Our primary infrastructure is hosted in SOC 2 Type II compliant AWS and Google Cloud data centers in the US and EU. You can choose your preferred data residency region." },
    { q: "Is customer data used to train AI?", a: "No. We have strict agreements in place ensuring that customer data, including code and interactions, is never used to train foundation models." },
    { q: "Is MUSE multi-tenant, and how is customer data isolated?", a: "While the platform is multi-tenant, every operation runs in isolated, ephemeral sandboxes. Compute resources are never shared between tenants, eliminating cross-contamination risks." },
    { q: "Which subprocessors does MUSE use?", a: "We use a carefully vetted list of industry-standard subprocessors for core infrastructure (e.g., AWS, GCP) and operational services. A full list is available in our Trust Center." },
    { q: "Does MUSE access or clone our source code?", a: "Your source code is encrypted at rest and in transit. It is accessed only during active sessions within your isolated environment and is never permanently cloned or stored by us." },
    { q: "Does MUSE require access to our CI/CD pipelines or...", a: "No. You retain full control over your deployment lifecycle. We provide integrations, but they are entirely optional and configurable to your security policies." }
  ];

  return (
    <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4 font-['Inter',sans-serif] relative">
      {/* Frame Container */}
      <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-sm">
        
        {/* Scrollable Area */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-y-auto overflow-x-hidden no-scrollbar"
          onScroll={handleScroll}
        >
          <div className="w-full flex flex-col min-h-max bg-white pb-0">
            <Navbar isScrolled={isScrolled} isPricingPage={true} />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
              <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-70">
                <img 
                  src="https://ik.imagekit.io/museimage/download%20(7).jpg" 
                  alt="Hero Blur" 
                  className="w-[800px] h-[800px] object-cover rounded-full blur-3xl opacity-50 mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite_alternate]"
                />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                  Secure by design
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mb-10"
                >
                  Security is at the heart of our platform. We use industry-leading practices to keep your data safe, secure, and compliant.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center gap-3"
                >
                  <button className="px-4 py-2 text-sm bg-black text-white rounded-xl font-medium hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.1)]">
                    Trust center
                  </button>
                  <button className="px-4 py-2 text-sm bg-transparent border border-neutral-200 text-black rounded-xl font-medium hover:bg-neutral-50 transition-colors">
                    Report an issue
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Enterprise Security Controls */}
            <section className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Enterprise security controls</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Access Control (Wide) */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="md:col-span-2 bg-white rounded-3xl border border-neutral-200/60 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex-1 space-y-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <Fingerprint className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Access control</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed">
                      Enable Single Sign-On (SSO) and Role-Based Access Control (RBAC) to enforce strict security policies. Ensure only authorized personnel have access to sensitive environments.
                    </p>
                  </div>
                  <div className="flex-1 relative rounded-2xl overflow-hidden bg-[#eff3ff] aspect-[4/3] md:aspect-auto md:h-[300px] flex items-center justify-center w-full">
                    <img 
                      src="https://ik.imagekit.io/museimage/access-control.0_d8jhaxie.pm.avif" 
                      alt="Access Control" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Infrastructure */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="bg-white rounded-3xl border border-neutral-200/60 p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Server className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Global data infrastructure</h3>
                  <p className="text-neutral-600">
                    Our infrastructure is built on top-tier cloud providers with built-in redundancy, high availability, and SOC2 compliant data centers around the world.
                  </p>
                </motion.div>

                {/* Sandboxed Environments */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="bg-white rounded-3xl border border-neutral-200/60 p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Secure sandboxed environments</h3>
                  <p className="text-neutral-600">
                    Every operation runs in isolated, ephemeral sandboxes. Compute resources are never shared between tenants, eliminating cross-contamination risks.
                  </p>
                </motion.div>

                {/* Data Residency (Wide) */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="md:col-span-2 bg-white rounded-3xl border border-neutral-200/60 p-8 md:p-12 flex flex-col md:flex-row-reverse items-center gap-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex-1 space-y-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Data residency</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed">
                      Choose where your data lives. Meet regional compliance requirements by selecting specific geographic regions for data storage and processing, including EU-only options.
                    </p>
                  </div>
                  <div className="flex-1 relative rounded-2xl overflow-hidden bg-[#fff2e8] aspect-[4/3] md:aspect-auto md:h-[300px] flex items-center justify-center w-full">
                    <img 
                      src="https://ik.imagekit.io/museimage/data-residency.00m75a6na2qr5.avif" 
                      alt="Data Residency" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Model Training */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="bg-white rounded-3xl border border-neutral-200/60 p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Your data is not used to train models</h3>
                  <p className="text-neutral-600">
                    We respect your IP. Your proprietary code, data, and interactions are never used to train our AI models or third-party foundational models.
                  </p>
                </motion.div>

                {/* Secure by Design */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="bg-white rounded-3xl border border-neutral-200/60 p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Secure by design</h3>
                  <p className="text-neutral-600">
                    Security is injected at every stage of the development lifecycle. From code commits to deployment, automated checks ensure vulnerabilities are caught early.
                  </p>
                </motion.div>

                {/* Continuous Monitoring (Wide) */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="md:col-span-2 bg-white rounded-3xl border border-neutral-200/60 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex-1 space-y-4">
                    <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-6">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Continuous external attack surface monitoring</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed">
                      We constantly scan and evaluate our infrastructure against emerging threats. Real-time alerting and automated incident response keep our defenses sharp 24/7.
                    </p>
                  </div>
                  <div className="flex-1 relative rounded-2xl overflow-hidden bg-[#fdf2f8] aspect-[4/3] md:aspect-auto md:h-[300px] flex items-center justify-center w-full">
                    <img 
                      src="https://ik.imagekit.io/museimage/continuous-monitoring.0o0s62~_rf4eb.avif" 
                      alt="Continuous Monitoring" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-4 md:px-8 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-12"
              >
                Frequently asked questions
              </motion.h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    key={i} 
                    className="bg-white border border-neutral-100 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden"
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 hover:bg-neutral-50/50 transition-colors text-left"
                    >
                      <span className="text-[17px] font-medium text-neutral-900">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 pt-1 text-neutral-600 leading-relaxed border-t border-neutral-50/50">
                        {faq.a}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Ready to build */}
            <section className="py-24 px-4 md:px-8 text-center flex flex-col items-center bg-[#fcfcfc] border-t border-neutral-100">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-[56px] font-bold tracking-tight mb-8 text-neutral-900"
              >
                Ready to build?
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="w-full max-w-3xl mx-auto relative z-20 flex justify-center"
              >
                <LandingChatbox />
              </motion.div>
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

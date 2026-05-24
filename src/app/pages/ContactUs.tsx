import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import { Mail, MessageSquare, HelpCircle, Share2, ChevronDown, Send, Briefcase, Code, Newspaper, CheckCircle2, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterParallax from '../components/FooterParallax';
import '../../styles/fonts.css';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const faqs = [
  { question: "How quickly will I receive a response?", answer: "Our standard response time is under 24 hours. For Studio and Enterprise customers, we offer priority support with responses typically within 2-4 hours during business days." },
  { question: "Do you offer technical support for integrations?", answer: "Yes. Technical support is included in all our paid plans. Enterprise customers also get dedicated integration engineering support." },
  { question: "How can I partner with MUSE?", answer: "We're always open to exciting partnerships! Select 'Business & Partnerships' in the contact form, and our business development team will get back to you shortly." },
  { question: "Where can I find press resources?", answer: "You can find our brand guidelines, logos, and press kits in the Press & Media section of our website, or contact us directly for specific requests." }
];

export default function ContactUs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Form states
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '', category: 'General Inquiry' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '', category: 'General Inquiry' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
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
                <div className="absolute top-[10%] -right-[10%] w-[60%] h-[80%] rounded-[100%] bg-gradient-to-bl from-[#f0f9ff] to-[#e0f2fe] opacity-30 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_alternate_reverse]" />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block py-1.5 px-4 rounded-full bg-white border border-neutral-200 text-[12px] font-bold tracking-widest text-[#fb8500] uppercase shadow-sm mb-6"
                >
                  Contact Support
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
                  Let's build together.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-neutral-600 max-w-xl mx-auto leading-relaxed text-[17px]"
                >
                  Have questions about MUSE? Whether you need technical support, want to discuss a partnership, or just want to say hi — we're here for you.
                </motion.p>
              </div>
            </div>

            {/* Main Contact Split Layout */}
            <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 relative z-10">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                
                {/* Left Side: Info */}
                <div className="w-full lg:w-[45%] flex flex-col pt-4">
                  <FadeIn>
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Get in touch</h2>
                    <p className="text-neutral-500 text-[16px] leading-relaxed mb-8">
                      Our global support team is available Monday through Friday, 9am to 6pm EST. We aim to respond to all inquiries within 24 hours.
                    </p>

                    <div className="space-y-4">
                      <div className="p-5 bg-white/60 backdrop-blur-xl border border-neutral-200/60 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#fb8500]/10 transition-colors">
                          <Mail className="w-5 h-5 text-neutral-700 group-hover:text-[#fb8500] transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-[15px] font-semibold text-neutral-900 mb-1">General Support</h3>
                          <p className="text-[14px] text-neutral-500">support@muse.ai</p>
                        </div>
                      </div>

                      <div className="p-5 bg-white/60 backdrop-blur-xl border border-neutral-200/60 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#fb8500]/10 transition-colors">
                          <Briefcase className="w-5 h-5 text-neutral-700 group-hover:text-[#fb8500] transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-[15px] font-semibold text-neutral-900 mb-1">Business & Partnerships</h3>
                          <p className="text-[14px] text-neutral-500">partners@muse.ai</p>
                        </div>
                      </div>

                      <div className="p-5 bg-white/60 backdrop-blur-xl border border-neutral-200/60 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#fb8500]/10 transition-colors">
                          <Code className="w-5 h-5 text-neutral-700 group-hover:text-[#fb8500] transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-[15px] font-semibold text-neutral-900 mb-1">Technical Assistance</h3>
                          <p className="text-[14px] text-neutral-500">Available for Pro & Studio</p>
                        </div>
                      </div>

                      <div className="p-5 bg-white/60 backdrop-blur-xl border border-neutral-200/60 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#fb8500]/10 transition-colors">
                          <Newspaper className="w-5 h-5 text-neutral-700 group-hover:text-[#fb8500] transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-[15px] font-semibold text-neutral-900 mb-1">Press & Media</h3>
                          <p className="text-[14px] text-neutral-500">press@muse.ai</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Side: Form */}
                <div className="w-full lg:w-[55%]">
                  <FadeIn delay={0.2}>
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                      {isSubmitted ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 text-center px-8">
                          <div className="w-16 h-16 bg-[#fb8500]/10 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-8 h-8 text-[#fb8500]" />
                          </div>
                          <h3 className="text-2xl font-semibold text-neutral-900 mb-3 tracking-tight">Message Sent</h3>
                          <p className="text-neutral-500 text-[15px] leading-relaxed">
                            Thank you for reaching out to MUSE. Our team will review your message and get back to you shortly.
                          </p>
                        </div>
                      ) : null}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-neutral-700 uppercase tracking-wider">Full Name</label>
                            <input 
                              type="text" 
                              required
                              placeholder="Jane Doe"
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                              className="w-full bg-[#f8f9fa] border border-neutral-200 rounded-xl px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#fb8500]/20 focus:border-[#fb8500] transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-neutral-700 uppercase tracking-wider">Email Address</label>
                            <input 
                              type="email" 
                              required
                              placeholder="jane@company.com"
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                              className="w-full bg-[#f8f9fa] border border-neutral-200 rounded-xl px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#fb8500]/20 focus:border-[#fb8500] transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[13px] font-semibold text-neutral-700 uppercase tracking-wider">Inquiry Category</label>
                          <div className="relative">
                            <select 
                              value={formState.category}
                              onChange={(e) => setFormState({...formState, category: e.target.value})}
                              className="w-full bg-[#f8f9fa] border border-neutral-200 rounded-xl px-4 py-3 text-[15px] text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#fb8500]/20 focus:border-[#fb8500] transition-all cursor-pointer"
                            >
                              <option>General Inquiry</option>
                              <option>Technical Support</option>
                              <option>Billing & Subscriptions</option>
                              <option>Business Partnerships</option>
                              <option>Feedback & Feature Requests</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[13px] font-semibold text-neutral-700 uppercase tracking-wider">Subject</label>
                          <input 
                            type="text" 
                            required
                            placeholder="How can we help?"
                            value={formState.subject}
                            onChange={(e) => setFormState({...formState, subject: e.target.value})}
                            className="w-full bg-[#f8f9fa] border border-neutral-200 rounded-xl px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#fb8500]/20 focus:border-[#fb8500] transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[13px] font-semibold text-neutral-700 uppercase tracking-wider">Message</label>
                          <textarea 
                            required
                            placeholder="Tell us more about your inquiry..."
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            rows={5}
                            className="w-full bg-[#f8f9fa] border border-neutral-200 rounded-xl px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#fb8500]/20 focus:border-[#fb8500] transition-all resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white rounded-xl px-6 py-3.5 text-[15px] font-medium hover:bg-black transition-all shadow-sm active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>

            {/* Other Ways to Connect */}
            <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-200/50 mt-10">
              <FadeIn>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Other ways to connect</h2>
                  <p className="text-neutral-500 text-[16px]">Explore our community and support resources.</p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Mail, title: "Email Support", desc: "Get direct help from our team." },
                  { icon: MessageSquare, title: "Community Discord", desc: "Chat with fellow creators." },
                  { icon: HelpCircle, title: "Help Center", desc: "Read guides and tutorials." },
                  { icon: Share2, title: "Social Platforms", desc: "Follow us for updates." }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i} className="h-full">
                    <div className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col items-center cursor-pointer group">
                      <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-neutral-900 transition-colors">
                        <item.icon className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-[16px] font-semibold text-neutral-900 mb-2">{item.title}</h3>
                      <p className="text-[14px] text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="max-w-[800px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-200/50">
              <FadeIn>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Common Questions</h2>
                </div>
              </FadeIn>

              <div className="space-y-0">
                {faqs.map((faq, index) => {
                  const isActive = activeFaqIndex === index;
                  return (
                    <FadeIn key={index} delay={index * 0.1}>
                      <div 
                        onClick={() => setActiveFaqIndex(isActive ? null : index)}
                        className={`group py-6 cursor-pointer border-b border-neutral-200/70 transition-colors ${
                          index === 0 ? 'border-t border-neutral-200/70' : ''
                        }`}
                      >
                        <div className="flex justify-between items-center text-[16px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors gap-6 pr-2">
                          <span className="leading-snug">{faq.question}</span>
                          <span className={`text-2xl font-light transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 text-neutral-400 group-hover:text-neutral-900 ${isActive ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2 text-[15px] text-neutral-500 leading-relaxed pr-8">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>

            {/* Response Time Info & CTA */}
            <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 pb-32">
              <FadeIn>
                <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center relative overflow-hidden shadow-xl">
                  {/* Background effects */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#fb8500]/20 blur-[100px] rounded-full pointer-events-none" />
                  
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 relative z-10 border border-white/10">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight relative z-10">
                    Ready to build the future?
                  </h2>
                  <p className="text-neutral-300 text-[16px] sm:text-[18px] max-w-2xl leading-relaxed mb-8 relative z-10">
                    We aim to respond to all general inquiries within 24 hours. While you wait, explore the MUSE platform and start generating your first AI-powered application.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                    <button className="px-8 py-3.5 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-colors shadow-sm text-[15px]">
                      Start Building Free
                    </button>
                    <button className="px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors shadow-sm text-[15px]">
                      View Documentation
                    </button>
                  </div>
                </div>
              </FadeIn>
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

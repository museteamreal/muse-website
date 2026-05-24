import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import LandingChatbox from '../components/LandingChatbox';
import FooterParallax from '../components/FooterParallax';
import InteractiveHero from '../components/InteractiveHero';
import '../../styles/fonts.css';

const connectors = [
  { name: 'GitHub', desc: 'Sync code and trigger builds from repositories', icon: 'bg-black', iconChar: 'GH' },
  { name: 'Vercel', desc: 'Deploy your frontend projects seamlessly', icon: 'bg-black', iconChar: '▲' },
  { name: 'Supabase', desc: 'Connect your PostgreSQL database and auth', icon: 'bg-[#3ECF8E]', iconChar: 'S' },
  { name: 'Slack', desc: 'Send notifications and updates to channels', icon: 'bg-[#4A154B]', iconChar: 'Sl' },
  { name: 'Discord', desc: 'Automate community management and alerts', icon: 'bg-[#5865F2]', iconChar: 'D' },
  { name: 'Notion', desc: 'Read and write from your team workspace', icon: 'bg-black', iconChar: 'N' },
  { name: 'Figma', desc: 'Import designs and variables directly', icon: 'bg-[#F24E1E]', iconChar: 'F' },
  { name: 'Stripe', desc: 'Process payments and manage subscriptions', icon: 'bg-[#635BFF]', iconChar: 'St' },
  { name: 'HubSpot', desc: 'Sync contacts and manage marketing workflows', icon: 'bg-[#FF7A59]', iconChar: 'H' },
  { name: 'Salesforce', desc: 'Connect to your customer data platform', icon: 'bg-[#00A1E0]', iconChar: 'Sf' },
  { name: 'Zendesk', desc: 'Automate customer support ticket creation', icon: 'bg-[#03363D]', iconChar: 'Z' },
  { name: 'Intercom', desc: 'Manage in-app messaging and customer data', icon: 'bg-[#0051FF]', iconChar: 'I' },
  { name: 'Linear', desc: 'Create and track issues in your workspace', icon: 'bg-[#5E6AD2]', iconChar: 'L' },
  { name: 'Jira', desc: 'Sync engineering tasks and agile boards', icon: 'bg-[#0052CC]', iconChar: 'J' },
  { name: 'Trello', desc: 'Manage cards and lists automatically', icon: 'bg-[#0052CC]', iconChar: 'T' },
  { name: 'Asana', desc: 'Create tasks and manage project timelines', icon: 'bg-[#F06A6A]', iconChar: 'A' },
  { name: 'Google Workspace', desc: 'Connect Docs, Sheets, and Drive', icon: 'bg-[#4285F4]', iconChar: 'G' },
  { name: 'Microsoft Teams', desc: 'Send alerts to team channels', icon: 'bg-[#6264A7]', iconChar: 'M' },
  { name: 'Posthog', desc: 'Track product usage and analytics events', icon: 'bg-[#F54E00]', iconChar: 'P' },
  { name: 'Mixpanel', desc: 'Send user behavior data for product analytics', icon: 'bg-[#7856FF]', iconChar: 'Mp' },
  { name: 'Sentry', desc: 'Monitor application errors and performance', icon: 'bg-[#362D59]', iconChar: 'Se' },
  { name: 'Datadog', desc: 'Send infrastructure metrics and logs', icon: 'bg-[#632CA6]', iconChar: 'Dd' },
  { name: 'AWS', desc: 'Manage your cloud infrastructure resources', icon: 'bg-[#FF9900]', iconChar: 'AW' },
  { name: 'Google Cloud', desc: 'Deploy to GCP and manage services', icon: 'bg-[#4285F4]', iconChar: 'GC' },
  { name: 'Azure', desc: 'Connect to Microsoft cloud services', icon: 'bg-[#0089D6]', iconChar: 'Az' },
  { name: 'OpenAI', desc: 'Integrate GPT models into your applications', icon: 'bg-black', iconChar: 'O' },
  { name: 'Anthropic', desc: 'Use Claude for advanced reasoning tasks', icon: 'bg-[#1A1A1A]', iconChar: 'An' },
  { name: 'Hugging Face', desc: 'Access open-source machine learning models', icon: 'bg-[#FFD21E]', iconChar: 'HF' },
  { name: 'Pinecone', desc: 'Store and query vector embeddings', icon: 'bg-[#000000]', iconChar: 'Pc' },
  { name: 'Qdrant', desc: 'Connect to your vector search engine', icon: 'bg-[#1D1E2C]', iconChar: 'Q' },
  { name: 'Weaviate', desc: 'Manage your AI-native vector database', icon: 'bg-[#130C49]', iconChar: 'W' },
  { name: 'MongoDB', desc: 'Connect your NoSQL document database', icon: 'bg-[#47A248]', iconChar: 'Mo' },
  { name: 'PostgreSQL', desc: 'Query your relational databases directly', icon: 'bg-[#336791]', iconChar: 'Pg' },
  { name: 'Redis', desc: 'Manage your in-memory data store and cache', icon: 'bg-[#DC382D]', iconChar: 'R' },
  { name: 'Shopify', desc: 'Sync products and process e-commerce orders', icon: 'bg-[#95BF47]', iconChar: 'Sh' },
  { name: 'Webflow', desc: 'Publish content to your CMS collections', icon: 'bg-[#4353FF]', iconChar: 'Wf' },
];

export default function Connect() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
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
    { question: "Can I connect my custom API?", answer: "Yes, you can connect any custom REST or GraphQL API using our generic HTTP connector. Simply provide your endpoint and authentication details." },
    { question: "Is my data secure when using connectors?", answer: "Absolutely. We use industry-standard encryption for all data in transit and at rest. Your API keys are securely vaulted and never exposed." },
    { question: "Do you support on-premise integrations?", answer: "Yes, our Enterprise plan includes support for secure tunnels to connect with your on-premise databases and internal tools behind a firewall." },
    { question: "How do I request a new connector?", answer: "You can request new connectors through our feedback portal or by contacting support. We regularly add new integrations based on community demand." },
    { question: "Are connectors available on the free plan?", answer: "Basic connectors are available on the Free plan. Premium connectors like Salesforce, Jira, and custom APIs require a Pro or Enterprise plan." }
  ];

  return (
    <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4 font-['Inter',sans-serif] relative">
      <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-[#faf9f6] rounded-2xl sm:rounded-3xl shadow-sm">
        
        <div 
          ref={scrollContainerRef}
          className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-y-auto overflow-x-hidden no-scrollbar"
          onScroll={handleScroll}
        >
          <div className="w-full flex flex-col min-h-max bg-[#faf9f6] pb-0">
            
            <Navbar isScrolled={isScrolled} isPricingPage={true} />

            {/* Hero Section */}
            <div className="relative w-full min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden border-b border-neutral-200">
              
              {/* Interactive Flow Diagram Background */}
              <div className="absolute inset-0 z-0 w-full h-full">
                <InteractiveHero />
              </div>

              {/* Gradient overlay to ensure text is readable */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#faf9f6]/60 via-transparent to-[#faf9f6] pointer-events-none"></div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 pt-16 pointer-events-none">
                <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4 bg-white/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/80 shadow-sm pointer-events-auto">
                  Integrations Directory
                </span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05]"
                >
                  Build from what<br />you already use
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 text-lg text-neutral-600 max-w-xl bg-white/40 px-6 py-2 rounded-2xl backdrop-blur-md border border-white/40 shadow-sm"
                >
                  Connect your workflow. Plug in Muse to the apps you know and love and build faster.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8 pointer-events-auto"
                >
                  <button className="bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg shadow-black/10">
                    Get Started
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Featured Connectors */}
            <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">Featured connectors</h2>
              <p className="text-neutral-500 text-sm mb-8">Top tools you use every day, now available directly inside Muse.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Linear Card */}
                <div className="relative h-[320px] rounded-3xl overflow-hidden group bg-neutral-900 flex flex-col justify-end p-8 border border-neutral-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-black to-[#5E6AD2]/20 z-0"></div>
                  
                  {/* Decorative UI Mockup */}
                  <div className="absolute top-6 right-6 w-64 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden z-10 transform translate-x-4 -translate-y-2 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#5E6AD2]"></div>
                        <div className="h-2.5 w-32 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-white/10"></div>
                        <div className="h-2.5 w-24 bg-white/10 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-white/10"></div>
                        <div className="h-2.5 w-28 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#5E6AD2] rounded-sm"></div>
                      </div>
                      <h3 className="text-white font-semibold text-lg">Linear</h3>
                    </div>
                    <p className="text-white/60 text-sm max-w-[200px]">Create, track, and manage issues straight from your codebase.</p>
                  </div>
                </div>

                {/* Jira Card */}
                <div className="relative h-[320px] rounded-3xl overflow-hidden group bg-neutral-900 flex flex-col justify-end p-8 border border-neutral-800">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] via-[#0052CC]/10 to-[#ff4a70]/20 z-0"></div>
                  
                  {/* Decorative UI Mockup */}
                  <div className="absolute top-8 left-12 right-12 h-40 bg-white rounded-xl shadow-2xl overflow-hidden z-10 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                    <div className="flex border-b border-gray-100">
                      <div className="px-4 py-2 border-b-2 border-[#0052CC] text-xs font-semibold text-[#0052CC]">Board</div>
                      <div className="px-4 py-2 text-xs font-medium text-gray-500">Backlog</div>
                    </div>
                    <div className="p-4 flex gap-4">
                      <div className="w-1/3 bg-gray-50 rounded-lg p-2 space-y-2">
                        <div className="text-[10px] font-semibold text-gray-500 uppercase">To Do</div>
                        <div className="bg-white p-2 rounded shadow-sm border border-gray-100">
                          <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                          <div className="h-1.5 w-10 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="w-1/3 bg-gray-50 rounded-lg p-2 space-y-2">
                        <div className="text-[10px] font-semibold text-gray-500 uppercase">In Progress</div>
                        <div className="bg-white p-2 rounded shadow-sm border border-gray-100 border-l-2 border-l-[#0052CC]">
                          <div className="h-2 w-20 bg-gray-800 rounded mb-2"></div>
                          <div className="h-1.5 w-12 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-20 mt-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0052CC] flex items-center justify-center">
                        <div className="text-white font-bold text-xs">J</div>
                      </div>
                      <h3 className="text-white font-semibold text-lg">Jira</h3>
                    </div>
                    <p className="text-white/60 text-sm max-w-[200px]">Link tickets and manage your agile boards seamlessly.</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Explore All Connectors */}
            <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">Explore all connectors</h2>
              <p className="text-neutral-500 text-sm mb-8">Use pre-built integrations to connect.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {connectors.map((connector, i) => (
                  <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-300 hover:shadow-md transition-all group cursor-pointer">
                    <div className={`w-8 h-8 rounded-lg ${connector.icon} flex items-center justify-center mb-4 text-white font-bold text-xs shadow-sm`}>
                      {connector.iconChar}
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{connector.name}</h3>
                    <p className="text-[13px] text-neutral-500 leading-snug">
                      {connector.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Custom Integration Calls to Action */}
            <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-neutral-200 rounded-3xl p-8 flex flex-col items-start justify-center shadow-sm">
                  <div className="w-8 h-8 mb-4 opacity-50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Looking to build a custom integration?</h3>
                  <p className="text-sm text-neutral-500 mb-6">Explore our generic webhook and REST API connectors to plug in almost anything. See our developer docs for more details.</p>
                  <button className="text-sm font-semibold text-neutral-900 flex items-center gap-1 hover:gap-2 transition-all">
                    View developer docs <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-white border border-neutral-200 rounded-3xl p-8 flex flex-col items-start justify-center shadow-sm">
                  <div className="w-8 h-8 mb-4 opacity-50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Need a complex integration?</h3>
                  <p className="text-sm text-neutral-500 mb-6">Our enterprise team can help you build custom connectors for internal tools, legacy systems, and on-premise deployments.</p>
                  <button className="text-sm font-semibold text-neutral-900 flex items-center gap-1 hover:gap-2 transition-all">
                    Contact sales <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full max-w-[800px] mx-auto px-4 sm:px-6 py-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
                  Frequently asked questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isActive = activeFaqIndex === index;
                  return (
                    <div 
                      key={index}
                      className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setActiveFaqIndex(isActive ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="text-base font-semibold text-neutral-900">{faq.question}</span>
                        <ChevronRight className={`w-5 h-5 text-neutral-400 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Ready to build? Section */}
            <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-transparent to-[#e8f0ff]/50">
              <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-10">Ready to build?</h2>
                <LandingChatbox />
              </div>
              {/* Blur gradient at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#cde2ff] via-[#e8f0ff]/50 to-transparent z-0 blur-2xl"></div>
              <div className="absolute bottom-0 left-1/4 right-1/4 h-32 bg-gradient-to-t from-[#ffb4ee] via-[#ffb4ee]/30 to-transparent z-0 blur-3xl mix-blend-multiply opacity-60"></div>
            </section>

            {/* Footer */}
            <FooterParallax scrollContainer={scrollContainerRef} />

          </div>
        </div>
      </div>
    </div>
  );
}

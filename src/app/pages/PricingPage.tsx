import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import { Check, ChevronRight, ChevronDown, User, Users, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../components/Navbar';
import LandingChatbox from '../components/LandingChatbox';
import FooterParallax from '../components/FooterParallax';
import '../../styles/fonts.css';


const CreditDropdown = ({ initialCredits }: { initialCredits: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialCredits);
  const options = [
    "200 credits / month", "400 credits / month", "800 credits / month",
    "1200 credits / month", "2000 credits / month", "3000 credits / month",
    "4000 credits / month", "5000 credits / month", "7500 credits / month",
    "10000 credits / month"
  ];

  return (
    <div className="relative w-full mb-6 z-20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-xl px-4 py-2.5 text-[14px] font-medium text-black border border-neutral-200/50 shadow-sm"
      >
        {selected}
        <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -5, filter: 'blur(4px)' }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-neutral-200 rounded-xl shadow-xl overflow-hidden py-1 z-30 max-h-[220px] overflow-y-auto chat-scrollbar"
          >
            <button 
              onClick={() => { setSelected(initialCredits); setIsOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-neutral-50 transition-colors text-[14px] text-neutral-800"
            >
              <span className={selected === initialCredits ? 'font-semibold text-black' : ''}>{initialCredits}</span>
              {selected === initialCredits && <Check className="w-4 h-4 text-black" />}
            </button>
            {options.map((opt) => (
              <button 
                key={opt}
                onClick={() => { setSelected(opt); setIsOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-neutral-50 transition-colors text-[14px] text-neutral-800"
              >
                <span className={selected === opt ? 'font-semibold text-black' : ''}>{opt}</span>
                {selected === opt && <Check className="w-4 h-4 text-black" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const renderVal = (val: string) => {
  if (val === "✓") {
    return <span className="text-neutral-900 font-medium">✓</span>;
  }
  if (val === "—" || val === "") {
    return <span className="text-neutral-400 font-light">-</span>;
  }
  return <span className="text-neutral-700 text-[14px] font-medium">{val}</span>;
};

const TableSection = ({ title, data }: { title: string, data: any[] }) => (
  <>
    <tr>
      <td colSpan={5} className="pt-12 pb-4 text-left text-[14px] font-semibold text-neutral-500 uppercase tracking-wider">
        {title}
      </td>
    </tr>
    {data.map((row, rIdx) => (
      <tr 
        key={rIdx} 
        className="border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/50 transition-colors"
      >
        <td className="py-4 pr-6 text-left text-[15px] font-medium text-neutral-900">
          {row.feature}
        </td>
        {[row.free, row.pro, row.studio, row.enterprise].map((val, cIdx) => (
          <td key={cIdx} className="px-4 py-4 text-left">
            {renderVal(val)}
          </td>
        ))}
      </tr>
    ))}
  </>
);

export default function PricingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
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

  const plans = [
    {
      name: "Free",
      highlight: "",
      icon: <User className="w-4 h-4 text-gray-800" strokeWidth={2} />,
      description: "Best for Exploring MUSE and building your first projects.",
      monthlyPrice: "$0",
      annualPrice: "$0",
      period: "/month for 1 workspace",
      buttonText: "Get started",
      buttonTheme: "light",
      hasCreditDropdown: false,
      features: [
        "5 free credits daily",
        "Build web & mobile apps",
        "Access basic AI models",
        "Public project hosting",
        "Supabase integration",
        "Basic deployment",
        "Community support",
        "1 workspace"
      ],
      cardStyle: "bg-[#efefef] border border-[#efefef]"
    },
    {
      name: "Muse ",
      highlight: "Pro",
      highlightColor: "bg-gradient-to-r from-[#ff6b4a] to-[#7b4aff] bg-clip-text text-transparent",
      icon: <Users className="w-4 h-4 text-gray-800" strokeWidth={2} />,
      description: "Best for Professional creators, developers, and startups.",
      monthlyPrice: "$19",
      annualPrice: "$15.99",
      period: "/month for 5 team members",
      buttonText: "Start 7-day free trial",
      buttonTheme: "dark",
      hasCreditDropdown: true,
      initialCredits: "1000 credits / month",
      features: [
        "Unlimited exports",
        "Unlimited integrations",
        "Multi-agent AI workflows",
        "Full-stack app generation",
        "GitHub sync",
        "AI architecture planning",
        "Premium UI generation",
        "Advanced deployment tools",
        "Priority AI queue",
        "Team collaboration",
        "5% credit purchase discount"
      ],
      isGradientBorder: true
    },
    {
      name: "Muse ",
      highlight: "Studio",
      highlightColor: "text-[#7b4aff]",
      icon: <Users className="w-4 h-4 text-gray-800" strokeWidth={2} />,
      description: "Best for Agencies, teams, and fast-growing companies.",
      monthlyPrice: "$59",
      annualPrice: "$49.99",
      period: "/month up to 15 team members",
      buttonText: "Start 7-day free trial",
      buttonTheme: "dark",
      hasCreditDropdown: true,
      initialCredits: "4000 credits / month",
      features: [
        "Everything in Pro, plus:",
        "Shared team workspace",
        "Real-time collaboration",
        "Shared AI memory",
        "Workspace permissions",
        "Up to 15 team members",
        "Analytics dashboard",
        "Automation workflows",
        "White-label client sharing",
        "Dedicated build infrastructure",
        "Premium support",
        "10% credit purchase discount"
      ],
      cardStyle: "bg-white border border-gray-200"
    },
    {
      name: "Muse ",
      highlight: "Enterprise",
      highlightColor: "text-neutral-900",
      icon: <Building2 className="w-4 h-4 text-gray-800" strokeWidth={2} />,
      description: "Best for Large companies and enterprise teams.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      period: "Custom Pricing",
      buttonText: "Book a call",
      buttonTheme: "light",
      hasCreditDropdown: false,
      features: [
        "Everything in Studio, plus:",
        "Unlimited scaling options",
        "Custom AI model integrations",
        "Dedicated infrastructure",
        "Enterprise-grade security",
        "SSO & advanced authentication",
        "Compliance support",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom onboarding",
        "Private cloud deployment",
        "Priority feature requests"
      ],
      cardStyle: "bg-white border border-gray-200"
    }
  ];

  const corePlatformData = [
    { feature: "Web App Generation", free: "✓", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Mobile App Generation", free: "✓", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "AI Models Access", free: "Basic", pro: "Premium", studio: "Premium", enterprise: "Custom" },
    { feature: "Public Projects", free: "✓", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Private Projects", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Workspace Limit", free: "1", pro: "10", studio: "Unlimited", enterprise: "Unlimited" },
  ];

  const codeDeploymentData = [
    { feature: "Source Code Export", free: "—", pro: "Unlimited", studio: "Unlimited", enterprise: "Unlimited" },
    { feature: "Basic Deployment", free: "✓", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Advanced Deployment", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Custom Domains", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Version History", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
  ];

  const integrationsData = [
    { feature: "Supabase Integration", free: "✓", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "GitHub Integration", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Vercel Integration", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Tool Integrations", free: "1", pro: "Unlimited", studio: "Unlimited", enterprise: "Unlimited" },
    { feature: "API Access", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
  ];

  const aiFeaturesData = [
    { feature: "Faster AI Generation", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Multi-Agent Workflows", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "AI Architecture Planning", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Premium UI Generation", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Priority AI Queue", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
  ];

  const collaborationData = [
    { feature: "Team Collaboration", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Shared Workspace", free: "—", pro: "—", studio: "✓", enterprise: "✓" },
    { feature: "Real-Time Collaboration", free: "—", pro: "—", studio: "✓", enterprise: "✓" },
    { feature: "Shared AI Memory", free: "—", pro: "—", studio: "✓", enterprise: "✓" },
    { feature: "Workspace Permissions", free: "—", pro: "—", studio: "✓", enterprise: "✓" },
    { feature: "Team Members", free: "1", pro: "5", studio: "15", enterprise: "Unlimited" },
  ];

  const supportData = [
    { feature: "Community Support", free: "✓", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Email Support", free: "—", pro: "✓", studio: "✓", enterprise: "✓" },
    { feature: "Premium Support", free: "—", pro: "Priority", studio: "Premium", enterprise: "Dedicated" },
  ];

  const faqs = [
    { question: "What is MUSE?", answer: "MUSE is an AI-powered platform that helps you design, generate, and deploy modern web and mobile applications using advanced AI workflows." },
    { question: "Do I need coding experience to use MUSE?", answer: "No. MUSE is designed for everyone — from beginners and students to professional developers and startups." },
    { question: "Can I build real production-ready apps with MUSE?", answer: "Yes. MUSE is built to generate scalable, modern applications that can be deployed and used in real-world production environments." },
    { question: "What are credits in MUSE?", answer: "Credits are used for AI-powered actions like generating interfaces, workflows, applications, edits, and advanced AI operations." },
    { question: "How do daily credits work on the Free plan?", answer: "Free users receive 5 new credits every day automatically." },
    { question: "Can I buy extra credits?", answer: "Yes. Extra credits can be purchased anytime on any plan." },
    { question: "Do paid plans get discounts on extra credits?", answer: "Yes. Paid plans receive discounts on additional credit purchases depending on the subscription tier." },
    { question: "What happens if I run out of credits?", answer: "You can either wait for your credits to refresh or purchase additional credits instantly." },
    { question: "Can I export source code?", answer: "Yes. Starter includes limited exports, while Pro and Studio include unlimited source code exports." },
    { question: "Which integrations does MUSE support?", answer: "MUSE supports integrations like GitHub, Supabase, Vercel, and more." },
    { question: "Can I connect my own Supabase project?", answer: "Yes. You can connect your own Supabase backend directly inside MUSE." },
    { question: "Does MUSE support GitHub integration?", answer: "Yes. GitHub integration is available on paid plans." },
    { question: "Can I deploy apps directly from MUSE?", answer: "Yes. MUSE includes deployment capabilities for launching your projects faster." },
    { question: "Are private projects available?", answer: "Yes. Private projects are available starting from the Starter plan." },
    { question: "Can teams collaborate inside MUSE?", answer: "Yes. Studio plans support shared workspaces, team collaboration, permissions, and real-time collaboration features." },
    { question: "What is Shared AI Memory?", answer: "Shared AI Memory allows your team’s AI workflows and project context to stay synchronized across collaborators." },
    { question: "Is MUSE suitable for agencies?", answer: "Absolutely. Studio plans are designed for agencies, teams, and fast-scaling companies." },
    { question: "Can I use custom domains?", answer: "Yes. Custom domain support is available on paid plans." },
    { question: "Does MUSE support mobile app generation?", answer: "Yes. MUSE supports both web and mobile application generation." },
    { question: "What AI models does MUSE use?", answer: "MUSE uses advanced AI models optimized for UI generation, app architecture, workflows, and development assistance." },
    { question: "Is there a free trial?", answer: "Yes. You can start using MUSE for free without entering a credit card." },
    { question: "Can I cancel my subscription anytime?", answer: "Yes. You can cancel your subscription at any time." },
    { question: "Will my projects be deleted if I downgrade?", answer: "Your projects remain safe, but some premium features may become inaccessible until you upgrade again." },
    { question: "Is MUSE secure?", answer: "Yes. MUSE is built with modern security practices and infrastructure to protect your projects and data." },
    { question: "Can I use MUSE for client projects?", answer: "Yes. Many creators, freelancers, and agencies use MUSE for building client-ready applications." },
    { question: "What makes MUSE different from other AI builders?", answer: "MUSE focuses on combining powerful AI workflows, modern design generation, developer tooling, and scalable deployment in one seamless platform." },
    { question: "Do I own the projects I create?", answer: "Yes. You fully own the projects and applications generated using MUSE." },
    { question: "Will more integrations and features be added in the future?", answer: "Yes. MUSE is continuously evolving with new integrations, AI capabilities, and workflow improvements." },
    { question: "How can I contact support?", answer: "You can contact support directly through the platform or via email support available on paid plans." }
  ];



  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 6);

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
            <div 
              className="flex flex-col items-center px-4 pt-40 pb-32 text-center w-full mx-auto relative overflow-hidden bg-[#fafcff]"
            >
              {/* Soft sky fluid animated gradients */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-[100%] bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] opacity-[0.35] blur-[80px] animate-[pulse_8s_ease-in-out_infinite_alternate]" />
                <div className="absolute top-[10%] -right-[10%] w-[60%] h-[80%] rounded-[100%] bg-gradient-to-bl from-[#f0f9ff] to-[#e0f2fe] opacity-30 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_alternate_reverse]" />
                <div className="absolute -bottom-[20%] left-[20%] w-[80%] h-[60%] rounded-[100%] bg-gradient-to-tr from-[#bae6fd] to-[#f0f9ff] opacity-30 blur-[90px] animate-[pulse_12s_ease-in-out_infinite_alternate]" />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
                {/* Badge */}
                <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-neutral-200 text-[12px] font-bold tracking-widest text-slate-500 uppercase shadow-sm mb-8">
                  Pricing
                </span>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-neutral-900 tracking-tight font-medium"
                  style={{
                    fontSize: 'clamp(38px, 6vw, 68px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em'
                  }}
                >
                  Simple Pricing for<br/>
                  <span>Limitless Creation</span>
                </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-neutral-600 max-w-2xl mx-auto leading-relaxed"
                style={{ fontSize: 'clamp(14px, 3.5vw, 17px)' }}
              >
                Choose a plan that fits your vision. Start building for free, and scale seamlessly as your projects grow with premium full-stack and multi-agent AI generation.
              </motion.p>
              </div>
            </div>

            {/* Pricing Section */}
            <section className="w-full bg-white pb-24 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Questrial', sans-serif" }}>
              <div className="max-w-[1500px] mx-auto">
                {/* Toggle */}
                <div className="flex justify-center mb-16">
                  <div className="inline-flex items-center p-1.5 bg-gray-100/80 rounded-full border border-gray-200/50">
                    <button
                      onClick={() => setIsAnnual(false)}
                      className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                        !isAnnual 
                          ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-slate-900' 
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setIsAnnual(true)}
                      className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2.5 ${
                        isAnnual 
                          ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-slate-900' 
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      Annual <span className="text-[11px] font-bold bg-[#fb8500]/10 text-[#fb8500] px-2 py-0.5 rounded-md">-15%</span>
                    </button>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                  {plans.map((plan, index) => {
                    const CardButton = () => {
                      if (plan.buttonTheme === 'dark') {
                        return (
                          <div className="relative p-[1.5px] rounded-xl overflow-hidden group/btn mb-8 mt-auto cursor-pointer">
                            <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b4a_0%,#7b4aff_50%,#ff6b4a_100%)] opacity-50 group-hover/btn:opacity-100 transition-opacity"></div>
                            <button className="relative z-10 w-full flex items-center justify-between bg-[#0b0f1a] text-white rounded-[10px] pl-5 pr-1.5 py-1.5 text-[13px] font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_4px_12px_rgba(0,0,0,0.15)] hover:bg-black transition-all group-active/btn:translate-y-0.5">
                              <span className="mx-auto flex-1 text-center pr-4 group-hover/btn:-translate-x-1 transition-transform">{plan.buttonText}</span>
                              <div className="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                                <ChevronRight className="w-3.5 h-3.5 text-white" />
                              </div>
                            </button>
                          </div>
                        );
                      }
                      return (
                        <button className="w-full mt-auto mb-8 py-2.5 px-4 rounded-[10px] text-[13px] font-medium transition-colors bg-white text-black border border-gray-300 hover:bg-gray-50 shadow-sm">
                          {plan.buttonText}
                        </button>
                      );
                    };

                    const innerCard = (
                      <div className={`p-6 flex flex-col h-full rounded-[14px] ${plan.isGradientBorder ? 'bg-white relative z-10' : ''}`}>
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-[18px] font-medium tracking-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            {plan.name}
                            {plan.highlight && (
                              <span className={plan.highlightColor}>{plan.highlight}</span>
                            )}
                          </div>
                          {plan.icon}
                        </div>

                        <p className="text-gray-600 text-[13px] leading-relaxed mb-6 h-10">
                          {plan.description}
                        </p>

                        <div className="mb-2 h-12 flex items-end" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={isAnnual ? 'annual' : 'monthly'}
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={{ duration: 0.15 }}
                              className="flex items-baseline"
                            >
                              {plan.monthlyPrice === 'Custom' ? (
                                <span className="text-3xl tracking-tight">Custom</span>
                              ) : (
                                <>
                                  <span className="text-4xl tracking-tight">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                                  <span className="text-lg ml-1.5 tracking-tight text-gray-800">USD</span>
                                </>
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                        <div className="text-[13px] text-gray-500 mb-6">
                          {plan.period}
                        </div>

                        {/* Credit Dropdown */}
                        {plan.hasCreditDropdown && plan.initialCredits && (
                          <CreditDropdown initialCredits={plan.initialCredits} />
                        )}

                        <CardButton />

                        <ul className="space-y-3 flex-grow">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-[13px] text-gray-700">
                              <Check className="h-4 w-4 mr-2.5 shrink-0 text-gray-800" strokeWidth={1.5} />
                              <span className="leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                    if (plan.isGradientBorder) {
                      return (
                        <div key={index} className="relative rounded-2xl p-[1.5px] shadow-sm overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                          <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b4a_0%,#7b4aff_50%,#ff6b4a_100%)] opacity-80"></div>
                          {innerCard}
                        </div>
                      );
                    }

                    return (
                      <div key={index} className={`rounded-2xl ${plan.cardStyle} shadow-sm flex flex-col h-full hover:scale-[1.01] hover:shadow-sm transition-all duration-300`}>
                        {innerCard}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Comparison Table Section */}
            <section className="w-full bg-white py-24 border-t border-neutral-100">
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                
                {/* Responsive Table Wrap */}
                <div className="w-full overflow-x-auto pb-8 scrollbar-thin">
                  <table className="w-full border-collapse bg-white table-fixed min-w-[800px]">
                    
                    {/* Minimal Headers */}
                    <thead className="bg-white">
                      <tr>
                        <th className="py-6 pr-6 text-left w-[28%] bg-white border-b border-neutral-100 align-bottom">
                          <h2 className="text-3xl font-semibold text-neutral-900 mb-2 tracking-tight">Compare features across plans</h2>
                        </th>
                        
                        {/* Free Column */}
                        <th className="px-4 py-6 text-left w-[18%] bg-white border-b border-neutral-100 align-bottom">
                          <div className="text-[15px] font-medium text-neutral-900 mb-2">Free</div>
                          <div className="text-3xl font-semibold text-neutral-900 mb-1 tracking-tight">$0/mo</div>
                          <div className="text-[13px] text-neutral-500 font-medium mb-4">5 credits daily</div>
                          <button className="w-full py-2 px-4 rounded-[10px] text-[13px] font-medium transition-colors bg-white text-black border border-neutral-200 hover:bg-neutral-50 shadow-sm">
                            Get Started
                          </button>
                        </th>

                        {/* Pro Column */}
                        <th className="px-4 py-6 text-left w-[18%] bg-white border-b border-neutral-100 align-bottom">
                          <div className="text-[15px] font-medium text-neutral-900 mb-2">Pro</div>
                          <div className="text-3xl font-semibold text-neutral-900 mb-1 tracking-tight">$19/mo</div>
                          <div className="text-[13px] text-neutral-500 font-medium mb-4">1,000 credits / mo</div>
                          <button className="w-full py-2 px-4 rounded-[10px] text-[13px] font-medium transition-colors bg-neutral-900 text-white hover:bg-black shadow-sm">
                            Get Started
                          </button>
                        </th>

                        {/* Studio Column */}
                        <th className="px-4 py-6 text-left w-[18%] bg-white border-b border-neutral-100 align-bottom">
                          <div className="text-[15px] font-medium text-neutral-900 mb-2 italic tracking-tight">Studio</div>
                          <div className="text-3xl font-semibold text-neutral-900 mb-1 tracking-tight">$59/mo</div>
                          <div className="text-[13px] text-neutral-500 font-medium mb-4">4,000 credits / mo</div>
                          <button className="w-full py-2 px-4 rounded-[10px] text-[13px] font-medium transition-colors bg-neutral-900 text-white hover:bg-black shadow-sm">
                            Get Started
                          </button>
                        </th>

                        {/* Enterprise Column */}
                        <th className="px-4 py-6 text-left w-[18%] bg-white border-b border-neutral-100 align-bottom">
                          <div className="text-[15px] font-medium text-neutral-900 mb-2">Enterprise</div>
                          <div className="text-3xl font-semibold text-neutral-900 mb-1 tracking-tight">Custom</div>
                          <div className="text-[13px] text-neutral-500 font-medium mb-4">Unlimited scaling</div>
                          <button className="w-full py-2 px-4 rounded-[10px] text-[13px] font-medium transition-colors bg-white text-black border border-neutral-200 hover:bg-neutral-50 shadow-sm">
                            Book a call
                          </button>
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      <TableSection title="Core Platform" data={corePlatformData} />
                      <TableSection title="Code & Deployment" data={codeDeploymentData} />
                      <TableSection title="Integrations" data={integrationsData} />
                      <TableSection title="AI Features" data={aiFeaturesData} />
                      <TableSection title="Collaboration" data={collaborationData} />
                      <TableSection title="Support" data={supportData} />
                    </tbody>

                  </table>
                </div>
              </div>
            </section>


            {/* FAQ Section */}
            <section className="w-full bg-[#fcfcfc] pb-24 border-t border-neutral-100">
              <div className="max-w-[1100px] mx-auto px-5 pt-20">
                
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight mb-4 text-neutral-900" style={{ letterSpacing: '-0.02em' }}>
                    Frequently asked questions
                  </h2>
                  <p className="text-[16px] text-neutral-500 font-medium">
                    Have other questions? Get in touch with our team via{' '}
                    <a href="mailto:support@muse.ai" className="text-neutral-900 hover:text-[#fb8500] transition-colors underline underline-offset-4 decoration-neutral-300 hover:decoration-[#fb8500]">
                      support@muse.ai
                    </a>
                  </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
                  {visibleFaqs.map((faq, index) => {
                    const isActive = activeFaqIndex === index;
                    return (
                      <div 
                        key={index}
                        onClick={() => setActiveFaqIndex(isActive ? null : index)}
                        className={`group py-6 cursor-pointer border-b border-neutral-200/70 transition-colors ${
                          index === 0 || index === 1 ? 'lg:border-t lg:border-neutral-200/70' : ''
                        } ${index === 0 ? 'border-t border-neutral-200/70' : ''}`}
                      >
                        <div className="flex justify-between items-center text-[15px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors gap-6 pr-2">
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
                    );
                  })}
                </div>

                {/* Show All Toggle */}
                <div className="flex justify-center mt-16">
                  <button 
                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                    className="px-6 py-2.5 rounded-lg border border-neutral-200/80 text-neutral-700 text-[14px] font-semibold hover:bg-neutral-50 hover:text-neutral-900 transition-all bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                  >
                    {showAllFaqs ? "Show fewer FAQs" : "Show all FAQs"}
                  </button>
                </div>

              </div>
            </section>

            {/* AI Chatbox Section */}
            <section className="w-full bg-[#fcfcfc] pb-32 pt-12 border-t border-neutral-100 relative overflow-hidden">
              {/* Subtle animated background meshes for the whole section */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#ff6b4a]/5 to-[#7b4aff]/5 rounded-full blur-[120px] pointer-events-none"></div>

              <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center flex flex-col items-center">
                  
                  <span className="inline-block py-1.5 px-3 rounded-full bg-white border border-neutral-200 text-[12px] font-bold tracking-widest text-[#fb8500] uppercase shadow-sm mb-6">
                    AI App Builder
                  </span>
                  
                  <h2 className="text-4xl md:text-[56px] font-semibold tracking-tight text-neutral-900 mt-2 max-w-2xl leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                    What will you build today?
                  </h2>
                  <p className="text-neutral-500 mt-6 max-w-xl mx-auto text-[17px] leading-relaxed">
                    Describe your vision and watch as our multi-agent AI brings it to life with production-ready code in seconds.
                  </p>
                  
                  {/* Functional LandingChatbox */}
                  <div className="mt-16 w-full max-w-3xl mx-auto relative z-20 flex justify-center">
                    <LandingChatbox />
                  </div>

                </div>
              </div>
            </section>

            {/* Footer */}
            <FooterParallax scrollContainer={scrollContainerRef} />

          </div>
        </div>

      </div>
    </div>
  );
}

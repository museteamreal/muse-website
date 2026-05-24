import { useState } from 'react';
import { Check, User, Users, ChevronRight, ChevronDown, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

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

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Questrial', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Pricing and plans
          </h2>
          <p className="text-base text-gray-600 mb-10">
            Choose the perfect subscription tailored for you and your team.
          </p>
          
          {/* Toggle */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan, index) => {
            
            // Re-usable button for the cards
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
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[18px] font-medium tracking-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {plan.name}
                    {plan.highlight && (
                      <span className={plan.highlightColor}>{plan.highlight}</span>
                    )}
                  </div>
                  {plan.icon}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-[13px] leading-relaxed mb-6 h-10">
                  {plan.description}
                </p>

                {/* Price */}
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

                {/* Button */}
                <CardButton />

                {/* Features */}
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
                  {/* Revolving gradient border */}
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
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { SiHubspot, SiTelegram, SiDiscord, SiSentry, SiPosthog, SiSlack, SiGmail, SiFigma, SiGithub, SiLinear, SiGooglecalendar, SiSnowflake, SiSalesforce, SiTwilio, SiNotion, SiOpenai, SiShopify, SiStripe, SiAirtable } from 'react-icons/si';
import { FaEnvelope, FaFire } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ALL_CONNECTORS } from '../../data/connectors';

const LOGOS_ROW_1 = [
  { name: 'HubSpot', icon: <SiHubspot /> }, { name: 'Shopify', icon: <SiShopify /> }, { name: 'Telegram', icon: <SiTelegram /> }, 
  { name: 'Discord', icon: <SiDiscord /> }, { name: 'Sentry', icon: <SiSentry /> }, { name: 'PostHog', icon: <SiPosthog /> }, 
  { name: 'Stripe', icon: <SiStripe /> }, { name: 'Slack', icon: <SiSlack /> }, { name: 'Gmail', icon: <SiGmail /> }
];
const LOGOS_ROW_2 = [
  { name: 'OpenAI', icon: <SiOpenai /> }, { name: 'Figma', icon: <SiFigma /> }, { name: 'GitHub', icon: <SiGithub /> }, 
  { name: 'Resend', icon: <FaEnvelope /> }, { name: 'Linear', icon: <SiLinear /> }, { name: 'Google Calendar', icon: <SiGooglecalendar /> }, 
  { name: 'Firecrawl', icon: <FaFire /> }, { name: 'Airtable', icon: <SiAirtable /> }
];

export default function ConnectorsModal() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showBanner, setShowBanner] = useState(true);

  // Check local storage for banner state on mount
  useEffect(() => {
    const bannerHidden = localStorage.getItem('muse_connectors_banner_hidden_v2');
    if (bannerHidden === 'true') {
      setShowBanner(false);
    }
  }, []);

  const handleGotIt = () => {
    setShowBanner(false);
    localStorage.setItem('muse_connectors_banner_hidden_v2', 'true');
  };

  const handleClose = () => {
    navigate('/dashboard');
  };

  const filteredConnectors = ALL_CONNECTORS.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 sm:p-6 overflow-hidden">
      {/* Background click handler */}
      <div className="absolute inset-0" onClick={handleClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30,
          mass: 0.8
        }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-10 shrink-0">
          <h2 className="text-xl font-bold text-gray-900">Connectors</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-1.5 w-64 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all"
              />
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto chat-scrollbar relative bg-white">
          
          {/* Banner Section */}
          <AnimatePresence>
            {showBanner && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="relative overflow-hidden border-b border-gray-100"
              >
                {/* Marquee Background */}
                <div className="relative flex flex-col pt-8 pb-4 gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  {/* Row 1 - moving left */}
                  <div className="flex w-[200%] animate-marquee-left opacity-40">
                    {[...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1].map((logo, i) => (
                      <div key={`r1-${i}`} className="flex items-center gap-1.5 px-4 whitespace-nowrap">
                        <div className="w-5 h-5 flex items-center justify-center text-gray-500 shrink-0">
                          {logo.icon}
                        </div>
                        <span className="font-medium text-gray-600 text-sm">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* Row 2 - moving right */}
                  <div className="flex w-[200%] animate-marquee-right opacity-40">
                    {[...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2].map((logo, i) => (
                      <div key={`r2-${i}`} className="flex items-center gap-1.5 px-4 whitespace-nowrap">
                        <div className="w-5 h-5 flex items-center justify-center text-gray-500 shrink-0">
                          {logo.icon}
                        </div>
                        <span className="font-medium text-gray-600 text-sm">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Banner Content */}
                <div className="relative pb-10 px-6 flex flex-col items-center justify-center text-center z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                    Build from what you already use
                  </h3>
                  <p className="text-gray-600 text-[14px] mb-1">
                    Connectors let your MUSE app talk to external tools like Stripe, Slack, and Google.
                  </p>
                  <p className="text-gray-600 text-[14px] mb-5">
                    Ask the agent to get started.
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                      View the docs
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={handleGotIt}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Connectors Grid */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">App & Chat connectors</h3>
              <p className="text-gray-500 text-[15px]">
                Add functionality to your apps. Configured once by admins, available to your workspace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredConnectors.map((connector) => (
                <div 
                  key={connector.id}
                  onClick={() => navigate(`/dashboard/connector/${connector.id}`)}
                  className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer bg-white group"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white shadow-sm ${connector.bgColor}`}>
                    {connector.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5 truncate">{connector.name}</h4>
                    <p className="text-[12px] text-gray-500 truncate">{connector.desc}</p>
                  </div>

                  {connector.enabled && (
                    <div className="px-1.5 py-0.5 bg-green-50 text-green-700 text-[11px] font-semibold rounded border border-green-200/60 shrink-0">
                      Enabled
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredConnectors.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                No connectors found for "{searchQuery}"
              </div>
            )}
          </div>

          {/* Request Footer */}
          <div className="px-6 pb-8 pt-4">
            <div className="p-5 rounded-2xl border border-gray-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <div>
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 text-gray-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Missing a connector?</h4>
                <p className="text-sm text-gray-500">Request new connectors or support the ones you care about</p>
              </div>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                Request
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

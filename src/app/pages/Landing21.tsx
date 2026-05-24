import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Plus, Mic, ArrowUp, Play } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Landing21() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Where is customer data stored?", a: "Our primary infrastructure is hosted in SOC 2 Type II compliant AWS and Google Cloud data centers in the US and EU. You can choose your preferred data residency region." },
    { q: "Is customer data used to train AI?", a: "No. We have strict agreements in place ensuring that customer data, including code and interactions, is never used to train foundation models." },
    { q: "Is Lovable multi-tenant, and how is customer data isolated?", a: "While the platform is multi-tenant, every operation runs in isolated, ephemeral sandboxes. Compute resources are never shared between tenants, eliminating cross-contamination risks." },
    { q: "Which subprocessors does Lovable use?", a: "We use a carefully vetted list of industry-standard subprocessors for core infrastructure (e.g., AWS, GCP) and operational services. A full list is available in our Trust Center." },
    { q: "Does Lovable access or clone our source code?", a: "Your source code is encrypted at rest and in transit. It is accessed only during active sessions within your isolated environment and is never permanently cloned or stored by us." },
    { q: "Does Lovable require access to our CI/CD pipelines or...", a: "No. You retain full control over your deployment lifecycle. We provide integrations, but they are entirely optional and configurable to your security policies." }
  ];

  const templates = [
    { title: "Persona portfolio", desc: "Premium, modern portfolio", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60" },
    { title: "Lovable slides", desc: "Create presentations with builder", img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&auto=format&fit=crop&q=60" },
    { title: "Architect Portfolio Website Template", desc: "Minimalist & structured", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60" },
    { title: "Fashion blog", desc: "Minimal, playful design", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=60" },
    { title: "SaaS Platform Website Template", desc: "High-converting, modern style", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60" },
    { title: "Personal Blog", desc: "Muted, intimate design", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#000000] font-sans selection:bg-neutral-800 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-center text-center px-4">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
          <div className="absolute top-[-10%] w-full max-w-[1200px] h-[600px] opacity-80 mix-blend-multiply filter blur-[80px]">
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#ff2e93] rounded-full"></div>
            <div className="absolute top-[10%] left-[40%] w-[500px] h-[500px] bg-[#00e5ff] rounded-full"></div>
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#4285f4] rounded-full"></div>
            <div className="absolute top-[40%] left-[30%] w-[600px] h-[300px] bg-[#ffeb3b] rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-[64px] leading-tight font-bold tracking-tight mb-6"
          >
            Build something Lovable
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto mb-12 font-medium"
          >
            Create apps and websites by chatting with AI
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[700px]"
          >
            <div className="w-full bg-[#fcfcfc] rounded-3xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-200/50 flex flex-col items-start gap-8 relative overflow-hidden backdrop-blur-xl">
              <div className="w-full flex justify-start pl-2 pt-2">
                <span className="text-[16px] text-neutral-400 font-medium">Ask Lovable to create a site to...</span>
              </div>
              
              <div className="w-full flex items-center justify-between px-2 pb-1">
                <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:bg-neutral-50 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                    Build <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-black transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors">
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-b border-neutral-200/60 flex flex-col items-center justify-center space-y-8 px-4">
        <p className="text-sm font-medium text-neutral-500">Teams from top companies build with Lovable</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/HubSpot_Logo.svg" alt="HubSpot" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Zendesk_logo.svg" alt="Zendesk" className="h-5 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" className="h-5 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-6 object-contain" />
        </div>
      </section>

      {/* Meet Lovable */}
      <section className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Meet Lovable</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="w-full bg-[#f6f5f1] rounded-[32px] aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 w-full max-w-sm flex flex-col gap-4">
              <div className="text-sm font-medium text-neutral-800">Update customer feedback tool with 2 days turnaround</div>
              <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                <div className="flex gap-2">
                  <div className="w-16 h-8 bg-neutral-100 rounded-lg"></div>
                  <div className="w-16 h-8 bg-neutral-100 rounded-lg"></div>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-purple-600 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-10 lg:pt-8">
            <div className="opacity-40 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-3xl font-bold mb-3">Start with an idea</h3>
              <p className="text-xl text-neutral-600">Describe the app or website you want to create or drop in screenshots and docs.</p>
            </div>
            <div className="">
              <h3 className="text-3xl font-bold mb-3">Watch it come to life</h3>
              <p className="text-xl text-neutral-600">See your vision transform into a working prototype in real-time as AI builds it for you.</p>
            </div>
            <div className="opacity-40 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-3xl font-bold mb-3">Refine and ship</h3>
              <p className="text-xl text-neutral-600">Iterate on your creation with simple feedback and deploy it to the world with one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Templates */}
      <section className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Discover templates</h2>
            <p className="text-xl text-neutral-600">Start your next project with a template</p>
          </div>
          <button className="px-5 py-2.5 text-sm bg-white border border-neutral-200 text-black rounded-xl font-medium hover:bg-neutral-50 transition-colors">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((tpl, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-4 border border-neutral-200/60">
                <img src={tpl.img} alt={tpl.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold mb-1">{tpl.title}</h3>
              <p className="text-neutral-500">{tpl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lovable in numbers */}
      <section className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Lovable in numbers</h2>
          <p className="text-xl text-neutral-600">Millions of builders are already turning ideas into reality</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f6f5f1] rounded-[32px] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[320px]">
            <div className="text-6xl md:text-7xl font-bold tracking-tight">36M+</div>
            <div className="text-lg text-neutral-600 font-medium">projects built on Lovable</div>
          </div>
          <div className="bg-[#f6f5f1] rounded-[32px] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[320px]">
            <div className="text-6xl md:text-7xl font-bold tracking-tight">200K+</div>
            <div className="text-lg text-neutral-600 font-medium">projects built per day on Lovable</div>
          </div>
          <div className="bg-[#f6f5f1] rounded-[32px] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[320px]">
            <div className="text-6xl md:text-7xl font-bold tracking-tight">300M</div>
            <div className="text-lg text-neutral-600 font-medium">visits per day to Lovable-built applications</div>
          </div>
        </div>
      </section>

      {/* Ready to build */}
      <section className="relative py-32 px-4 md:px-8 w-full overflow-hidden flex flex-col items-center justify-center text-center mt-12">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
          <div className="absolute bottom-[-20%] w-full max-w-[1200px] h-[600px] opacity-80 mix-blend-multiply filter blur-[80px]">
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#4285f4] rounded-full"></div>
            <div className="absolute top-[10%] left-[40%] w-[500px] h-[500px] bg-[#ff2e93] rounded-full"></div>
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#ffeb3b] rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Ready to build?</h2>
          
          <div className="w-full max-w-[700px] bg-[#fcfcfc] rounded-3xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-200/50 flex flex-col items-start gap-8 relative overflow-hidden backdrop-blur-xl">
            <div className="w-full flex justify-start pl-2 pt-2">
              <span className="text-[16px] text-neutral-400 font-medium">Ask Lovable to create a web app that...</span>
            </div>
            
            <div className="w-full flex items-center justify-between px-2 pb-1">
              <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:bg-neutral-50 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-neutral-500 hover:text-black transition-colors">
                  Build <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-black transition-colors">
                  <Mic className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8 max-w-3xl mx-auto bg-white rounded-3xl mb-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-neutral-100 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
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
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

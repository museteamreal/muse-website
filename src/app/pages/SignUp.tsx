import React from 'react';
import { motion } from 'framer-motion';
import { Circle, EyeOff } from 'lucide-react';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

export default function SignUp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="flex min-h-screen w-full bg-[#17171A] items-center justify-center p-4 lg:p-8">
      
      <div className="flex w-full max-w-5xl bg-black rounded-[32px] overflow-hidden shadow-2xl h-[760px] max-h-[95vh]">
        
        {/* Left Column (Hero) */}
        <div className="hidden lg:flex relative flex-col items-center justify-center w-[48%] px-12 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8B31FF] via-[#2A0845] to-black">
          <motion.div 
            className="z-10 w-full max-w-[280px] space-y-10 flex flex-col items-center mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <Circle className="w-5 h-5 text-white" strokeWidth={3} />
              <span className="text-[22px] font-semibold tracking-tight text-white">OnlyPipe</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3 text-center">
              <h1 className="text-3xl font-medium tracking-tight text-white">Get Started with Us</h1>
              <p className="text-white/60 text-[13px] leading-relaxed">
                Complete these easy steps to register your account.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col space-y-3 w-full pt-4">
              <StepItem number={1} text="Sign up your account" active />
              <StepItem number={2} text="Set up your workspace" />
              <StepItem number={3} text="Set up your profile" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column (Sign Up Form) */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-16 lg:px-20 overflow-y-auto bg-black">
          <motion.div 
            className="w-full max-w-[360px] space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-1.5 text-center">
              <h2 className="text-2xl font-medium text-white tracking-tight">Sign Up Account</h2>
              <p className="text-white/50 text-[11px]">Enter your personal data to create your account.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton icon={GoogleIcon} label="Google" />
              <SocialButton icon={GithubIcon} label="Github" />
            </div>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/5"></div>
              <span className="flex-shrink-0 mx-4 bg-black px-1 text-[10px] text-white/30 uppercase">
                Or
              </span>
              <div className="flex-grow border-t border-white/5"></div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="First Name" placeholder="eg. John" />
                <InputGroup label="Last Name" placeholder="eg. Francisco" />
              </div>
              
              <InputGroup label="Email" placeholder="eg. johnfrans@gmail.com" type="email" />
              
              <div className="space-y-2">
                <div className="relative">
                  <InputGroup 
                    label="Password" 
                    placeholder="Enter your password" 
                    type="password" 
                  />
                  <div className="absolute right-3 top-[22px] flex items-center justify-center h-[42px] w-10 text-white/30">
                    <button type="button" className="hover:text-white transition-colors flex items-center justify-center">
                      <EyeOff className="w-[15px] h-[15px]" />
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-white/40">Must be at least 8 characters.</p>
              </div>

              <button type="submit" className="w-full h-11 mt-8 bg-white text-black font-semibold rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all text-sm">
                Sign Up
              </button>
            </form>

            <p className="text-center text-[12px] text-white/40 pt-2">
              Already have an account? <a href="#" className="text-white font-medium hover:underline underline-offset-4">Log in</a>
            </p>
          </motion.div>
        </div>

      </div>
    </main>
  );
}

function StepItem({ number, text, active }: { number: number; text: string; active?: boolean }) {
  return (
    <div className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl ${active ? 'bg-white' : 'bg-[#1C1C1E]'}`}>
      <div className={`flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold ${active ? 'bg-black text-white' : 'bg-[#2E2E32] text-white/40'}`}>
        {number}
      </div>
      <span className={`font-medium text-[13px] tracking-tight ${active ? 'text-black' : 'text-white/60'}`}>{text}</span>
    </div>
  );
}

function SocialButton({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <button type="button" className="flex items-center justify-center w-full h-[42px] space-x-2 bg-transparent border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
      <Icon className="w-[15px] h-[15px] text-white" />
      <span className="text-[13px] font-medium text-white/90">{label}</span>
    </button>
  );
}

function InputGroup({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-1.5 w-full flex flex-col">
      <label className="text-[11px] font-medium text-white/60">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#1C1C1E] border-none outline-none rounded-xl h-[42px] px-4 text-[13px] text-white placeholder:text-white/30 focus:ring-1 focus:ring-white/20"
      />
    </div>
  );
}

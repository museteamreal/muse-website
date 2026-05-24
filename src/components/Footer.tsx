
import { Globe } from 'lucide-react';

const footerLinks = {
  Company: ['Careers', 'Press & media', 'Enterprise', 'Security', 'Trust center', 'Partnerships'],
  Product: ['Pricing', 'Student discount', 'Marketers', 'Ops', 'People', 'Prototyping', 'Internal Tools', 'Connections', 'Changelog', 'Status'],
  Resources: ['Learn', 'Templates', 'Guides', 'Connectors', 'Videos', 'Blog', 'Support', 'Reviews', 'Sitemap'],
  Legal: ['Privacy policy', 'Do not sell or share my personal information', 'Cookie settings', 'Enterprise terms', 'General terms', 'Desktop app terms', 'Domain registration terms', 'DMCA copyright policy', 'Platform rules', 'Report abuse', 'Report security concerns', 'DPA'],
  Community: ['Become a partner', 'Hire a Lovable expert', 'Affiliates', 'Code of conduct', 'Discord', 'Reddit', 'X / Twitter', 'YouTube', 'LinkedIn'],
};

export default function Footer() {
  return (
    <div className="relative w-full pt-32 pb-8 px-4 md:px-8 mt-20">
      {/* Gradient background behind the footer box */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-t from-blue-400/40 via-blue-200/20 to-transparent blur-[80px] rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-gradient-to-tr from-purple-400/30 to-transparent blur-[80px] rounded-full opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-gradient-to-tl from-orange-400/30 to-transparent blur-[80px] rounded-full opacity-50"></div>
      </div>

      <footer className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="bg-white rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row justify-between gap-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-100">
          {/* Left side: Logo & Language */}
          <div className="flex flex-col justify-between h-full min-h-[300px]">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-sm" style={{ borderTopLeftRadius: '50%', borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}></div>
            <button className="flex items-center gap-2 text-sm text-neutral-600 font-medium mt-auto hover:text-black transition-colors">
              <Globe className="w-4 h-4" />
              EN
            </button>
          </div>

          {/* Right side: Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 w-full max-w-5xl">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <h4 className="text-[13px] font-semibold text-neutral-900">{category}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13px] text-neutral-600 hover:text-black transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

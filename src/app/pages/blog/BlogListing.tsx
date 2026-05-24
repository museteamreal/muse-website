import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../../components/Navbar';
import FooterParallax from '../../components/FooterParallax';
import '../../../styles/fonts.css';

// Mock Data
const blogPosts = [
  {
    id: 1,
    slug: 'we-gave-our-agent-a-vent-tool',
    title: 'We Gave Our Agent a Vent Tool',
    description: 'How MUSE is self-improving every hour by learning from production friction and building a corpus of problems and solutions...',
    category: 'Inside MUSE',
    author: 'Benjamin Verbeek',
    date: 'May 21, 2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'connect-muse-to-google-workspace',
    title: 'Connect MUSE to Google Workspace and Gemini Enterprise to build apps and more on data you already have',
    description: 'Announcing MUSE x Google connectors',
    category: 'Announcements',
    author: 'Stephanie Toh',
    date: 'May 19, 2026',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'setting-the-standard-for-agentic-development',
    title: 'Setting the standard for agentic development',
    description: 'A deep dive into our core principles and the future of AI-assisted engineering.',
    category: 'Inside MUSE',
    author: 'Alice Johnson',
    date: 'May 13, 2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'what-ctos-ask-before-adopting-ai',
    title: 'What CTOs ask before adopting AI development tools (and how MUSE thinks about the answers)',
    description: 'Security, scalability, and code ownership in the age of AI.',
    category: 'Inside MUSE',
    author: 'David Chen',
    date: 'April 17, 2026',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2634&auto=format&fit=crop',
  }
];

const categories = [
  'Latest',
  'Announcements',
  'Changelog',
  'Inside MUSE',
  'Development 101',
  'Reports',
  'Tutorials',
  'Stories'
];

export default function BlogListing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Latest');
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

  const filteredPosts = activeCategory === 'Latest' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4 font-['Inter',sans-serif] relative">
      <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-sm">
        
        <div 
          ref={scrollContainerRef}
          className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-y-auto overflow-x-hidden no-scrollbar bg-white"
          onScroll={handleScroll}
        >
          <div className="w-full flex flex-col min-h-max bg-white pb-0">
            
            <Navbar isScrolled={isScrolled} isPricingPage={false} />

            {/* Main Content Area */}
            <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-40 pb-32 flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10">
              
              {/* Left Sidebar */}
              <div className="w-full md:w-[220px] shrink-0">
                <div className="sticky top-32">
                  <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Blog</h1>
                  <p className="text-[14px] text-neutral-500 leading-relaxed mb-12 max-w-[180px]">
                    Compiled notes from the MUSE team
                  </p>
                  
                  <nav className="flex flex-col gap-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-left px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                          activeCategory === category
                            ? 'text-neutral-900 font-medium bg-neutral-100/80'
                            : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Grid Area */}
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      key={post.id}
                      className="group cursor-pointer flex flex-col"
                    >
                      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                        <div className="w-full aspect-[1.6/1] rounded-2xl overflow-hidden mb-6 bg-neutral-100 relative shadow-sm">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="text-[13px] font-medium text-neutral-500 mb-2">
                          {post.category}
                        </div>
                        
                        <h2 className="text-[22px] font-semibold text-neutral-900 mb-3 leading-snug group-hover:text-[#fb8500] transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-[15px] text-neutral-600 leading-relaxed mb-5 line-clamp-2">
                          {post.description}
                        </p>
                        
                        <div className="mt-auto text-[13px] text-neutral-500 flex items-center gap-2">
                          <span className="font-medium text-neutral-800">{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {filteredPosts.length === 0 && (
                    <div className="col-span-1 md:col-span-2 text-center py-20 text-neutral-500">
                      No posts found in this category.
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Footer */}
            <FooterParallax scrollContainer={scrollContainerRef} />

          </div>
        </div>
      </div>
    </div>
  );
}

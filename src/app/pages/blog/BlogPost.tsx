import { useState, useEffect, useRef } from 'react';
import type { UIEvent as ReactUIEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import FooterParallax from '../../components/FooterParallax';
import { blogPosts } from './BlogListing';
import '../../../styles/fonts.css';

// SVG Icons for Share
const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.82 4.33 14.61 4.77 14.46 5.11C12.87 4.87 11.28 4.87 9.72 5.11C9.56 4.77 9.35 4.33 9.17 4C7.67 4.26 6.23 4.71 4.9 5.33C2.22 9.36 1.49 13.29 1.89 17.18C3.68 18.5 5.4 19.31 7.11 19.85C7.53 19.27 7.91 18.65 8.24 18C7.63 17.77 7.04 17.48 6.48 17.14C6.63 17.03 6.77 16.91 6.91 16.79C10.23 18.33 13.96 18.33 17.22 16.79C17.36 16.91 17.5 17.03 17.65 17.14C17.09 17.48 16.5 17.77 15.89 18C16.22 18.65 16.6 19.27 17.02 19.85C18.73 19.31 20.45 18.5 22.24 17.18C22.71 12.63 21.46 8.76 19.27 5.33ZM8.56 14.54C7.51 14.54 6.64 13.57 6.64 12.39C6.64 11.21 7.49 10.24 8.56 10.24C9.64 10.24 10.51 11.21 10.49 12.39C10.49 13.57 9.64 14.54 8.56 14.54ZM15.59 14.54C14.54 14.54 13.67 13.57 13.67 12.39C13.67 11.21 14.52 10.24 15.59 10.24C16.67 10.24 17.54 11.21 17.52 12.39C17.52 13.57 16.65 14.54 15.59 14.54Z" fill="currentColor"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" fill="currentColor"/>
  </svg>
);

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  const sections = [
    { id: 'section-1', title: 'We Gave Our Agent a Vent Tool' },
    { id: 'section-2', title: 'Types of getting stuck' },
    { id: 'section-3', title: 'Type 1: MUSE Stack Overflow (LSO)' },
    { id: 'section-4', title: 'Type 2 stuck: Agent vents' },
    { id: 'section-5', title: 'Closing the loop' },
  ];

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
  }, [slug]); // Re-init on route change

  const handleScroll = (e: ReactUIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 50);

    // Simple scroll spy logic
    let current = '';
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) {
          current = section.id;
        }
      }
    }
    setActiveSection(current);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el && scrollContainerRef.current) {
      const topPos = el.offsetTop - 120; // offset for navbar
      scrollContainerRef.current.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  };

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

            {/* Post Header & Content */}
            <div className="max-w-[1000px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
              
              <Link to="/blog" className="inline-flex items-center text-[14px] text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
                <ChevronLeft className="w-4 h-4 mr-1" />
                All posts
              </Link>

              <div className="text-[14px] text-neutral-500 mb-4">
                Published {post.date} in {post.category}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight text-neutral-900 mb-12 leading-[1.1]">
                {post.title}
              </h1>

              <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-[14px] text-neutral-600 mb-16">
                Author: <span className="font-semibold text-neutral-900">{post.author}</span> at MUSE
              </div>

              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Main Content */}
                <div className="flex-1 min-w-0 prose prose-lg prose-neutral max-w-none">
                  
                  <p className="text-[18px] leading-relaxed text-neutral-800 mb-8 font-medium">
                    {post.description}
                  </p>

                  <div id="section-1" className="pt-8">
                    <p className="mb-6 leading-relaxed">
                      We sometimes joke that if the agent were a normal employee it would have complained about its working conditions: unclear instructions and heavy workloads. Instead, it gets stuck, throws an error, or produces an unexpected result.
                    </p>
                    <p className="mb-6 leading-relaxed">
                      To build a reliable system, we need to understand exactly when and why it fails. That's why we built a vent tool.
                    </p>
                  </div>

                  <div id="section-2" className="pt-8">
                    <h2 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-900">Types of getting stuck</h2>
                    <p className="mb-6 leading-relaxed">
                      When building autonomous systems that generate code, you quickly realize there are different flavors of failure. Sometimes it's a syntax error, sometimes it's a hallucinated library, and sometimes the agent just doesn't know what to do next.
                    </p>
                  </div>

                  <div id="section-3" className="pt-8">
                    <h2 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-900">Type 1: MUSE Stack Overflow (LSO)</h2>
                    <p className="mb-6 leading-relaxed">
                      This is when the code itself is fundamentally flawed or when a library update breaks an existing pattern. We've compiled thousands of these instances into an internal knowledge base that the agent can query before it writes new code.
                    </p>
                    <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 my-8">
                      <code className="text-[14px] text-neutral-800">
                        Error: Missing required property 'theme' in component layout.
                      </code>
                    </div>
                  </div>

                  <div id="section-4" className="pt-8">
                    <h2 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-900">Type 2 stuck: Agent vents</h2>
                    <p className="mb-6 leading-relaxed">
                      This is the interesting one. The agent explicitly uses a tool to tell us it's confused. "A flaw in my code--copy tool makes me unable to move files containing special characters." This direct feedback loop is invaluable for improving our underlying architecture.
                    </p>
                  </div>

                  <div id="section-5" className="pt-8">
                    <h2 className="text-2xl font-semibold mb-6 tracking-tight text-neutral-900">Closing the loop</h2>
                    <p className="mb-6 leading-relaxed">
                      By categorizing and analyzing these vents, we can rapidly deploy fixes to the core prompts, context window management, and tool definitions. It's self-improvement driven by real-world friction.
                    </p>
                  </div>

                  {/* Author Box */}
                  <div className="mt-24 p-8 bg-[#fafafa] rounded-2xl border border-neutral-200 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-neutral-200">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">About the author</h4>
                      <p className="text-[14px] text-neutral-600 leading-relaxed">
                        {post.author} is a former particle physicist and fusion researcher who enjoys solving problems no one has a playbook for yet. He joined MUSE because it lets him do first-principles, cross-disciplinary problem solving every day. He works as a generalist with a focus on MUSE's main agent. Recent work spans user features, infra, and growth: <a href="#" className="underline font-medium text-neutral-900">cross-project referencing</a>, <a href="#" className="underline font-medium text-neutral-900">trimming a significant portion of the system prompt</a>, and <a href="#" className="underline font-medium text-neutral-900">launching the MUSE student discount</a>.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Sidebar (Sticky) */}
                <div className="w-full lg:w-[240px] shrink-0">
                  <div className="sticky top-32">
                    
                    <div className="text-[14px] font-medium text-neutral-900 mb-8 border-b border-neutral-200 pb-8">
                      5 min read
                    </div>
                    
                    <nav className="flex flex-col gap-3 mb-12">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`text-left text-[14px] transition-colors leading-snug ${
                            activeSection === section.id
                              ? 'text-neutral-900 font-medium'
                              : 'text-neutral-500 hover:text-neutral-900'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>

                    <div className="border-t border-neutral-200 pt-8">
                      <div className="text-[14px] font-medium text-neutral-900 mb-4">
                        Share this
                      </div>
                      <div className="flex items-center gap-4 text-neutral-900">
                        <button className="hover:text-[#fb8500] transition-colors"><DiscordIcon /></button>
                        <button className="hover:text-[#fb8500] transition-colors"><XIcon /></button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* Related Articles */}
            <div className="bg-[#fafafa] border-t border-neutral-100 py-24">
              <div className="max-w-[1000px] mx-auto w-full px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-10">Related articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.slice(2, 4).map((relatedPost, i) => (
                    <Link to={`/blog/${relatedPost.slug}`} key={i} className="group flex flex-col h-full">
                      <div className="w-full aspect-[1.6/1] rounded-2xl overflow-hidden mb-6 bg-neutral-100 relative shadow-sm">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="text-[13px] font-medium text-neutral-500 mb-2">
                        {relatedPost.category}
                      </div>
                      <h4 className="text-[20px] font-semibold text-neutral-900 mb-3 leading-snug group-hover:text-[#fb8500] transition-colors">
                        {relatedPost.title}
                      </h4>
                      <div className="mt-auto text-[13px] text-neutral-500">
                        {relatedPost.date}
                      </div>
                    </Link>
                  ))}
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

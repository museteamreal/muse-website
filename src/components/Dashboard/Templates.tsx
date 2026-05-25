import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TemplateDetailsModal from './TemplateDetailsModal';

export const mockTemplates = [
  {
    id: "task-management",
    title: "Task management",
    author: "Base44 App",
    usages: 23346,
    price: "Free",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive task management solution to organize your team, track progress, and hit your deadlines. Built for teams of all sizes with seamless collaboration features.",
    tags: ["Operations", "Productivity"]
  },
  {
    id: "serenity-spa",
    title: "Serenity- Spa & Salon",
    author: "Digital Doctors",
    usages: 2781,
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    description: "Experience the epitome of beauty and tranquility, now perfectly captured in a stunning, high-performance web application. This isn't just a platform - it's a seamless extension of Serenity Spa & Salon's renowned luxury, designed to captivate and convert.\n\nFor your discerning clients, it's an immersive journey: effortlessly browse our exquisite menu of...",
    tags: ["Marketing & Sales", "Lifestyle & Hobbies"]
  },
  {
    id: "code-gen-ai",
    title: "CODE GEN AI",
    author: "Vishal Prajapati",
    usages: 19725,
    price: "Free",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    description: "Describe your vision, and watch as AI crafts a beautiful, responsive website in seconds. Ideal for developers and designers looking to speed up their workflow.",
    tags: ["Content Generation", "Development"]
  }
];

const categories = [
  "All", "Marketing & Sales", "Operations", "Data & Analytics", "Content Generation", "HR & Legal", "Finance", "Education", "Community"
];

export default function Templates() {
  const { id } = useParams();
  
  const [selectedFilter, setSelectedFilter] = useState('All Templates');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredTemplates = mockTemplates.filter(template => {
    // 1. Price Filter
    if (selectedFilter === 'Free Only' && template.price !== 'Free') return false;
    if (selectedFilter === 'Paid Only' && template.price === 'Free') return false;

    // 2. Category Filter
    if (activeCategory !== 'All' && !template.tags.includes(activeCategory)) return false;

    // 3. Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchesTitle = template.title.toLowerCase().includes(query);
      const matchesAuthor = template.author.toLowerCase().includes(query);
      const matchesTags = template.tags.some(tag => tag.toLowerCase().includes(query));
      if (!matchesTitle && !matchesAuthor && !matchesTags) return false;
    }

    return true;
  });

  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#fafafa] relative chat-scrollbar">
      <div className="max-w-[1200px] mx-auto px-8 py-10">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[40px] leading-tight font-semibold text-[#111827] mb-2 tracking-tight">App Templates</h1>
          <p className="text-[17px] text-[#4b5563]">Explore a curated collection of applications built by our community.</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search apps" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-[15px] focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent placeholder-gray-400 shadow-sm"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
              className="flex items-center justify-between gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors flex-1 md:flex-none md:w-[160px]"
            >
              {selectedFilter}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            <AnimatePresence>
              {isFilterDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-[calc(100%+8px)] w-[180px] bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-20"
                >
                  {['All Templates', 'Free Only', 'Paid Only'].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedFilter(option);
                        setIsFilterDropdownOpen(false);
                      }}
                      className={`w-full text-left px-2 py-2 text-[14px] flex items-center hover:bg-gray-50 transition-colors ${
                        selectedFilter === option ? 'bg-[#f4f5f6]' : ''
                      }`}
                    >
                      <div className="w-7 flex items-center justify-center shrink-0">
                        {selectedFilter === option && <Check className="w-4 h-4 text-gray-900" strokeWidth={2} />}
                      </div>
                      <span className={`${selectedFilter === option ? 'text-[#0f3d7a]' : 'text-gray-700'}`}>
                        {option}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Categories */}
        <div className="relative mb-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 [&::-webkit-scrollbar]:hidden snap-x">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`snap-start whitespace-nowrap px-4 py-1.5 rounded-full text-[14px] font-medium border transition-colors ${
                  activeCategory === cat 
                    ? 'bg-[#1f2937] text-white border-[#1f2937]' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Scroll Indicator line */}
          <div className="w-full flex items-center justify-between text-gray-400 mt-1">
            <ChevronLeft className="w-3 h-3" />
            <div className="flex-1 mx-2 h-2 bg-gray-400 rounded-full"></div>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Link key={template.id} to={`/dashboard/templates/${template.id}`} className="group block focus:outline-none">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                {/* Image Aspect Ratio Container */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <img 
                    src={template.image} 
                    alt={template.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 flex flex-col h-full bg-white">
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h3 className="font-semibold text-[17px] text-gray-900 leading-tight line-clamp-1">{template.title}</h3>
                    <span className={`text-[14px] font-medium shrink-0 ${template.price === 'Free' ? 'text-gray-500' : 'text-gray-900'}`}>
                      {template.price}
                    </span>
                  </div>
                  <div className="text-[14px] text-gray-500 mb-1">{template.author}</div>
                  <div className="text-[13px] text-gray-400">{template.usages} usages</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
      
      {/* Modal */}
      {id && <TemplateDetailsModal templateId={id} />}
    </div>
  );
}

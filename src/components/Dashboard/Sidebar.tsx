import {
  Search,
  PanelLeftClose,
  PanelRightClose,
  ChevronDown,
  Home,
  LayoutGrid,
  LayoutTemplate,
  Zap,
  Users,
  ChevronRight,
  Diamond,
  MessageSquareHeart,
  Gift,
  Bell,
  Bot
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

import WorkspacePopup from './WorkspacePopup';
import FeedbackModal from './FeedbackModal';
import InviteModal from './InviteModal';
import NotificationsPopup from './NotificationsPopup';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes('/templates')) {
      setActiveTab('Templates');
    } else if (location.pathname.includes('/connector')) {
      setActiveTab('Connector');
    } else if (location.pathname === '/dashboard' || location.pathname === '/dashboard/') {
      setActiveTab('Home');
    }
  }, [location.pathname]);

  // Popup states
  const [showWorkspacePopup, setShowWorkspacePopup] = useState(false);
  const [showNotificationsPopup, setShowNotificationsPopup] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);

  // Click outside handlers
  const workspaceRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (workspaceRef.current && !workspaceRef.current.contains(event.target as Node)) {
        setShowWorkspacePopup(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotificationsPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div
        className={`hidden md:flex h-full bg-transparent flex-col pt-4 pb-4 px-3 shrink-0 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[72px]' : 'w-[260px]'
          }`}
      >
        {/* Top Header */}
        <div className={`flex items-center mb-6 px-1 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {/* Logo Icon - Click to expand if collapsed */}
          <button
            onClick={() => isCollapsed && setIsCollapsed(false)}
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center text-white overflow-hidden shadow-sm shrink-0 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
              <path d="M4 12H20M4 8H20M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {!isCollapsed && (
            <div className="flex items-center gap-2 text-gray-500">
              <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                <Search className="w-[18px] h-[18px]" strokeWidth={2} />
              </button>
              <button
                onClick={() => setIsCollapsed(true)}
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              >
                <PanelLeftClose className="w-[18px] h-[18px]" strokeWidth={2} />
              </button>
            </div>
          )}
        </div>

        {/* Workspace Selector */}
        <div className="relative mb-4" ref={workspaceRef}>
          <div
            onClick={() => setShowWorkspacePopup(!showWorkspacePopup)}
            className={`flex items-center justify-between px-2 py-1.5 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${isCollapsed ? 'rounded-xl justify-center h-[42px] bg-[#f0f4ff]/50 border-none' : 'rounded-lg'
              }`}
          >
            <div className={`flex items-center gap-2 ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="w-6 h-6 rounded bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-semibold shrink-0">
                Pw
              </div>
              {!isCollapsed && <span className="text-sm font-semibold text-gray-800">Piyush's Workspace</span>}
            </div>
            {!isCollapsed && <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />}
          </div>

          <AnimatePresence>
            {showWorkspacePopup && <WorkspacePopup />}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto chat-scrollbar overflow-x-hidden">
          <nav className="flex flex-col gap-0.5 items-center w-full">
            {/* Apps Section */}
            <div className={`mb-6 border border-gray-200 rounded-lg p-1 bg-white shadow-sm w-full ${isCollapsed ? 'px-1' : ''}`}>
              <button className={`flex items-center gap-2 py-1.5 rounded-md text-gray-800 bg-gray-100 transition-colors ${isCollapsed ? 'w-full justify-center px-0' : 'w-full px-2'}`}>
                <LayoutGrid className="w-4 h-4 text-gray-700 shrink-0" strokeWidth={1.5} />
                {!isCollapsed && <span className="text-sm font-medium">Apps</span>}
              </button>
              <button className={`flex items-center gap-2 py-1.5 mt-0.5 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors ${isCollapsed ? 'w-full justify-center px-0' : 'w-full px-2'}`}>
                <Bot className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                {!isCollapsed && <span className="text-sm font-medium">Website</span>}
              </button>
            </div>

            <button
              className={`flex items-center gap-2 py-2.5 rounded-xl transition-colors text-[13.5px] font-medium ${activeTab === 'Home' ? 'bg-[#f4f4f4] text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                } ${isCollapsed ? 'w-[42px] justify-center px-0' : 'w-full px-2'}`}
              onClick={() => navigate('/dashboard')}
            >
              <Home className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
              {!isCollapsed && <span>Home</span>}
            </button>

            <button className={`flex items-center gap-2 py-2.5 rounded-xl transition-colors text-[13.5px] font-medium text-gray-600 hover:bg-gray-50 ${isCollapsed ? 'w-[42px] justify-center px-0' : 'w-full px-2'}`}>
              <LayoutGrid className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
              {!isCollapsed && <span>All Projects</span>}
            </button>

            <button
              className={`flex items-center gap-2 py-2.5 rounded-xl transition-colors text-[13.5px] font-medium ${activeTab === 'Templates' ? 'bg-[#f4f4f4] text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                } ${isCollapsed ? 'w-[42px] justify-center px-0' : 'w-full px-2'}`}
              onClick={() => navigate('/dashboard/templates')}
            >
              <LayoutTemplate className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
              {!isCollapsed && <span>Templates</span>}
            </button>

            <button
              className={`flex items-center gap-2 py-2.5 rounded-xl transition-colors text-[13.5px] font-medium ${activeTab === 'Connector' ? 'bg-[#f4f4f4] text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                } ${isCollapsed ? 'w-[42px] justify-center px-0' : 'w-full px-2'}`}
              onClick={() => navigate('/dashboard/connector')}
            >
              <Zap className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
              {!isCollapsed && <span>Connector</span>}
            </button>

            <button className={`flex items-center py-2.5 rounded-xl transition-colors text-[13.5px] font-medium text-gray-600 hover:bg-gray-50 ${isCollapsed ? 'w-[42px] justify-center px-0' : 'w-full justify-between px-2'}`}>
              <div className="flex items-center gap-2">
                <Users className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
                {!isCollapsed && <span>Community</span>}
              </div>
              {!isCollapsed && <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
            </button>
          </nav>

          {/* Favorite Apps */}
          {!isCollapsed && (
            <div className="mt-8">
              <button className="w-full flex items-center justify-between px-2 py-1 text-xs text-gray-400 font-medium hover:text-gray-600">
                Favorite apps
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="mt-2 mx-2 border border-dashed border-gray-200 rounded-md py-4 text-center">
                <span className="text-xs text-gray-400">No favorite apps yet.</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions for Collapsed State */}
        {isCollapsed && (
          <div className="mt-auto flex flex-col items-center gap-2">
            <button className="w-[42px] h-[42px] rounded-xl border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Diamond className="w-5 h-5 text-orange-500" strokeWidth={1.5} />
            </button>
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setShowNotificationsPopup(!showNotificationsPopup)}
                className="w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Bell className="w-[18px] h-[18px] text-gray-600" strokeWidth={1.5} />
              </button>
              <AnimatePresence>
                {showNotificationsPopup && <NotificationsPopup />}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setShowFeedbackModal(true)}
              className="w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-50 rounded-xl transition-colors"
            >
              <MessageSquareHeart className="w-[18px] h-[18px] text-gray-600" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setShowInviteModal(true)}
              className="w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-50 rounded-xl transition-colors"
            >
              <Gift className="w-[18px] h-[18px] text-gray-600" strokeWidth={1.5} />
            </button>
            <div className="mt-2 mb-2 w-full flex justify-center">
              <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: "w-8 h-8" } }} />
            </div>
          </div>
        )}

        {/* Upgrade Plan (Full Width) */}
        {!isCollapsed && (
          <div className="mt-auto pt-4 border-t border-gray-100 shrink-0">
            <button 
              onClick={() => navigate('/dashboard/billing')}
              className="w-full text-left relative rounded-xl p-[1.5px] shadow-sm overflow-hidden group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 block"
            >
              {/* Revolving gradient border */}
              <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b4a_0%,#7b4aff_50%,#ff6b4a_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Inner content */}
              <div className="relative z-10 bg-[#fffaf5] rounded-[10px] p-3 flex items-center justify-between shadow-[inset_0_0_12px_rgba(255,236,209,0.5)]">
                <div>
                  <h4 className="text-sm font-bold bg-gradient-to-r from-[#ff6b4a] to-[#7b4aff] bg-clip-text text-transparent">Upgrade your plan</h4>
                  <p className="text-[12px] text-gray-500 mt-0.5 font-medium">Get more out of your apps</p>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100/80 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <Diamond className="w-4 h-4 text-[#ff6b4a] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                </div>
              </div>
            </button>
          </div>
        )}

        {/* User Footer (Full Width) */}
        {!isCollapsed && (
          <div className="mt-4 px-2 flex items-center justify-between shrink-0 relative">
            <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: "w-7 h-7" } }} />
            <div className="flex items-center gap-3 text-gray-600">
              <button
                onClick={() => setShowFeedbackModal(true)}
                className="hover:text-gray-900 transition-colors"
              >
                <MessageSquareHeart className="w-4 h-4" strokeWidth={2} />
              </button>
              <button
                onClick={() => setShowInviteModal(true)}
                className="hover:text-gray-900 transition-colors"
              >
                <Gift className="w-4 h-4" strokeWidth={2} />
              </button>
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setShowNotificationsPopup(!showNotificationsPopup)}
                  className="hover:text-gray-900 transition-colors relative flex items-center justify-center"
                >
                  <Bell className="w-4 h-4" strokeWidth={2} />
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
                </button>
                <AnimatePresence>
                  {showNotificationsPopup && <NotificationsPopup />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals placed outside sidebar flow for z-index purposes */}
      <FeedbackModal isOpen={showFeedbackModal} onClose={() => setShowFeedbackModal(false)} />
      <InviteModal isOpen={showInviteModal} onClose={() => setShowInviteModal(false)} />
    </>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Plug, ArrowUpRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALL_CONNECTORS } from '../../data/connectors';

export default function ConnectorDetailModal() {
  const navigate = useNavigate();
  const { id } = useParams();

  const connector = ALL_CONNECTORS.find(c => c.id === id);

  const [isEnabled, setIsEnabled] = useState(connector?.enabled ?? false);
  const [isConnected, setIsConnected] = useState(false);

  const handleClose = () => {
    navigate('/dashboard/connector');
  };

  if (!connector) {
    return (
      <div className="absolute inset-0 z-[100] flex items-center justify-center bg-white rounded-2xl">
        <p>Connector not found</p>
        <button onClick={handleClose} className="ml-4 text-blue-500">Go back</button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-full max-w-5xl max-h-[90vh] flex flex-col relative bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-10 shrink-0">
          <div className="flex items-center text-gray-500 text-[15px] font-medium">
            <Plug className="w-4 h-4 mr-2" />
            <span className="hover:text-gray-900 cursor-pointer transition-colors" onClick={handleClose}>Connectors</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{connector.name}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-1.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-200 w-64 text-gray-900 transition-shadow"
              />
            </div>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-gray-100 rounded-md text-gray-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Card */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white shadow-sm mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-white ${connector.bgColor}`}>
                  {connector.icon}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 mb-1">{connector.name}</h1>
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${connector.enabled ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      {connector.enabled ? 'Enabled' : 'Not enabled'}
                    </div>
                    <span className="px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold">
                      MCP
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsEnabled(!isEnabled)}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                >
                  {isEnabled ? 'Disable for workspace' : 'Enable for workspace'}
                </button>
                <button 
                  onClick={() => setIsConnected(!isConnected)}
                  className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-colors shadow-sm hover:opacity-90"
                  style={{ backgroundColor: isConnected ? '#dc2626' : '#0066ff' }}
                >
                  {isConnected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-3xl">
              {connector.longDesc}
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Details Section */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-6">Details</h2>
              
              <div className="flex flex-wrap gap-16">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Created by</h3>
                  <a href="#" className="flex items-center gap-1 text-[15px] font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {connector.createdBy} <ArrowUpRight className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Docs</h3>
                  <a href={connector.docsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[15px] font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {connector.docsLink} <ArrowUpRight className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

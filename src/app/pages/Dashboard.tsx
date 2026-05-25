import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar';
import MainContent from '../../components/Dashboard/MainContent';
import Templates from '../../components/Dashboard/Templates';
import ConnectorsModal from '../../components/Dashboard/ConnectorsModal';
import ConnectorDetailModal from '../../components/Dashboard/ConnectorDetailModal';
import BillingModal from '../../components/Dashboard/BillingModal';

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-sans p-2 md:p-3">
      <Sidebar />
      <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col relative ml-0 md:ml-3">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:id" element={<Templates />} />
          <Route path="/connector" element={<><MainContent /><ConnectorsModal /></>} />
          <Route path="/connector/:id" element={<><MainContent /><ConnectorDetailModal /></>} />
          <Route path="/billing" element={<><MainContent /><BillingModal /></>} />
        </Routes>
      </div>
    </div>
  );
}

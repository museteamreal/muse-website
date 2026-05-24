import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Connect from './app/pages/Connect';
import ContactUs from './app/pages/ContactUs';
import Cookies from './app/pages/Cookies';
import Dashboard from './app/pages/Dashboard';
import Landing from './app/pages/Landing';
import Landing21 from './app/pages/Landing21';
import PricingPage from './app/pages/PricingPage';
import PrivacyPolicy from './app/pages/PrivacyPolicy';
import Security from './app/pages/Security';
import Terms from './app/pages/Terms';
import SignUp from './app/pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing21" element={<Landing21 />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

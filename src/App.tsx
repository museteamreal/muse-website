import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

const Connect = lazy(() => import('./app/pages/Connect'));
const ContactUs = lazy(() => import('./app/pages/ContactUs'));
const Cookies = lazy(() => import('./app/pages/Cookies'));
const Dashboard = lazy(() => import('./app/pages/Dashboard'));
const Landing = lazy(() => import('./app/pages/Landing'));
const Landing21 = lazy(() => import('./app/pages/Landing21'));
const PricingPage = lazy(() => import('./app/pages/PricingPage'));
const PrivacyPolicy = lazy(() => import('./app/pages/PrivacyPolicy'));
const Security = lazy(() => import('./app/pages/Security'));
const Terms = lazy(() => import('./app/pages/Terms'));
const SignInPage = lazy(() => import('./app/pages/SignIn'));
const SignUpPage = lazy(() => import('./app/pages/SignUp'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <SignedIn>
                <Navigate to="/dashboard" replace />
              </SignedIn>
              <SignedOut>
                <Landing />
              </SignedOut>
            </>
          } />
          <Route path="/landing21" element={<Landing21 />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/dashboard/*" element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

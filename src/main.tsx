import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.warn("Missing VITE_CLERK_PUBLISHABLE_KEY in .env.local")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    ) : (
      <div style={{ color: 'white', backgroundColor: 'black', padding: '2rem', height: '100vh' }}>
        <h1>Clerk Publishable Key Missing</h1>
        <p>Please create a <code>.env.local</code> file in your project root and add your Clerk publishable key:</p>
        <pre>VITE_CLERK_PUBLISHABLE_KEY=pk_test_...</pre>
      </div>
    )}
  </StrictMode>,
)

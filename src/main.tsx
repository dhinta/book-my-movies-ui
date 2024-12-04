import { ClerkProvider } from '@clerk/clerk-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const SIGN_IN_REDIRECT_URL = import.meta.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL;
const SIGN_IN_URL = import.meta.env.CLERK_SIGN_IN_URL;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      signInFallbackRedirectUrl={SIGN_IN_REDIRECT_URL}
      signInUrl={SIGN_IN_URL}
    >
      <App />
    </ClerkProvider>
  </StrictMode>,
);

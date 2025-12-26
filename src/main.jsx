import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Mock Provider for Development without Keys
const MockClerkProvider = ({ children }) => {
  return <>{children}</>;
};

const isDevWithoutKeys = !PUBLISHABLE_KEY || PUBLISHABLE_KEY.includes('PLACEHOLDER');

if (isDevWithoutKeys) {
  console.warn("⚠️ Running in Mock Mode: Clerk Keys missing. Auth features will be simulated.");
}

const Provider = isDevWithoutKeys ? MockClerkProvider : ClerkProvider;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </Provider>
  </React.StrictMode>,
)

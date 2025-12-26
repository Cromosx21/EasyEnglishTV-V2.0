import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Proveedor Simulado para Desarrollo sin Claves
const MockClerkProvider = ({ children }) => {
  return <>{children}</>;
};

const isDevWithoutKeys = !PUBLISHABLE_KEY || PUBLISHABLE_KEY.includes('PLACEHOLDER');

if (isDevWithoutKeys) {
  console.warn("⚠️ Ejecutando en Modo Simulado: Faltan las claves de Clerk. Las funciones de autenticación serán simuladas.");
}

const Provider = isDevWithoutKeys ? MockClerkProvider : ClerkProvider;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </Provider>
  </React.StrictMode>,
)

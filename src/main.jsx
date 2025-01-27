import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ControlsProvider from './context/controls.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ControlsProvider>
      <App />
    </ControlsProvider>
  </StrictMode>,
)

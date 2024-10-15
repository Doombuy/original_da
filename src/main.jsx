import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/layout/screens/home/Home.jsx'
import './assets/styles/index.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

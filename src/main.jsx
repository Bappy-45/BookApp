import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContexProvider from './component/stroeContex/contex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContexProvider>
    <App />
  </StoreContexProvider>
  </BrowserRouter>
   
  
)

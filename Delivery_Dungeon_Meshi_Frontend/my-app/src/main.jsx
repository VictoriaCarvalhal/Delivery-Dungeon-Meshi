import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaginaInicial from './paginaInicial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaInicial />
  </StrictMode>,
)

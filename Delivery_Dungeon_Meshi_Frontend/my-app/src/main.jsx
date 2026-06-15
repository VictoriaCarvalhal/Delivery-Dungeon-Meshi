import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './paginaInicial.jsx'
import Menu from './components/menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './paginas/paginaInicial'
import PaginaCardapio from './paginas/paginaCardapio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cardapio" element={<PaginaCardapio/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './components/paginas/paginaInicial'
import PaginaCardapio from './components/paginas/paginaCardapio'
import { ItemProvider } from './providerContext/itemProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/cardapio" element={<PaginaCardapio />} />
        </Routes>
      </BrowserRouter>
    </ItemProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import SectionMenu from './components/sections/sectionMenu'
import SectionCardapio from './components/sections/sectionCardapio'
import SectionCarrinho from './components/sections/sectionCarrinho'
import SectionConfirmacaoCompra from './components/sections/sectionConfirmacaoCompra'
import { PedidoProvider } from './context/pedidoContext'
import Layout from './components/layout/layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PedidoProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<SectionMenu />} />
            <Route path="/cardapio" element={<SectionCardapio />} />
            <Route path="/carrinho" element={<SectionCarrinho />} />
            <Route path="/confirmacaoCompra" element={<SectionConfirmacaoCompra />} />
          </Route>
        </Routes>
      </HashRouter>
    </PedidoProvider>
  </StrictMode>,
)

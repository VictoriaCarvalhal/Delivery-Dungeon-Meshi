import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './components/paginas/paginaInicial'
import PaginaCardapio from './components/paginas/paginaCardapio'
import PaginaCarrinho from './components/paginas/paginaCarrinho'
import { PedidoProvider } from './context/pedidoContext'
import PaginaConfirmacaoCompra from './components/paginas/paginaConfirmacaoCompra'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PedidoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/cardapio" element={<PaginaCardapio />} />
          <Route path="/carrinho" element={<PaginaCarrinho />} />
          <Route path="/confirmacaoCompra" element={<PaginaConfirmacaoCompra/>}/>
        </Routes>
      </BrowserRouter>
    </PedidoProvider>
  </StrictMode>,
)

import { useState } from 'react';
import Header from '../layout/header';
import Menu from '../sections/menu';

function PaginaInicial() {
  const [items,setItems] = useState(0)
  return (
    <>
      <Header items={items}/>
      <Menu/>
    </>
  )
}

export default PaginaInicial;

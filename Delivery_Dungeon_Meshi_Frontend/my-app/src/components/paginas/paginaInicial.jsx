import { useState } from 'react';
import Header from '../layout/header';
import Menu from '../sections/menu';

function PaginaInicial() {
  const [items,setItems] = useState(0)

  function onAddItem() {
    setItems(items + 1);
  }
  return (
    <>
      <Header/>
      <Menu/>
    </>
  )
}

export default PaginaInicial;

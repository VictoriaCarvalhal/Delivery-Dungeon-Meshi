import { useState } from 'react';
import Header from '../layout/header';
import Cardapio from '../sections/cardapio';

function PaginaCardapio() {
  const [items,setItems] = useState(0)
  function onAddItem() {
    setItems(items + 1);
  }
  return (
    <>
      <Header items={items}/>
      <Cardapio onAddItems={onAddItem}/>
    </>
  )
}

export default PaginaCardapio;
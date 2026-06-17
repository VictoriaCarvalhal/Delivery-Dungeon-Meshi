import Header from '../layout/header';
import Cardapio from '../sections/cardapio';

function PaginaCardapio({onPassInfo}) {
  
  return (
    <>
      <Header items={items}/>
      <Cardapio onPassInfo={onPassInfo}/>
    </>
  )
}

export default PaginaCardapio;
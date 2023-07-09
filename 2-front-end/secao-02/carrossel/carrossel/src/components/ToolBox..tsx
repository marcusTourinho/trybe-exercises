import { useState } from 'react';
import toolKit from '../data/toolkit';

function ToolBox() {
  const [index, setIndex] = useState(0);

  function handlePrevTool() {
    if (index + 1 < toolKit.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleNextTool() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolKit.length - 1);
    }
  }

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolKit[index]}</h2>
      <button onClick={ handlePrevTool }>Anterior</button>
      <button onClick={ handleNextTool }>Próximo</button>
    </>
  );
}

export default ToolBox;

import { useState } from "react";
import StyledGlobal, { CorFundo } from "./styledGlobal";
import Home from "./page/Home/Home";
import Details from "./page/Details/Details";


function App() {
  const [trocarDePagina, setTrocarDePagina] = useState(0)

  const changePage = (change)=>{
    setTrocarDePagina(change)
  }

  return (
    <>
    <CorFundo>
      <StyledGlobal/>
      {trocarDePagina===0 ? (
        <Home
        pagina={()=>changePage(1)}/>
      ):(
        <Details
        pagina={()=>changePage(0)}/>
      ) }
    </CorFundo>
    </>
  );
}

export default App;

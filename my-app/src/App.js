import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Nav from "./componentes/Nav/Nav";
import Home from "./pagina/Home";
// import Card from "./componentes/Card/Card";
import "./style.css";
import StyleGlobal, { ContainerMain, TelaInteira } from "./styleGlobal";
import React from "react"

function App() {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <>
    
    <StyleGlobal/>

      <TelaInteira>

         <Header/>

          <ContainerMain>

             <Nav/>

            <Home reproduz={reproduzVideo}/>

          </ContainerMain>

          <Footer/>

      </TelaInteira>
    </>
  );
}

export default App;

import Card from "../componentes/Card/Card";
import { HomeContainer } from "./styled";
import React from "react"

function Home(props){

    console.log(props)
    return (
            <HomeContainer className="painel-de-videos">
                  
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 1"}
                link={"https://picsum.photos/400/400?a=1"}
                />
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 2"}
                link={"https://picsum.photos/400/400?a=2"}
                />
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 3"}
                link={"https://picsum.photos/400/400?a=3"}
                />
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 4"}
                link={"https://picsum.photos/400/400?a=4"}
                />
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 5"}
                link={"https://picsum.photos/400/400?a=5"}
                />
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 6"}
                link={"https://picsum.photos/400/400?a=6"}
                />
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 7"}
                link={"https://picsum.photos/400/400?a=7"}
                />
                <Card
                reproduz={props.reproduz}
                titulo={"Título do vídeo 8"}
                link={"https://picsum.photos/400/400?a=8"}
                />


                  
              </HomeContainer>
    )
}

export default Home
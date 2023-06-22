import { CardContainer, CardImg } from "./styled"
import React from "react"

function Card(props){
    return(
        <CardContainer className="box-pagina-principal media1" onClick={props.reproduz}>
            <CardImg src={props.link} alt=""></CardImg>
            <h4>{props.titulo}</h4>
        </CardContainer>
    )
}

export default Card
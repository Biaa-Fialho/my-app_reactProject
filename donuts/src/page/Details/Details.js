import Header from "../../components/Header/Header"
import { BotaoAddCard, BotaoMore, ContainerDetalhes, ContainerDiv, 
MaisProdutos, ImagemGrande, TextMore, TextNumber, TextoDonuts, 
TituloDonuts } from "./styles"

function Details(props){
    return(
        <>
            <Header
            pagina={props.pagina}/>
            <ContainerDetalhes>
            <ImagemGrande src="" />
            <ContainerDiv>

                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>
                <TextoDonuts>
                    A fluffy fresh cooked
                    donut covered by a creamy
                    strawberry flavour with
                    rainbow.
                </TextoDonuts>
                <MaisProdutos>
                    <img src=""/>
                    <TextNumber>7800</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>Nedd more?</TextMore>
                    <BotaoMore>Add more</BotaoMore>
                </MaisProdutos>

                <BotaoAddCard>Add to card</BotaoAddCard>

            </ContainerDiv>
        </ContainerDetalhes>
        </>
    )
}

export default Details

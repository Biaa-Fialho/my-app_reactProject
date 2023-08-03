import { FooterContainer, ImagemMais } from "./styles"
import historico from '../../assets/assets/historico.png'
import promocao from '../../assets/assets/promocao.png'
import mais from '../../assets/assets/mais.png'
import coracao from '../../assets/assets/coracao.png'
import carrinho from '../../assets/assets/carinho.png'

function Footer(){
    return(
        <FooterContainer>
        <img src={historico}/>
        <img src={promocao}/>
        <ImagemMais src={mais}/>
        <img src={coracao}/>
        <img src={carrinho}/>
        </FooterContainer>
    )
    
}

export default Footer
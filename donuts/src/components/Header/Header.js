import { BotaoNavegacao, HeaderContainer } from "./styles"
import menu from "../../assets/assets/menu.png"

function Header(props){
    const handlePageChange=()=>{
        props.pagina()
    }
    return(
        <HeaderContainer>

            <BotaoNavegacao onClick={handlePageChange}>
            <img src={menu}/>
            </BotaoNavegacao>

            <BotaoNavegacao>
            <img src={menu}/>
            </BotaoNavegacao>

        </HeaderContainer>
    )
}

export default Header
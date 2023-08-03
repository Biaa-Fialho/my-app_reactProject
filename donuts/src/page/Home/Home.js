import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import { SectionCard } from "./styles"

function Home(props){
    return(
        <>
            <Header
            pagina={props.pagina}/>
            <Nav/>
            <SectionCard>
                <Card/>
            </SectionCard>
        </>
    )
    
}

export default Home
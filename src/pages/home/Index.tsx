import Hero from "./components/Hero"
import Estatisticas from "./components/Estatisticas"
import Projetos from "./components/Projetos"    
import CTAwhats from "./components/CTAwhats"
import AboutArquiteta from "./components/AboutArquiteta"
import Servicos from "./components/Servicos"
import Metodologia from "./components/Metodologia"

export default function Home(){
    return(
        <>
        <Hero />
        <Estatisticas />
        <AboutArquiteta />
        <Projetos />
        <Servicos />
        <Metodologia />
        <CTAwhats />
        </>
    )
}
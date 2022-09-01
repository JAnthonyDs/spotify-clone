import GlobalStyles from "./styles/GlobalStyles"

import Navbar from "./components/Navbar"
import Section from "./components/Section"

function App() {

  return (
    <>
      <Navbar />
      <Section bgcolor="#993399" title="SPOTIFY PREMIUM" main="Aproveite 3 meses de Premium por R$ 0,00" second="Curta músicas sem anúncios, ouça no modo offline e muito mais. Cancele quando quiser." textColor="white"/>
      <Section bgcolor="rgb(41, 65, 171)" title="SPOTIFY FREE" main="Escutar muda tudo" second="Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito." textColor="#1ed760"/>
      <GlobalStyles />
    </>

  )
}

export default App

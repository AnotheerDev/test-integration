import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Product from './components/Product/Product'
import Marques from './components/Marques/Marques'
import Zoom from './components/Zoom/Zoom'
import Conseil from './components/Conseil/Conseil'
import Revendeur from './components/Revendeur/Revendeur'
import Galerie from './components/Galerie/Galerie'
import Connecter from './components/Connecter/Connecter'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <main>
      <Header />
      <Intro />
      <Product />
      <Marques />
      <Zoom />
      <Conseil />
      <Revendeur />
      <Galerie />
      <Connecter />
      <Footer />
    </main>
  )
}

export default App

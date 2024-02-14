import './index.css'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Product from './components/Product/Product'
import Marques from './components/Marques/Marques'
import Zoom from './components/Zoom/Zoom'
import Conseil from './components/Conseil/Conseil'
import Revendeur from './components/Revendeur/Revendeur'

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
    </main>
  )
}

export default App

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SobreMi } from './components/SobreMi'
import { AcercaTerapia } from './components/AcercaTerapia'
import { Proceso } from './components/Proceso'
import { Herramientas } from './components/Herramientas'
import { Contacto } from './components/Contacto'

function App() {
  return (
    <div className="bg-bg text-text font-sans">
      <Header />
      <main>
        <Hero />
        <SobreMi />
        <AcercaTerapia />
        <Proceso />
        <Herramientas />
        <Contacto />
      </main>
    </div>
  )
}

export default App

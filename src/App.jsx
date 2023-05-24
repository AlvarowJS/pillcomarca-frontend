import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/shared/Header'
import Historia from './pages/Historia'
import Ubicanos from './pages/Ubicanos'
import DocumentosGestion from './pages/DocumentosGestion'
import Footer from './components/shared/Footer'
import Noticias from './pages/Noticias'
import TramiteSeguimiento from './pages/tramite/TramiteSeguimiento'
import Convocatoria from './pages/convocatoria/Convocatoria'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/ubicanos' element={<Ubicanos />} />
        <Route path='/documentos' element={<DocumentosGestion />} />
        <Route path='/convocatorias' element={<Convocatoria />} />
        <Route path='/seguridad-ciudadana' element={<TramiteSeguimiento />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

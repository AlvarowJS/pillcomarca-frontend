import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/shared/Header'
import Historia from './pages/Historia'
import Ubicanos from './pages/Ubicanos'
import Convocatoria from './pages/Convocatoria'
import DocumentosGestion from './pages/DocumentosGestion'
import Footer from './components/shared/Footer'
import Noticias from './pages/Noticias'

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
      </Routes>
      <Footer/>
    </>
  )
}

export default App

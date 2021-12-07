import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HeaderCliente from './components/HeaderCliente'
import Portada from './components/Portada'
import Tarifas from './components/Tarifas'
import Seguimiento from './components/Seguimiento'
import NuevoEnvio from './components/NuevoEnvio'
import Acceso from './components/Acceso'

const App = () => {
  const [codigoSeguimiento, setCodigoSeguimiento] = useState('')

  const [tarifas, setTarifas] = useState([
    {
      key: 1,
      titulo: "Económica",
      Precio: "5 €",
      Cualidades: ["Hasta 1 kg de peso", "Volumen inferior a 30x20x10 cm", "Entrega antes de 48 horas", "El mejor servicio"],
    },
    {
      key: 2,
      titulo: "Hogar",
      Precio: "15 €",
      Cualidades: ["Hasta 7 kg de peso", "Volumen inferior a 50x50x50 cm", "Entrega antes de 48 horas", "El mejor servicio"],
    },
    {
      key: 3,
      titulo: "Profesional",
      Precio: "50 €",
      Cualidades: ["Hasta 25 kg de peso", "Volumen transportable por un operario", "Entrega antes de 48 horas", "El mejor servicio"],
    },
  ])

  const [tarifaSeleccionada, setTarifaSeleccionada] = useState(0)

  const pulsa = (key) => {
    //establece el valor del nuevo estado
    setTarifaSeleccionada(key)
    //console.log
    console.log("Tarifa seleccionada: ", tarifaSeleccionada)
  }


  return (
    <Router>

      <HeaderCliente />
      <Routes>

        <Route path='/' element={<Portada codigoSeguimiento={codigoSeguimiento} />} />
        <Route path='/Tarifas' element={<Tarifas pulsa={pulsa} tarifas={tarifas} tarifaSeleccionada={tarifaSeleccionada} />} />
        <Route path='/NuevoEnvio' element={<NuevoEnvio pulsa={pulsa} tarifas={tarifas} tarifaSeleccionada={tarifaSeleccionada} />} />
        <Route path='/Seguimiento' element={<Seguimiento codigoSeguimiento={codigoSeguimiento} />} />
        <Route path='/Acceso' element={<Acceso />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HeaderCliente from './components/HeaderCliente'
import Portada from './components/Portada'
import Tarifas from './components/Tarifas'
import Seguimiento from './components/Seguimiento'
import NuevoEnvio from './components/NuevoEnvio'
import Acceso from './components/Acceso'
import InicioEmpleado from './components/InicioEmpleado'
import InicioAdmin from './components/InicioAdmin'
import TareasFinalizadas from './components/TareasFinalizadas'
import TareasPendientes from './components/TareasPendientes'
import AsignacionTareas from './components/AsignacionTareas'
import ConfirmacionDatos from './components/ConfirmacionDatos'
import NuevoEmpleado from './components/NuevoEmpleado'
import ListaUsuarios from './components/ListaUsuarios'
import PoliticaPrivacidad from './components/PoliticaPrivacidad'



const App = () => {
    const [codigoSeguimiento, setCodigoSeguimiento] = useState('')

    const [paginaActual, setPaginaActual] = useState("/")

    const [tarifas, setTarifas] = useState([])

    const [tarifaSeleccionada, setTarifaSeleccionada] = useState(0)

    
    //establece que tarifa vamos a contratar
    //es un estado que se guarda en FRONTEND, no en el servidor
    const seleccionaTarifa = (id) => {
        //establece el valor del nuevo estado
        setTarifaSeleccionada(id)
    }

////////////////////////////USUARIOS////////////////////////////////////////////////////////

    //POST
    // crear usuario
    const añadePaquete = async (paquete) => {
        const res = await fetch('http://localhost:5000/paquetes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(paquete),
        })
        fetchUsuarios()
    }






    ////////////////////////////TARIFAS////////////////////////////////////////////////////////
    //GET
    //fetch Tarifas
    const fetchTarifas = async () => {
        const res = await fetch('http://localhost:5000/tarifas')
        const data = await res.json()
        //peticion GET de forma predeterminada
        setTarifas(data)
    }

    useEffect(() => {
        fetchTarifas()

        //[] dependency array Si tienes un valor  y queremos que la función useEffect funcione si el valor cambia, pasaremos el valor dentro del array de dependencia [valor]
    }, [])

    return (
        <Router>

            <HeaderCliente paginaActual={paginaActual} />
            <Routes>

                <Route path='/' element={<Portada setPaginaActual={setPaginaActual} codigoSeguimiento={codigoSeguimiento} setCodigoSeguimiento={setCodigoSeguimiento} />} />
                <Route path='/Tarifas' element={<Tarifas setPaginaActual={setPaginaActual} seleccionaTarifa={seleccionaTarifa} tarifas={tarifas} tarifaSeleccionada={tarifaSeleccionada} />} />
                <Route path='/NuevoEnvio' element={<NuevoEnvio setPaginaActual={setPaginaActual} seleccionaTarifa={seleccionaTarifa} tarifas={tarifas} tarifaSeleccionada={tarifaSeleccionada} añadePaquete={añadePaquete}/>} />
                <Route path='/Seguimiento' element={<Seguimiento setPaginaActual={setPaginaActual} codigoSeguimiento={codigoSeguimiento} setCodigoSeguimiento={setCodigoSeguimiento} />} />

                <Route path='/Acceso' element={<Acceso setPaginaActual={setPaginaActual} />} />
                <Route path='/InicioEmpleado' element={<InicioEmpleado />} />
                <Route path='/InicioAdmin' element={<InicioAdmin />} />
                <Route path='/TareasFinalizadas' element={<TareasFinalizadas />} />
                <Route path='/TareasPendientes' element={<TareasPendientes />} />
                <Route path='/AsignacionTareas' element={<AsignacionTareas />} />
                <Route path='/ConfirmacionDatos' element={<ConfirmacionDatos />} />
                <Route path='/NuevoEmpleado' element={<NuevoEmpleado />} />
                <Route path='/ListaUsuarios' element={<ListaUsuarios />} />
                <Route path='/PoliticaPrivacidad' element={<PoliticaPrivacidad />} />


            </Routes>
            <Footer />
        </Router>
    )
}

export default App

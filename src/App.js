import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HeaderCliente from './components/HeaderCliente'
import Portada from './components/Portada'
import Tarifas from './components/Tarifas'
import Seguimiento from './components/Seguimiento'
import NuevoEnvio from './components/NuevoEnvio'
import Acceso from './components/Acceso'

const App = () => {

  const [tarifas, setTarifas] = useState([
    {
      id: 1,
      titulo: "Económica",
      Precio: "5 €",
      Cualidades: ["Hasta 1 kg de peso", "Volumen inferior a 30x20x10 cm", "Entrega antes de 48 horas", "El mejor servicio"],
    },
    {
      id: 2,
      titulo: "Hogar",
      Precio: "15 €",
      Cualidades: ["Hasta 7 kg de peso", "Volumen inferior a 50x50x50 cm", "Entrega antes de 48 horas", "El mejor servicio"],
    },
    {
      id: 3,
      titulo: "Profesional",
      Precio: "50 €",
      Cualidades: ["Hasta 25 kg de peso", "Volumen transportable por un operario", "Entrega antes de 48 horas", "El mejor servicio"],
    },
  ])

  const [tarifaSeleccionada, setTarifaSeleccionada] = useState(0)

  const pulsa = (id) => {
    //establece el valor del nuevo estado
    setTarifaSeleccionada(id)
    //console.log
    console.log("Tarifa seleccionada: ", tarifaSeleccionada)
  }



  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <Router>

      <HeaderCliente
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Routes>

        <Route path='/' element={<Portada />} />
        <Route path='/Tarifas' element={<Tarifas pulsa={pulsa} tarifas={tarifas} tarifaSeleccionada={tarifaSeleccionada}/>} />
        <Route path='/Seguimiento' element={<Seguimiento />} />
        <Route path='/NuevoEnvio' element={<NuevoEnvio />} />
        <Route path='/Acceso' element={<Acceso />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

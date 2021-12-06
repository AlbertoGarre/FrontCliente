import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const HeaderCliente = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <nav id="header" className="cristal navbar navbar-expand-sm text-dark fixed-top navbar-light">
    <a className="navbar-brand text-success" href="/"><i className="fab fa-contao display-4"></i></a>

    <div className="nav-item">
      <a className="nav-link bg-transparent text-success border-bottom border-success pb-2" href="/NuevoEnvio">Enviar</a>
    </div>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample03">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/Seguimiento">Seguimiento <span className="sr-only">(current)</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href="#">Soluciones logísticas</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown">Empresa</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Quienes somos</a>
            <a className="dropdown-item" href="#">Servicios</a>
            <a className="dropdown-item" href="#">Trabaja con nosotros</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/Tarifas">Tarifas</a>
        </li>
      </ul>
      <a className="my-2 my-md-0 text-dark" href="/Acceso">
        Usuarios
      </a>
    </div>

  </nav>
  )
}

HeaderCliente.defaultProps = {
  title: 'Task Tracker',
}

HeaderCliente.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeaderCliente

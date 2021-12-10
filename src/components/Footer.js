import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <div id="footer">
            <footer className="text-center text-lg-start bg-light text-muted">
                <br />
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fab fa-contao"></i> Contosox
                                </h6>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Productos
                                </h6>
                                <p>
                                    <a href="/Seguimiento" className="text-reset">Envíos</a>
                                </p>
                                <p>
                                    <a href="/NuevoEnvio" className="text-reset">Recogidas</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Empresas</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Acceso rápido
                                </h6>
                                <p>
                                    <a href="/Tarifas" className="text-reset">Tarifas</a>
                                </p>
                                <p>
                                    <a href="/Usuarios" className="text-reset">Usuarios</a>
                                </p>
                                <p>
                                    <a href="/Seguimiento" className="text-reset">Seguimiento</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contacto
                                </h6>
                                <p><i className="fas fa-home me-3"></i> España, Murcia 30004</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    &nbsp;
                                    info@contosox.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 34 234 567 88</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    Copyright © 2021
                    <a className="text-reset fw-bold" href="https://AlbertGarre.com/">Alberto Garre Muñoz</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer

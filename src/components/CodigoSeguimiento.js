import { useNavigate } from 'react-router-dom';

const CodigoSeguimiento = ({ codigoSeguimiento, setCodigoSeguimiento }) => {

    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center ">
            <div className="espaciado">
                <div className="intro">
                    <h2 className="text-center pb-3">Siga su envio</h2>
                </div>
                <form 
                        className="form-inline "
                        method="post"
                        onSubmit={(e) => {
                            e.preventDefault()
                            let codigo = document.getElementById("entradaCodigoSeguimiento").value
                            setCodigoSeguimiento(codigo)
                            setTimeout(() => {
                                navigate('/Seguimiento')
                            }, 100)
                            return false
                        }}>
                    <div className="form-group mr-2 ">
                        <input className="form-control cristal" id="entradaCodigoSeguimiento" type="text" name="inputNumSeguimiento"
                            placeholder={codigoSeguimiento == '' ? "Número de seguimiento " : codigoSeguimiento} />
                    </div>
                    <div className="form-group ">
                        <button
                            className="btn btn-success "
                            type="submit">
                            Seguir envío
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CodigoSeguimiento

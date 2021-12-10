import React from 'react';
import { useNavigate } from 'react-router-dom';

const CodigoSeguimiento = ({ codigoSeguimiento, setCodigoSeguimiento }) => {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (codigoSeguimiento != '') {
            document.getElementById("entradaCodigoSeguimiento").value = codigoSeguimiento
        }
    }, []);

    return (
        <div className="cristal rounded mx-auto px-3" style={{ width: "20rem" }}>
            <div className="espaciado py-2">

                <form className="form-inline border-secondary "
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
                    <h2 className="intro text-center mx-auto mt-1 mb-3">Sige tu envio</h2>
                    <div className="form-group mx-auto input-group pb-2">
                        <input className="form-control border-secondary rounded-left" id="entradaCodigoSeguimiento" type="text" name="inputNumSeguimiento" placeholder="Número de seguimiento" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary border border-secondary text-dark " type="submit"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CodigoSeguimiento

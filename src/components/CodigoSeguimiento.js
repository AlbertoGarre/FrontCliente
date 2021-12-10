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
        <div className="cristal rounded mx-auto px-1 py-1 shadow espaciado-seguimiento border  border-secondary" style={{top: "6rem", width: "18rem", height: "8rem" }}>
            <div className="py-2 mx-2">

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
                    <h2 className="intro sombra-blanca text-center mx-auto mt-1 mb-3">Sigue tu envio</h2>
                    <div className="form-group mx-auto input-group pb-2">
                        <input className="form-control border-secondary rounded-left mx-auto" id="entradaCodigoSeguimiento" type="text" name="inputNumSeguimiento" placeholder="Número de seguimiento" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary border border-secondary text-dark " type="submit"><i class="fas fa-search texto-verde sombra-blanca"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CodigoSeguimiento

import React from 'react'


const TarjetaTarifa = ({ seleccionada, pulsa, tarifa}) => {
    return (

        
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">{tarifa.titulo}</h4>
                </div>
                <div class="card-body" onClick={() => pulsa(tarifa.id)} style={{ backgroundColor: seleccionada ? 'green':'white'  }}>
                    <h1 class="card-title pricing-card-title"> <small class="text-muted ">{tarifa.Precio} / envío</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        {tarifa.Cualidades.map((Cualidad) => (
                            <li>{Cualidad}</li>
                        ))}
                    </ul>
                    <button type="button" style={{ backgroundColor: 'white' }} class="btn btn-lg btn-block btn-outline-primary ">Contrata ahora</button>
                </div>
            </div>

    )
}

export default TarjetaTarifa

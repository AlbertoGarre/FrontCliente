import React from 'react'
import { useState } from "react";
import TarjetaTarifa from './TarjetaTarifa'


const Tarifas = ({tarifas, pulsa, tarifaSeleccionada}) => {

    return (
        <div id="content" class=" m-0 p-4" style={{ width: "100%" }}>
            <br /> <br />

            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Tarifas</h1>
                <p class="lead">Ofrecemos los mejores precios con las condiciones que mejor se adaptan a ti. Queremos llegar donde los demás no llegan y para eso te ofrecemos más opciones de personalización.</p>
            </div>

            <div class="container">
                <div class="card-deck mb-3 text-center">
                    {tarifas.map((tarifa) => (
                        <TarjetaTarifa
                            seleccionada={tarifaSeleccionada == tarifa.id}
                            tarifa={tarifa}
                            pulsa={pulsa} />
                    ))}
                </div>
            </div>

            <br />
        </div>

    )
}

export default Tarifas

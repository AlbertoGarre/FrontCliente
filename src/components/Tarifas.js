import React from 'react'

const Tarifas = () => {
    return (


        <div id="content" class=" m-0 p-4" style={{ width: "100%" }}>

            <br /> <br />
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Tarifas</h1>
                <p class="lead">Ofrecemos los mejores precios con las condiciones que mejor se adaptan a ti. Queremos llegar donde los demás no llegan y para eso te ofrecemos más opciones de personalización.</p>
            </div>

            <div class="container">
                <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Económica</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">5€ <small class="text-muted">/ envío</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Hasta 1 kg de peso</li>
                                <li>Volumen inferior a 30x20x10 cm</li>
                                <li>Entrega antes de 48 horas</li>
                                <li>El mejor servicio</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Contrata ahora</button>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Hogar</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">15€ <small class="text-muted">/ envío</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Hasta 7 kg de peso</li>
                                <li>Volumen inferior a 50x50x50 cm</li>
                                <li>Entrega antes de 48 horas</li>
                                <li>El mejor servicio</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Contrata ahora</button>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">Profesional</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">50€ <small class="text-muted">/ envío</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Hasta 25 kg de peso</li>
                                <li>Volumen transportable por un operario</li>
                                <li>Entrega antes de 48 horas</li>
                                <li>El mejor servicio</li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Contrata ahora</button>
                        </div>
                    </div>
                </div>


            </div><br /></div>


    )
}

export default Tarifas

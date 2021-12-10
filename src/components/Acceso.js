const Acceso = ({setPaginaActual}) => {

    setPaginaActual("/Acceso")

    return (
        <div id="content" className=" m-0 p-4" style={{ width: "100%" }}>
            <br />
            <br />
            <br />
            <br />
            <form className="form-signin " >
                <h1 className="h3 mb-3 font-weight-normal ">Acceso</h1>
                <input type="email" id="inputEmail" className="form-control" placeholder="ejemploemail@gmail.com" required autofocus />
                <input type="password" id="inputPassword" className="form-control " placeholder="Password" required />

                <div className="checkbox mb-3  ">
                    <label>
                        <input type="checkbox" value="remember-me" /> Recuerda sesión
                    </label>
                </div>

                <button className="btn btn-lg btn-success btn-block " type="submit">Entra</button>
            </form>
        </div>
    )
}

export default Acceso

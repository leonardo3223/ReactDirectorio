import React from "react";

function Contacto(props) {

    function miFunction() {
        props.borrarAmigo();
    }
    return(
        <div className="contenedorContactos">
            <h2 className="nombres">{props.nombre}</h2>
            <p className="datos">
                {props.telefono} - {props.correo}
            </p>
            <button onClick={miFunction} className="eliminaContacto">Eliminar</button>
        </div>
    );
}

export default Contacto;
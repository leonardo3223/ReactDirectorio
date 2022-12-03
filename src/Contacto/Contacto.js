import React from "react";

function Contacto(props){

    function miFuncion(){
        props.borrarAmigo();
    }

    return(
            <div className="contenedoramigos">
                <div>
                    <h2 className="nombres">{props.nombres} </h2>
                    <p className="datos">
                        {props.telefono} - {props.correo}
                    </p>
                </div>
                <button className="eliminar" onClick={miFuncion}>Eliminar</button>
            </div>
    );
}

export default Contacto;
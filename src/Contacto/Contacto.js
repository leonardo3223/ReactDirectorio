import React from "react";


function Contacto(props){

    function miFuncion(){
        props.borrarAmigo();
    }


    return(
            <div className="divpadre">
                <div className="divhijo">
                    <h2>{props.nombres} </h2>
                    <p>
                        {props.telefono} - {props.correo}
                    </p>
                </div>
                <button className="btn" onClick={miFuncion}>Eliminar</button>
            </div>
    );
}

export default Contacto;
import React from "react";
import Contacto from "../Contacto/Contacto";

function Lista(props) {

    return(
        <React.Fragment>
        <h1 className="tituloLista">Mi lista</h1>
        {props.children}
        </React.Fragment>
    );
}

export default Lista;
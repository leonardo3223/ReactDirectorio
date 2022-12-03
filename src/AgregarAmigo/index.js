import React from "react";
import { ContactoContext } from "../Context/ContactoProvider";

function AgregarAmigo(){
    
    let {setModal} = React.useContext(ContactoContext);

    const abreModal=()=>{
        setModal(true);
    }
    return(
        <button onClick={abreModal} className="botonamigo">+Amigo</button>
    );
}

export default AgregarAmigo;
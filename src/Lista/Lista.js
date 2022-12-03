import React from "react";

function Lista(props){

    return(
        <React.Fragment>
            <h1 className="titulolista">Mi Lista</h1>
            {props.children}
        </React.Fragment>
    );
}

export default Lista;
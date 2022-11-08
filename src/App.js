
import './App.css';
import React, { Children } from 'react';

import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import AgregarAmigo from './AgregarAmigo';
import {ContactoContext,ContactoProvider } from './Context/ContactoProvider';


function App() {


    return (
      
        <ContactoProvider>
          <ContactoContext.Consumer>
            {({cantidadAmigos,
            contactosFiltro,
            borrarAmigo})=>(
              <React.Fragment>
                  <h1 className="titulo">Mi lista de Contactos</h1>
      <h3 className='cantidadAmigos'>Tengo {cantidadAmigos} amigos</h3>
      <Busqueda/>
      <AgregarAmigo/>
      <Lista>
            {
                contactosFiltro.map((contacto)=>{
                    return (<Contacto
                            nombre={contacto.nombre}
                            telefono={contacto.telefono}
                            correo={contacto.correo}
                            borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
                })
            }
      </Lista>
      {contactosFiltro.length==0 && <h1>No tienes amigos</h1>}
              </React.Fragment>
            )}
      
          </ContactoContext.Consumer>
        </ContactoProvider>
    );
}

export default App;



/*function App() {
  return (
    <React.Fragment>
      <h1>Toca biceps</h1>
      <div>asaasas</div>
    </React.Fragment>
  );
}*/

/*function App() {

  let miDato=10;
  let miSegundoDato=5;

  return [
    <h1>Hola</h1>,
    <h1>{miDato+miSegundoDato}</h1>
  ];
}*/


//   let contactos=[
//     {
//         nombre:"Añame",
//         telefono:"3223375635",
//         correo:"foranio@gmail.com"
//     },
//     {
//         nombre:"Chino",
//         telefono:"3223344535",
//         correo:"chino@gmail.com"
//     },
//     {
//         nombre:"Plata",
//         telefono:"3229994535",
//         correo:"platita@gmail.com"
//     },
//     {
//       nombre:"Gera",
//       telefono:"3229664535",
//       correo:"hardmode@gmail.com"
//   }
// ]





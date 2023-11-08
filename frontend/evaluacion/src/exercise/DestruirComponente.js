import React, { Component } from 'react'

export default class DestruirComponente extends Component {

   constructor(){
    super();
    this.state = {
        mostrarComponente: true,
    };
   } 

   handleEliminarComponente = () => {
    this.setState({mostrarComponente: false})
   }

  render() {

    if (!this.state.mostrarComponente){
        return null;
    }


    return (
      <div>
        <p>Soy un componente que puede ser destruido</p>
        <button onClick={() => this.handleEliminarComponente()}>Eliminar componente</button>
      </div>
    )
  }
}

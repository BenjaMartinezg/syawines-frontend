import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import axios from 'axios'
import Tarjeta from './Tarjeta'

const URL_API = 'http://localhost:3000/api/syawines'

class App extends Component {
  state = {
    clientes: []
  }
  componentDidMount(){
    axios.get(`${URL_API}/cliente`)
      .then(cliente => this.setState({ clientes: cliente.data }))
  }
  addCepa = e => {
    e.preventDefault()
    const { descripcion } = this.state
    axios.post(`${URL_API}/cepa`, { descripcion }).then(state => console.log(state.data)).catch(err => console.log)
  }
  addCliente = (e) => {
    e.preventDefault()
    const { nombre_cliente, nacionalidad, pais, direccion, condicion, telefono, mail } = this.state
    axios.post(`${URL_API}/cliente`, {
      nombre_cliente,
      nacionalidad,
      pais,
      direccion,
      condicion,
      telefono,
      mail
    })
    .then(x => console.log(x))
    .catch(err => console.log(err))
  }
  render() {
    const { clientes } = this.state
    return (
      <div>
        <h3>Clientes</h3>
          {(clientes).map(cliente => <Tarjeta nombre={cliente.nombre_cliente} mail={cliente.mail} />)
            
          }
        <h3>Añadir cliente</h3>
        <form>
          <input onChange={(e)=> this.setState({ nombre_cliente: e.target.value })} placeholder="Nombre" />
          <input onChange={(e)=> this.setState({ nacionalidad: e.target.value })} placeholder="Nacionalidad" />
          <input onChange={(e)=> this.setState({ pais: e.target.value })} placeholder="Pais" />
          <input onChange={(e)=> this.setState({ direccion: e.target.value })} placeholder="direccion" />
          <input onChange={(e)=> this.setState({ condicion: e.target.value })} placeholder="Condicion pago" />
          <input onChange={(e)=> this.setState({ telefono: e.target.value })} placeholder="telefono" />
          <input onChange={(e)=> this.setState({ mail: e.target.value })} placeholder="mail" />
          <button onClick={this.addCliente} type="submit">Añadir</button>
        </form>
        <h3>Añadir cepa</h3>
        <form>
          <input onChange={(e)=> this.setState({ descripcion: e.target.value })} placeholder="nombre cepa" />
          <button onClick={this.addCepa}>Añadir cepa</button>
        </form>
        <Tarjeta />
      </div>
    );
  }
}

export default App;

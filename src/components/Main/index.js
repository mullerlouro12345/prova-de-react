import React, { Component } from 'react';
import './Main.css';
import axios from 'axios';
import ListaEstados from '../ListaEstados'
import { Link } from 'react-router-dom';

class Main extends Component {

  state = {
    pesq_estado: '',
    estados: [],
    regiao: null
  }

  componentDidMount() {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => {
      this.setState({ estados :res.data })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  buscarPorRegiao = (reg) => {
    console.log('funcionando')
  }

  render() {
    return (
      <div className="App">
        <nav className="menu-bar">
          <h4 className="titulo">Estados Brasileiros</h4>
        </nav>
        {
          this.state.estados.map(e => {
              return (
                <Link to={`/municipios/${e.id}`}>
                  <ListaEstados estados={e} />
                </Link>
              )
          })
        }
        </div>
    );
  }
}

export default Main;

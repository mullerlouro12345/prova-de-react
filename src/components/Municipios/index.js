import React, { Component } from 'react';
import axios from 'axios';
import './Municipios.css';
import { Link } from 'react-router-dom';
import ListaMunicipios from '../ListaMunicipios';

class Municipios extends Component {

    state = {
        municipios: [],
        load: ''
    }

    async componentDidMount () {
        const { id } = this.props.match.params;
        
        this.setState({ load: 'Carregando cidades...' });

        const resp = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
        
        this.setState({ municipios: resp.data, load: '' });
        
    }
  render() {
    return (
        <div className="jumbo">
            <nav className="menu-bar">
                <Link to="/">Voltar</Link>
            </nav>
            <h3>Um total de: {this.state.municipios.length} municípios</h3>
            <p>{this.state.load}</p>
            {
                this.state.municipios.map(m => {
                    return (
                        <ListaMunicipios municipio={m} />
                    )
                })
            }
             
        </div>    
    );
  }
}

export default Municipios;

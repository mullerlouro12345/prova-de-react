import React from 'react';
import './ListaEstados.css';

const ListaEstados = props => {
    return (
        <div className="jumbo">
            <center>
            <div className="content">
                <div className="con1">
                    <p>Sigla: <span>{props.estados.sigla}</span></p>
                </div>
                <div className="con2">
                    <p>Nome: <span>{props.estados.nome}</span></p>
                </div>
            </div>
            </center>
        </div>
    )
}

export default ListaEstados;

import React, { Component } from 'react';

const ListaMunicipios = props => (
      <div className="jumbo">
        <div className="mun">
            <ul>
              <li>{props.municipio.nome}</li>
            </ul>  
        </div>
      </div>
);

export default ListaMunicipios;


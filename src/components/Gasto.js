import React from 'react';
import ProtoTypes from "prop-types";

var Gasto = ({gasto}) =>(

    <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto">$ {gasto.cantidad}</span>
        </p>
    </li>
);

Gasto.propTypes = {
  gastos: ProtoTypes.object.isRequired
};

export default Gasto;
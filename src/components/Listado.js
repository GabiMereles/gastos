import React from 'react';
import Gasto from './Gasto';
import ProtoTypes from 'prop-types';

var  Listado = ({gastos}) =>  (  
<div className= "gastos-realizados">
    <h2>Listado</h2>
    {gastos.map(gasto =>(

        <Gasto
         key={gasto.id}
         gasto={gasto}
         />

    ))}
</div>

);

Listado.propTypes= {
    gastos: ProtoTypes.array.isRequired
}
 
export default Listado;
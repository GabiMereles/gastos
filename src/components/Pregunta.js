import React,{Fragment, useState} from 'react';
import Error from './Error';
import ProtoTypes from "prop-types";

var Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //se define el state
    var [cantidad,guardarCantidad] = useState(0);
    var [error, guardarError] = useState(false);


    //Funcion que lee el presupuesto
    var definirPresupuesto = e => {

        guardarCantidad( parseInt(e.target.value, 10) ) 
    }


    //Submit para definir el presupuesto
    var agregarPresupuesto = e => {
        
        e.preventDefault();

        
        if(cantidad < 1 || isNaN ( cantidad )){

            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }




    return(
        <Fragment>

            <h2>Ingresa tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es Incorrecto" />  : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                    
                />
            </form>


        </Fragment>





    );
}
Pregunta.propTypes = {
  guardarPresupuesto: ProtoTypes.func.isRequired,
  guardarRestante: ProtoTypes.func.isRequired,
  actualizarPregunta: ProtoTypes.func.isRequired

};

export default Pregunta;
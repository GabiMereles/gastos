import React, { Fragment } from 'react';
import {revisarPresupuesto}from '../helpers';
import ProtoTypes from "prop-types";
var ControlPresupuesto = ({presupuesto, restante}) => {

    return (
      <Fragment>
        <div className="alert alert-primary">
            Presupuesto: $ {presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante: $ {restante}
        </div>
      </Fragment>
    );
}

ControlPresupuesto.propTypes = {
  presupuesto: ProtoTypes.number.isRequired,
  restante: ProtoTypes.number.isRequired
};

export default ControlPresupuesto;
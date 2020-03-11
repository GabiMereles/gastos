import React from 'react';
import ProtoTypes from "prop-types";


var Error = ({mensaje}) => (

<p className = "alert alert-danger error">{mensaje}</p>

);


Error.propTypes = {
  mensaje: ProtoTypes.string.isRequired
};

export default Error;
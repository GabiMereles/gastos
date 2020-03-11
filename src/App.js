import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {
  
  //Defino el State
  var [presupuesto, guardarPresupuesto]= useState(0);
  var [restante, guardarRestante]=useState(0);
  var [mostrarPregunta, actualizarPregunta]=useState(true);
  var [gastos, guardarGastos]= useState ([]);
  var [gasto, guardarGasto] = useState ({});
  var [crearGasto, guardarCrearGasto]= useState(false);

  //UseEffect que actualiza el restante
  useEffect (() => {

    if(crearGasto){
      guardarGastos([...gastos, gasto]);

      var presupuestoRestante= restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      guardarCrearGasto(false);
    }
  },[gasto, crearGasto, gastos, restante]);

  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half-column">
                <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
                 />
              </div>
              <div className="one-half-column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

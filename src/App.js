import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Formulario from "./Components/Formulario/Formulario.js";
import MiOrg from "./Components/MiOrg/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> condicion ? si es verdadera se muestra: es falsa no se muestra
  //Corto circuito --> codicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div>
      <Header />
      {/*{mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}
export default App;

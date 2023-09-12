import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [nombreVariable, funcionActualizada] = useState(valorInicial)
  //   const [mostrar, actualizarMostar] = useState(true)

  console.log(props);

  return (
    <section className="org-section">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/boton.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;

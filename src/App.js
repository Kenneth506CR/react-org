import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Formulario from "./Components/Formulario/Formulario.js";
import MiOrg from "./Components/MiOrg/MiOrg";
import Equipo from "./Components/Equipo/Equipo";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([])

  //Ternario --> condicion ? si es verdadera se muestra: es falsa no se muestra
  //Corto circuito --> codicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaboradores])
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innvación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {/*{mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador} />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo datos={equipo} key={equipo.titulo}
        colaboradores={colaboradores} />
      ))}
    </div>
  );
}
export default App;

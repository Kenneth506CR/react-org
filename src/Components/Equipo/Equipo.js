import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador.js";

const Equipo = (props) => {
  //Destructuración
  const { colorPrimario, colorSecundario, titulo } = props.datos;

  return (
    <section className="equipo" style={{ backgroundColor: colorSecundario }}>
      <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
      <Colaborador />
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;

import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador.js";

const Equipo = (props) => {
  return (
    <section
      className="equipo"
      style={{ backgroundColor: props.datos.colorSecundario }}
    >
      <h3 style={{ borderColor: props.datos.colorPrimario }}>
        key={props.datos.titulo}
      </h3>
      <Colaborador />
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;

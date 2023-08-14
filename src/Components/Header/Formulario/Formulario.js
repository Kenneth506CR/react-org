import "./Formulario.css";
import CampoTexto from "../../CampoTexto/CampoTexto.js";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" />
        <CampoTexto titulo="Puesto" />
        <CampoTexto titulo="Foto" />
      </form>
    </section>
  );
};

export default Formulario;

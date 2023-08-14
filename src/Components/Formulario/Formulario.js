import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/boton";

const Formulario = () => {

  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log("Formulario enviado")
  }


  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required/>
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
        <ListaOpciones/>
        <Boton texto="Crear" />
      </form>
    </section>
  );
};

export default Formulario;

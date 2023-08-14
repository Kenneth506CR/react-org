import "./ListaOpciones.css";

const ListaOpciones = () => {
  //Metodo map
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innvación y Gestión",
  ];

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>{equipos.map( (equipo, index) => {
        return <option key={index}>{equipo}</option>
      } ) }</select>
    </div>
  );
};

export default ListaOpciones;

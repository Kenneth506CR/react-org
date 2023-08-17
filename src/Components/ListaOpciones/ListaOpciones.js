import "./ListaOpciones.css";

const ListaOpciones = (props) => {
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

  const manejarCambio = (e) => {
    console.log("cambió", e.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
        {equipos.map((equipo, index) => {
          return <option key={index} value={equipo}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;

import React, {useContext} from "react";
import { FormContext } from "../../context/formContext";
import "./Formulario.css"
const Formulario = () => {
  const {updateData} = useContext(FormContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = Object.fromEntries(new FormData(e.target))
    updateData(obj)
  }
  return(
    <section className="formulario">
      <h1>Introduce tus datos: </h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <input type="url" name="image"/>
        <input type="number" name="age"/>
        <button>Enviar datos</button> 
      </form>
    </section>

  );
};

export default Formulario;

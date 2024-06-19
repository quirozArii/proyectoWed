import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    mascota: "",
    servicio: "",
    reservacion: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    console.log(formData);
    // Resetear el estado o realizar otras acciones según sea necesario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      mascota: "",
      servicio: "",
      reservacion: ""
    });
  };

  return (
    <>
      <div className="contact_form">
        <div className="formulario">
          <h1>AGENDE CITA</h1>
          <h3>Completa los siguientes campos </h3>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="nombre" className="colocar_nombre">
                Nombre
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Escribe tu nombre"
              />
            </p>
            <p>
              <label htmlFor="email" className="colocar_email">
                Email
                <span className="obligatorio">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Escribe tu Email"
              />
            </p>
            <p>
              <label htmlFor="telefono" className="colocar_telefono">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                id="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Escribe tu teléfono"
              />
            </p>
            <p>
              <label htmlFor="direccion" className="colocar_direccion">
                Dirección de referencia
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                name="direccion"
                id="direccion"
                required
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Escribe tu dirección completa"
              />
            </p>
            <p>
              <label htmlFor="producto" className="colocar_producto">
                nombre de la mascota
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                name="producto"
                id="producto"
                required
                value={formData.mascota}
                onChange={handleChange}
                placeholder="Escribe el nombre de la mascota "
              />
            </p>
            <p>
              <label htmlFor="cantidad" className="colocar_cantidad">
                Fecha de Reservacion 
                <span className="obligatorio">*</span>
              </label>
              <input
                type="number"
                name="cantidad"
                id="cantidad"
                required
                value={formData.fecha}
                onChange={handleChange}
                placeholder="Escribe la fecha de reservacion"
              />
            </p>
            <p>
              <label htmlFor="mensaje" className="colocar_mensaje">
                Mensaje Adicional
              </label>
              <textarea
                name="mensaje"
                className="texto_mensaje"
                id="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Agrega algún comentario adicional..."
              ></textarea>
            </p>
            <button type="submit" name="enviar_formulario" id="enviar">
              Agendar ahora 
            </button>
            <p className="aviso">
              <span className="obligatorio">*</span> Los campos marcados son obligatorios.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
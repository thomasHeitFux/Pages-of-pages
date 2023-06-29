import React from 'react';
import './styles/ContactComponent.css';

const ContactComponent = () => {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactComponent;

import React from 'react';
import './styles/ServicesComponent.css';

const ServicesComponent = () => {
  return (
    <div className="services-container">
      <h2>Nuestros Servicios</h2>
      <div className="service">
        <h3>Servicio 1</h3>
        <p>Descripción del servicio 1.</p>
      </div>
      <div className="service">
        <h3>Servicio 2</h3>
        <p>Descripción del servicio 2.</p>
      </div>
      <div className="service">
        <h3>Servicio 3</h3>
        <p>Descripción del servicio 3.</p>
      </div>
    </div>
  );
};

export default ServicesComponent;

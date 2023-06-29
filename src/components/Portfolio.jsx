import React from 'react';
import './styles/PortfolioComponent.css';

const PortfolioComponent = () => {
  return (
    <div className="portfolio-container">
      <h2>Nuestro Portafolio</h2>
      <div className="project">
        <img src="path-to-image" alt="Proyecto 1" />
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1.</p>
      </div>
      <div className="project">
        <img src="path-to-image" alt="Proyecto 2" />
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2.</p>
      </div>
      <div className="project">
        <img src="path-to-image" alt="Proyecto 3" />
        <h3>Proyecto 3</h3>
        <p>Descripción del proyecto 3.</p>
      </div>
    </div>
  );
};

export default PortfolioComponent;

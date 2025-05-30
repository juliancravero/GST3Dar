import React, { useState } from 'react';
import FilamentGrid from '../components/FilamentGrid';

const categorias = ['PLA', 'PETG', 'TPU', 'SILK', 'ABS', 'ASA', 'ESPECIALES'];

const Products = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('PLA');

  return (
    <section className="products-container">
      <h2 className="products-title">Nuestros Filamentos</h2>

      <div className="category-buttons">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`category-button ${categoriaSeleccionada === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <FilamentGrid categoria={categoriaSeleccionada} />
    </section>
  );
};

export default Products;

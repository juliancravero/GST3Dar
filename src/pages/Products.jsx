import React, { useState } from 'react';

const categorias = ['PLA', 'PETG', 'TPU', 'SILK', 'ABS', 'ASA', 'ESPECIALES'];

const productos = {
  PLA: [
    {
      nombre: 'Filamento PLA Apple Green',
      descripcion: 'Filamento PLA color Apple Green, diámetro 1.75mm, 1kg.',
      imagen: '/images/pla-applegreen.jpg',
    },
    {
      nombre: 'Filamento PLA Capibara',
      descripcion: 'Nuevo color Capibara, excelente calidad de impresión.',
      imagen: '/images/pla-capibara.jpg',
    },
  ],
  PETG: [
    {
      nombre: 'Filamento PETG Blanco',
      descripcion: 'Alta resistencia y flexibilidad. Ideal para piezas funcionales.',
      imagen: '/images/petg-blanco.jpg',
    },
  ],
  TPU: [
    {
      nombre: 'Filamento TPU Negro',
      descripcion: 'Flexible y duradero. Perfecto para prototipos elásticos.',
      imagen: '/images/tpu-negro.jpg',
    },
  ],
  SILK: [
    {
      nombre: 'Filamento SILK Gold',
      descripcion: 'Acabado brillante, ideal para piezas decorativas.',
      imagen: '/images/silk-gold.jpg',
    },
  ],
  ABS: [
    {
      nombre: 'Filamento ABS Blanco',
      descripcion: 'Filamento resistente para piezas funcionales.',
      imagen: '/images/abs-blanco.jpg',
    },
  ],
  ASA: [
    {
      nombre: 'Filamento ASA Negro',
      descripcion: 'Ideal para exteriores, resistente a los rayos UV.',
      imagen: '/images/asa-negro.jpg',
    },
  ],
  ESPECIALES: [
    {
      nombre: 'Filamento PLA con fibra de carbono',
      descripcion: 'Filamento reforzado con fibra de carbono, super resistente.',
      imagen: '/images/especial-carbon.jpg',
    },
  ],
};

const Products = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('PLA');

  return (
    <section className="products-container">
      <h2 className="products-title">Nuestros Productos</h2>

      <div className="category-buttons">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`category-button ${
              categoriaSeleccionada === cat ? 'active' : ''
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {productos[categoriaSeleccionada]?.map((prod, idx) => (
          <div key={idx} className="product-card">
            <img src={prod.imagen} alt={prod.nombre} className="product-img" />
            <div className="product-info">
              <h3>{prod.nombre}</h3>
              <p>{prod.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

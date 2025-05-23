import React, { useState } from 'react'

const categorias = ['PLA', 'PETG', 'TPU', 'SILK', 'ABS', 'ASA', 'ESPECIALES']

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
}

const Products = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('PLA')

  return (
    <section className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Nuestros Productos</h2>

      {/* Botones de categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              categoriaSeleccionada === cat
                ? 'bg-black text-white'
                : 'bg-white text-black'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos[categoriaSeleccionada]?.map((prod, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={prod.imagen}
              alt={prod.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{prod.nombre}</h3>
              <p className="text-sm text-gray-600">{prod.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products

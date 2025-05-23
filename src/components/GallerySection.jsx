// src/components/GallerySection.jsx

const packs = [
  {
    nombre: "Pack Verde Metálico",
    imagen: "/images/pack-verde.jpg",
  },
  {
    nombre: "Pack Azul Eléctrico",
    imagen: "/images/pack-azul.jpg",
  },
  {
    nombre: "Pack Verde Esmeralda",
    imagen: "/images/pack-esmeralda.jpg",
  },
  {
    nombre: "Pack Cobre Premium",
    imagen: "/images/pack-cobre.jpg",
  },
];

export default function GallerySection() {
  return (
    <section className="packs-section" id="packs">
      <h2 className="packs-title">PACKS</h2>
      <div className="packs-grid">
        {packs.map((pack, idx) => (
          <div key={idx} className="pack-card">
            <img src={pack.imagen} alt={pack.nombre} className="pack-img" />
            <p className="pack-name">{pack.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

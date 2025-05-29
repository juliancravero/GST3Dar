// src/components/GallerySection.jsx

const packs = [
  {
    nombre: "PLA+ HIGH SPEED",
    imagen: "/images/PLARed.png",
  },
  {
    nombre: "SILK PLA",
    imagen: "/images/GreenSilk.png",
  },
  {
    nombre: "SILK TRICOLOR",
    imagen: "/images/TricolorSilk.png",
  },
  {
    nombre: "FIBRA DE CARBONO",
    imagen: "/images/FC.png",
  },
   {
    nombre: "PET-G",
    imagen: "/images/PETGBlue.png",
  },
];

export default function GallerySection() {
  return (
    <section className="packs-section" id="packs">
      <h2 className="packs-title">NUESTROS FILAMENTOS</h2>
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

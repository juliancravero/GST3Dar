// src/components/FilamentGrid.jsx

const filamentos = {
  PLA: [
    "/images/pla-applegreen.jpg",
    "/images/pla-capibara.jpg",
  ],
  PETG: ["/images/petg-blanco.jpg"],
  TPU: ["/images/tpu-negro.jpg"],
  SILK: ["/images/silk-gold.jpg"],
  ABS: ["/images/abs-blanco.jpg"],
  ASA: ["/images/asa-negro.jpg"],
  ESPECIALES: ["/images/especial-carbon.jpg"],
};

export default function FilamentGrid({ categoria }) {
  return (
    <div className="products-grid">
      {filamentos[categoria]?.map((src, idx) => (
        <div key={idx} className="product-card">
          <img src={src} alt={`Filamento ${categoria} ${idx + 1}`} className="product-img" />
        </div>
      ))}
    </div>
  );
}

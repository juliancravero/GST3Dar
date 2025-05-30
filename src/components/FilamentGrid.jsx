// src/components/FilamentGrid.jsx

const filamentos = {
  PLA: [
    "/images/PLARed.png",
    "/images/Varios.png",
  ],
  PETG: ["/images/PETGBlue.png"],
  //TPU: ["/images/tpu-negro.jpg"],
  SILK: [
    "/images/GreenSilk.png",
    "/images/TricolorSilk.png"
  ],
  //ABS: ["/images/abs-blanco.jpg"],
  //ASA: ["/images/asa-negro.jpg"],
  ESPECIALES: ["/images/FC.png"],
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

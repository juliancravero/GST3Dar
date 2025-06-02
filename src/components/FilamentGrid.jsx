// src/components/FilamentGrid.jsx

const filamentos = {
  PLA: [
    "/images/PLARed.png",
    "/images/Varios.png",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/6.jpg",
    "/images/5.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpg",
    "/images/24.jpg",
    "/images/25.jpg",
    "/images/26.jpg",
    "/images/27.jpg",
    "/images/28.jpg",
    "/images/29.jpg",
    "/images/30.jpg",
    "/images/31.jpg",
    "/images/32.JPG",
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

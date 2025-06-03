// src/components/FilamentGrid.jsx

const filamentos = {
 PLA: [
    { nombre: "ARMY GREEN", src: "/images/1.jpg" },
    { nombre: "GLITTER ARMY GREEN", src: "/images/2.jpg" },
    { nombre: "BROWN", src: "/images/3.jpg" },
    { nombre: "CRYSTAL", src: "/images/4.jpg" },
    { nombre: "BLACK", src: "/images/5.jpg" },
    { nombre: "APPLE GREEN", src: "/images/6.jpg" },
    { nombre: "BLUE", src: "/images/7.jpg" },
    { nombre: "GLITTER BLACK", src: "/images/8.jpg" },
    { nombre: "GLITTER BLUE", src: "/images/9.jpg" },
    { nombre: "GLITTER RED", src: "/images/10.jpg" },
    { nombre: "GLITTER SILVER", src: "/images/11.jpg" },
    { nombre: "FIREFLY", src: "/images/12.jpg" },
    { nombre: "ORANGE FLUOR", src: "/images/14.jpg" },
    { nombre: "SILVER", src: "/images/15.jpg" },
    { nombre: "FUCHSIA", src: "/images/16.jpg" },
    { nombre: "GOLD", src: "/images/17.jpg" },
    { nombre: "GLITTER GOLD", src: "/images/18.jpg" },
    { nombre: "NAFTA SUPER", src: "/images/19.jpg" },
    { nombre: "LIGHT BLUE", src: "/images/20.jpg" },
    { nombre: "LIGHT PINK", src: "/images/21.jpg" },
    { nombre: "VARIABLE", src: "/images/22.jpg" },
    { nombre: "LIGHT YELLOW", src: "/images/23.jpg" },
    { nombre: "LIGHT BROWN", src: "/images/24.jpg" },
    { nombre: "MUSTARD", src: "/images/25.jpg" },
    { nombre: "ORANGE", src: "/images/26.jpg" },
    { nombre: "PINK", src: "/images/27.jpg" },
    { nombre: "RED", src: "/images/28.jpg" },
    { nombre: "VIOLET", src: "/images/29.jpg" },
    { nombre: "ULTRA WHITE", src: "/images/30.jpg" },
    { nombre: "YELLOW FLUOR", src: "/images/31.jpg" },
  ],
  PETG: [
    { nombre: "PETG Blue", src: "/images/PETGBlue.png" }
  ],
  //TPU: ["/images/tpu-negro.jpg"],
  SILK: [
    { nombre: "Green Silk", src: "/images/GreenSilk.png" },
    { nombre: "Tricolor Silk", src: "/images/TricolorSilk.png" }
  ],
  //ABS: ["/images/abs-blanco.jpg"],
  //ASA: ["/images/asa-negro.jpg"],
  ESPECIALES: [
    { nombre: "Fibra de Carbono", src: "/images/FC.png" }
  ],
};

export default function FilamentGrid({ categoria }) {
  return (
    <div className="products-grid">
      {filamentos[categoria]?.map((prod, idx) => (
        <div key={idx} className="product-card">
          <img
            src={prod.src}
            alt={`Filamento ${prod.nombre}`}
            className="product-img"
          />
          <div className="product-info">
            <p>{prod.nombre}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

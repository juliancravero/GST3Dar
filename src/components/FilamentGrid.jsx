// src/components/FilamentGrid.jsx
import React, { useState, useEffect } from "react";

const filamentos = {
  PLA: [
    { nombre: "ARMY GREEN", src: ["/images/PLA_ARMYGREEN.png", "/images/PLA_ARMYGREEN2.png"] },
    { nombre: "APPLE GREEN", src: ["/images/PLA_APPLEGREEN.png", "/images/PLA_APPLEGREEN2.png"] },
    { nombre: "BLACK", src: ["/images/PLA_BLACK.png", "/images/PLA_BLACK2.png"] },
    { nombre: "BLUE", src: ["/images/PLA_BLUE.png", "/images/PLA_BLUE2.png"] },
    { nombre: "BROWN", src: ["/images/PLA_BROWN.png", "/images/PLA_BROWN2.png"] },
    { nombre: "CRYSTAL", src: ["/images/PLA_CRYSTAL.png", "/images/PLA_CRYSTAL2.png"] },
    { nombre: "FLUOR ORANGE", src: ["/images/PLA_FLUOORANGE.png", "/images/PLA_FLUOORANGE2.png"] },
    { nombre: "FLUOR YELLOW", src: ["/images/PLA_FLUOYELLOW.png", "/images/PLA_FLUOYELLOW2.png"] },
    { nombre: "FUCHSIA", src: ["/images/PLA_FUCSIA.png", "/images/PLA_FUCSIA2.png"] },
    { nombre: "GOLD", src: ["/images/PLA_GOLD.png", "/images/PLA_GOLD2.png"] },
    { nombre: "LIGHT BLUE", src: ["/images/PLA_LIGHTBLUE.png", "/images/PLA_LIGHTBLUE2.png"] },
    { nombre: "LIGHT PINK", src: ["/images/PLA_LIGHTPINK.png", "/images/PLA_LIGHTPINK2.png"] },
    { nombre: "ORANGE", src: ["/images/PLA_ORANGE.png", "/images/PLA_ORANGE2.png"] },
    { nombre: "PINK", src: ["/images/PLA_PINKPANTHER.png", "/images/PLA_PINKPANTHER2.png"] },
    { nombre: "RED", src: ["/images/PLA_RED.png", "/images/PLA_RED2.png"] },
    { nombre: "SILVER", src: ["/images/PLA_SILVER.png", "/images/PLA_SILVER2.png"] },
    { nombre: "VIOLET", src: ["/images/PLA_VIOLET.png", "/images/PLA_VIOLET2.png"] },
    { nombre: "ULTRA WHITE", src: ["/images/PLA_WHITE.png", "/images/PLA_WHITE2.png"] },
    { nombre: "YELLOW", src: ["/images/PLA_YELLOW.png", "/images/PLA_YELLOW2.png"] },
    { nombre: "FIREFLY", src: ["/images/PLAS_FIREFLYOFF.png", "/images/PLAS_FIREFLYON.png"] },
    { nombre: "NAFTA SUPER", src: ["/images/PLAS_ICEBLUE.png", "/images/PLAS_ICEBLUE2.png"] },
    { nombre: "BRONCE", src: ["/images/PLAS_METALLICBRONZE.png", "/images/PLAS_METALLICBRONZE2.png"] },                
  ],
  PETG: [
    { nombre: "BLACK", src: ["/images/PETG_BLACK.png", "/images/PETG_BLACK (2).png"] },
    { nombre: "CRYSTAL", src: ["/images/PETG_CRYSTAL.png", "/images/PETG_BLACK (2).png"] },
    { nombre: "WHITE", src: ["/images/PETG_WHITE.png", "/images/PETG_WHITE2 (2).png"] },
  ],
  TPU: [
    { nombre: "APPLE GREEN", src: ["/images/TPU_APPLEGREEN.png", "/images/TPU_APPLEGREEN2.png"] },
    { nombre: "BLACK", src: ["/images/TPU_BLACK.png", "/images/TPU_BLACK2.png"] },
    { nombre: "BLUE", src: ["/images/TPU_BLUE.png", "/images/TPU_BLUE2.png"] },
    { nombre: "RED", src: ["/images/TPU_RED.png", "/images/TPU_RED2.png"] },
    { nombre: "SILVER", src: ["/images/TPU_SILVER.png", "/images/TPU_SILVER2.png"] },
    { nombre: "WHITE", src: ["/images/TPU_WHITE.png", "/images/TPU_WHITE2.png"] },
  ],
  SILK: [
    { nombre: "SILK ALUMINIUM", src: ["/images/SILK_ALUMINIUM.png", "/images/SILK_ALUMINIUM2.png"] },
    { nombre: "SILK BLUE", src: ["/images/SILK_BLUE.png", "/images/SILK_BLUE2.png"] },
    { nombre: "SILK FUCHSIA", src: ["/images/SILK_FUCSIA.png", "/images/SILK_FUCSIA2.png"] },
    { nombre: "SILK GOLD", src: ["/images/SILK_GOLDPURE.png", "/images/SILK_GOLDPURE2.png"] },
    { nombre: "SILK GRAPHITE", src: ["/images/SILK_GRAPHITE.png", "/images/SILK_GRAPHITE2.png"] },
    { nombre: "SILK GREEN", src: ["/images/SILK_GREEN.png", "/images/SILK_GREEN2.png"] },
    { nombre: "SILK PEACH", src: ["/images/SILK_PEACH.png", "/images/SILK_PEACH2.png"] },
    { nombre: "SILK PURPLE", src: ["/images/SILK_PURPLE.png", "/images/SILK_PURPLE (2).png"] },
    { nombre: "SILK RED", src: ["/images/SILK_RED.png", "/images/SILK_RED2.png"] },
    { nombre: "SILK ROSE GOLD", src: ["/images/SILK_ROSEGOLD.png", "/images/SILK_ROSEGOLD2.png"] },
    { nombre: "SILK SAND", src: ["/images/SILK_SAND.png", "/images/SILK_SAND2.png"] },
  ],
  ABS: [
    { nombre: "BLACK", src: ["/images/ABS_BLACK.png", "/images/ABS_BLACK 2.png"] },   
  ],
  ASA: [
    { nombre: "BLACK", src: ["/images/ASA_BLACKGRAPHITE.png", "/images/ASA_BLACKGRAPHITE 2.png"] },
  ],
  ESPECIALES: [
    { nombre: "FIBRA DE CARBONO", src: ["/images/PETG_CARBONFIBER.png", "/images/PETG_CARBONFIBER 2.png"] },
  ],
};

export default function FilamentGrid({ categoria }) {
  return (
    <div className="products-grid">
      {filamentos[categoria]?.map((prod, idx) => (
        <ProductCard key={idx} product={prod} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % product.src.length);
      setIsVisible(true);
      }, 500); 
    }, 5000);

    return () => clearInterval(interval);
  }, [product.src]);

  return (
    <div className="product-card">
      <img
        src={product.src[currentImage]}
        alt={`Filamento ${product.nombre}`}
        className={`product-img ${isVisible ? "visible" : "hidden"}`}
      />
      <div className="product-info">
        <p>{product.nombre}</p>
      </div>
    </div>
  );
}

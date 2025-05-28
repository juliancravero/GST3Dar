
import GallerySection from '../components/GallerySection';
import SplitSection from "../components/SplitSection";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <section className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
        <p>
          Ofrecemos productos y servicios de calidad para satisfacer las necesidades
          de nuestros clientes, siempre con innovación y compromiso.
        </p>
      </section>
      <GallerySection /> 
      <>
      <SplitSection
        img="/images/machine.jpg"
        title="Proveemos materiales de alta calidad"
        text="Ideal para granjas de impresión."
      />

      <SplitSection
        img="/images/farm.jpg"
        title="Materiales para producción"
        text="Filamentos que garantizan rendimiento y calidad."
        reverse
      />

      <SplitSection
        img="/images/printlab.jpg"
        title="Impulsamos la creatividad"
        text="Ideal para diseño, prototipado y piezas decorativas."
      />
      </>
    </div>
  );
}

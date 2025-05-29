
import GallerySection from '../components/GallerySection';
import SplitSection from "../components/SplitSection";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <section className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 filamentos-title"></h2>
      </section>
      <GallerySection /> 
    </div>
  );
}

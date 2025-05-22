import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
        <p>
          Ofrecer productos y servicios de calidad para satisfacer las necesidades
          de nuestros clientes, siempre con innovación y compromiso.
        </p>
      </section>
    </div>
  );
}

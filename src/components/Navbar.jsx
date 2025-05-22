import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">MiEmpresa</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/about" className="hover:underline">Sobre Nosotros</Link>
          <Link to="/contact" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

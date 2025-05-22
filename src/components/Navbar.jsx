import { Mail, Instagram, MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">GST 3D</h1>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#inicio" className="hover:text-blue-600 transition">Inicio</a></li>
          <li><a href="#nosotros" className="hover:text-blue-600 transition">Nosotros</a></li>
          <li><a href="#galeria" className="hover:text-blue-600 transition">Galería</a></li>
          <li><a href="#contacto" className="hover:text-blue-600 transition">Contacto</a></li>
        </ul>

        <div className="flex gap-4 items-center">
          <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <MessageCircle className="w-5 h-5 text-green-500 hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com/tuempresa" target="_blank" rel="noopener noreferrer" title="Instagram">
            <Instagram className="w-5 h-5 text-pink-500 hover:scale-110 transition" />
          </a>
          <a href="mailto:correo@empresa.com" title="Correo">
            <Mail className="w-5 h-5 text-blue-500 hover:scale-110 transition" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

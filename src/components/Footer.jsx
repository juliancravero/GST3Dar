export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>© 2025 MiEmpresa. Todos los derechos reservados.</p>
        <div className="mt-2 space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
          <a href="mailto:info@miempresa.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

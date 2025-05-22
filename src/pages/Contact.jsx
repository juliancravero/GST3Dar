export default function Contact() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <p>Podés escribirnos por WhatsApp o mail:</p>
      <ul className="mt-4 space-y-2">
        <li>WhatsApp: <a href="https://wa.me/123456789" className="text-blue-600 hover:underline">123456789</a></li>
        <li>Email: <a href="mailto:info@miempresa.com" className="text-blue-600 hover:underline">info@miempresa.com</a></li>
      </ul>
    </div>
  );
}

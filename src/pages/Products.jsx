const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción breve del producto 1.',
    price: '$999',
    image: '/assets/producto1.jpg',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción breve del producto 2.',
    price: '$1499',
    image: '/assets/producto2.jpg',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción breve del producto 3.',
    price: '$799',
    image: '/assets/producto3.jpg',
  },
  // Podés seguir agregando más productos
];

const Products = () => {
  return (
    <section id="productos" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Nuestros Productos</h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <p className="text-blue-600 font-bold mt-3">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

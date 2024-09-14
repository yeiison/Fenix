import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">ESENCIAL '24 HOMBRES</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
            <h3 className="text-lg font-medium mt-2">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex justify-center space-x-2 mt-4">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <span key={size} className="border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                  {size}
                </span>
              ))}
            </div>
            <Link 
                href={`/product/${product.slug}`}
                className="mt-4 text-blue-500 hover:underline block text-center"
            >
            View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

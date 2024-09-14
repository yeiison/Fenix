import React from 'react';
import Link from 'next/link';

const HomePage = ({ products, categories }) => (
  <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Bienvenido a FENIX</h1>
    
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Categorías</h2>
      <ul className="flex space-x-4">
        {categories.map(category => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}>
              
                {category.name}
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Productos destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src={product.image} alt={product.name} className="w-full rounded" />
            <h3 className="text-lg font-medium mt-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <Link href={`/product/${product.slug}`}>
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomePage;

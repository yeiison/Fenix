import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded" />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-2xl mt-4">${product.price}</p>
          <p className="mt-6">{product.description}</p>
          <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

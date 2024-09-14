import React from 'react';

const ProductDetails = ({ product }) => (
  <div className="container mx-auto p-4">
    <div className="flex">
      <img src={product.image} alt={product.name} className="w-1/2" />
      <div className="w-1/2 pl-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg">${product.price}</p>
        <p>{product.description}</p>
        <button className="bg-blue-500 text-white p-2 mt-4">Agregar al carrito</button>
      </div>
    </div>
  </div>
);

export default ProductDetails;

import React from 'react';
import HomePage from '../components/HomePage'; // Importa el componente desde la carpeta correcta

export default function Page() {
  // Puedes pasar productos y categorías desde aquí si los tienes
  const products = [
    { id: 1, name: 'Producto 1', price: 20, image: '/images/product1.jpg', slug: 'producto-1' },
    { id: 2, name: 'Producto 2', price: 30, image: '/images/product2.jpg', slug: 'producto-2' },
    // Añadir más productos según sea necesario
  ];

  const categories = [
    { id: 1, name: 'Categoría 1', slug: 'categoria-1' },
    { id: 2, name: 'Categoría 2', slug: 'categoria-2' },
    // Añadir más categorías
  ];

  return <HomePage products={products} categories={categories} />;
}

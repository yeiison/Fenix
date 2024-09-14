import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';


export default function Page() {
  // Puedes pasar productos y categorías desde aquí si los tienes
  const products = [
    { id: 1, name: 'T-Shirt', price: 20, image: '/images/tshirt.jpg', slug: 'tshirt' },
    { id: 2, name: 'Joggers', price: 40, image: '/images/joggers.jpg', slug: 'joggers' },
    { id: 3, name: 'Sweatshirt', price: 60, image: '/images/sweatshirt.jpg', slug: 'sweatshirt' },
    { id: 4, name: 'Shorts', price: 30, image: '/images/shorts.jpg', slug: 'shorts' },
    // Añadir más productos según sea necesario
  ];

  const categories = [
    { id: 1, name: 'Categoría 1', slug: 'categoria-1' },
    { id: 2, name: 'Categoría 2', slug: 'categoria-2' },
    // Añadir más categorías
  ];


  return (
    <>
      <Navbar />
      <ProductList products={products} />
    </>
  );
  
}

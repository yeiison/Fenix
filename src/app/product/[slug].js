import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails';

// Datos de ejemplo
const products = {
  tshirt: { id: 1, name: 'T-Shirt', price: 20, image: '/images/tshirt.jpg', description: 'A comfortable t-shirt.' },
  joggers: { id: 2, name: 'Joggers', price: 40, image: '/images/joggers.jpg', description: 'Stylish joggers.' },
  sweatshirt: { id: 3, name: 'Sweatshirt', price: 60, image: '/images/sweatshirt.jpg', description: 'A warm sweatshirt.' },
  shorts: { id: 4, name: 'Shorts', price: 30, image: '/images/shorts.jpg', description: 'Lightweight shorts.' },
};

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products[slug];

  return product ? <ProductDetails product={product} /> : <p>Product not found.</p>;
};

export default ProductPage;

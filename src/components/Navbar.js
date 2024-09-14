import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold"> FENIX VISIONARY </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/men" className="hover:text-gray-700"> HOMBRE</Link>
          <Link href="/women" className="hover:text-gray-700">MUJERES</Link>
          <Link href="/accessories" className="hover:text-gray-700">ACCESORIOS</Link>
          <Link href="/our-story" className="hover:text-gray-700"> NUESTRA HISTORIA</Link>
          <Link href="/community" className="hover:text-gray-700">COMUNIDAD</Link>
        </div>
        <div className="flex space-x-4">
          <button className="hover:text-gray-700">Search</button>
          <button className="hover:text-gray-700">User</button>
          <button className="hover:text-gray-700">Cart</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

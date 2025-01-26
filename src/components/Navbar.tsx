import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src="/logooo.jpeg" alt="Logo" className="h-12" />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">HOME</Link>
            <Link to="/#about" className="hover:text-gray-300">ABOUT</Link>
            <Link to="/services" className="hover:text-gray-300">SERVICES</Link>
            <Link to="/#contact" className="hover:text-gray-300">CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
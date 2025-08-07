import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/volunteer', label: 'Volunteer' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (path) => {
    setIsOpen(false);
    // Ensure it scrolls to top when route changes
    if (location.pathname !== path) window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-1">
            <span className="text-2xl font-bold text-blue-600">HelpingHand</span>
            <span className="text-2xl font-bold text-green-600">NGO</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium px-2 py-1 transition duration-200 border-b-2 ${
                  location.pathname === item.path
                    ? 'text-blue-600 border-blue-500'
                    : 'text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block px-6 py-4 text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

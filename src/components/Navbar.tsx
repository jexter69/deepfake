import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuthStore();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 font-bold text-xl sm:text-2xl"
              onClick={closeMenu}
            >
              <span className="gradient-text">DeepfakeDetector</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 font-medium rounded ${
                  isActive('/') 
                    ? 'bg-primary-500 text-white shadow-neo' 
                    : 'hover:bg-gray-100'
                }`}
              >
                About
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to="/detect" 
                    className={`px-3 py-2 font-medium rounded ${
                      isActive('/detect') 
                        ? 'bg-secondary-500 text-white shadow-neo' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Detect Deepfake
                  </Link>
                  <button 
                    onClick={signOut}
                    className="px-3 py-2 font-medium rounded hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className={`px-3 py-2 font-medium rounded ${
                      isActive('/login') 
                        ? 'bg-secondary-500 text-white shadow-neo' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className={`px-3 py-2 font-medium rounded ${
                      isActive('/signup') 
                        ? 'bg-accent-500 text-white shadow-neo' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 font-medium rounded ${
                isActive('/') 
                  ? 'bg-primary-500 text-white shadow-neo' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            
            {user ? (
              <>
                <Link
                  to="/detect"
                  className={`block px-3 py-2 font-medium rounded ${
                    isActive('/detect') 
                      ? 'bg-secondary-500 text-white shadow-neo' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={closeMenu}
                >
                  Detect Deepfake
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                  className="block w-full text-left px-3 py-2 font-medium rounded hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`block px-3 py-2 font-medium rounded ${
                    isActive('/login') 
                      ? 'bg-secondary-500 text-white shadow-neo' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`block px-3 py-2 font-medium rounded ${
                    isActive('/signup') 
                      ? 'bg-accent-500 text-white shadow-neo' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
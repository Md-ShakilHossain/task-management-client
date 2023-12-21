import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Task Manager
        </Link>

        {/* Mobile and Tablet Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>

          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-blue-500 p-4">
              <Link
                to="/"
                className="block text-white py-2 px-4 hover:bg-blue-600"
              >
                Home
              </Link>
              <Link
                to="/tasks"
                className="block text-white py-2 px-4 hover:bg-blue-600"
              >
                Tasks
              </Link>
              <Link
                to="/profile"
                className="block text-white py-2 px-4 hover:bg-blue-600"
              >
                Profile
              </Link>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/tasks" className="text-white hover:underline">
            Tasks
          </Link>
          <Link to="/profile" className="text-white hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

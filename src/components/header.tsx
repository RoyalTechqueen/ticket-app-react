import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => setShowMenu(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-colors duration-300 ${
        isScrolled ? "bg-blue-300 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-8 px-4 py-6 sm:px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-medium text-blue-200">Ticket</h1>
          <h3 className="text-2xl font-medium text-blue-500">App</h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-8 text-md">
          <a href="#home" className="px-4 py-2 text-black rounded-md inline-flex items-center hover:text-blue-500">
            Home
          </a>
          <a
            href="/auth/login"
            className="px-4 py-2 bg-blue-500 hover:bg-gray-500 text-white rounded-md inline-flex items-center"
          >
            Login
          </a>
          <a
            href="/auth/signup"
            className="px-4 py-2 bg-blue-500 hover:bg-gray-500 text-white rounded-md inline-flex items-center"
          >
            Sign Up
          </a>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="block sm:hidden ml-4"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-l from-blue-200 to-teal-200 shadow-lg transition-transform transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl"
            aria-label="Close Menu"
            onClick={() => setShowMenu(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 p-6">
          <a href="#home" className="hover:text-gray-600" onClick={handleLinkClick}>
            Home
          </a>
          <a
            href="/auth/login"
            className="px-2 py-2 bg-blue-500 hover:bg-gray-500 text-white rounded-md inline-flex items-center"
            onClick={handleLinkClick}
          >
            Login
          </a>
          <a
            href="/auth/signup"
            className="px-2 py-2 bg-blue-500 hover:bg-gray-500 text-white rounded-md inline-flex items-center"
            onClick={handleLinkClick}
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

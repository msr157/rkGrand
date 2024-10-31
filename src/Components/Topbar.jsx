// Topbar.jsx
import { useState, useEffect } from "react";

const menuItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "Services" },
  { id: 3, label: "About Us" },
  { id: 4, label: "Gallery" },
  { id: 5, label: "Videos" },
  { id: 6, label: "Testimonials" },
  { id: 7, label: "Contact Us" },
];

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">Logo</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={toggleMenu}></div>
        <nav
          className="relative flex flex-col w-80 max-w-[80%] h-full bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-800">Logo</span>
              <button
                onClick={toggleMenu}
                className="rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <div className="mt-8">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                    role="menuitem"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Topbar;

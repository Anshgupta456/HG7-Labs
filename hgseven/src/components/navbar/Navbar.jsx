import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", id: "about", link: "/about" },
    { name: "Products", id: "business", link: "/about" },
    { name: "Categories", id: "blogs", linkF: "/about" },
    { name: "Contact", id: "career", link: "/about" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-border shadow-sm z-40">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <a
          href="#"
          className="font-['Playfair_Display'] text-3xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity duration-300"
        >
          <img src={logo} alt="HG7 Labs" className="w-40 h-35 inline-block" />
          HG7 Labs
        </a>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body font-medium text-foreground hover:text-[var(--brand-primary)] transition-all duration-300 relative group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-[#2c7ee9] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 relative">
            <span
              className={`block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
              }`}
              style={{ top: "6px" }}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
              style={{ top: "12px" }}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"
              }`}
              style={{ top: "18px" }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-[#1a9df1] font-medium py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

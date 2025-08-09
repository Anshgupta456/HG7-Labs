import React, {useState} from "react";


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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-18">
        <a href="#"
        className="text-3xl font-bold text-[#1a9df1] tracking-tight">HG7 Labs</a>
        <ul className="hidden md:flex md:items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-[#1a9df1] font-medium transition-colors duration-300 relative-group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a9df1] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <svg className="w-6 h-6" fill="none"
            stroke="currentcolor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
                {navItems.map((item) => (
                    <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-gray-700 hover:text-[#1a9df1] font-medium py-2">
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

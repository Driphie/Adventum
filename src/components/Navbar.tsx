import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "La Empresa", id: "empresa" },
    { name: "Quiénes Somos", id: "equipo" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 fade-down ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-3" : "bg-white py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold text-foreground">
               <img src="./adventum-logo.png" alt="" width={100} />
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-black hover:text-primary transition-colors duration-300 px-3 py-2 text-xl font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 z-50 transition-all duration-300 ease-in-out transform ${
            isOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-[-10px] scale-95 pointer-events-none'
          }`}
        >
          <div className="mx-4 mt-2 bg-background border border-border rounded-xl shadow-xl overflow-hidden">
            <div className="py-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-foreground hover:text-primary hover:bg-muted block px-6 py-4 text-lg font-medium w-full text-left transition-all duration-300 transform ${
                    index !== navItems.length - 1 ? 'border-b border-border/50' : ''
                  } ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'}`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
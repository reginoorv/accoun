function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <header 
        data-name="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div data-name="header-container" className="container mx-auto px-4 flex justify-between items-center">
          <div data-name="logo" className="flex items-center">
            <i className="fas fa-calculator text-blue-600 text-3xl mr-2"></i>
            <span className="font-bold text-xl text-gray-800">Precision Accounting</span>
          </div>
          
          <nav data-name="desktop-nav" className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Book Consultation
            </a>
          </nav>
          
          <div data-name="mobile-menu-button" className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            data-name="mobile-menu"
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#why-choose-us" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
    return null;
  }
}

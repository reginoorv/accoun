function Footer() {
  try {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer 
        data-name="footer"
        className="bg-gray-800 text-white pt-16 pb-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div data-name="footer-about">
              <div className="flex items-center mb-4">
                <i className="fas fa-calculator text-blue-400 text-2xl mr-2"></i>
                <span className="font-bold text-xl">Precision Accounting</span>
              </div>
              <p className="text-gray-300 mb-6">
                Professional accounting and bookkeeping services to help your business thrive.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
              </div>
            </div>
            
            <div data-name="footer-services">
              <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Bookkeeping</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Tax Preparation</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Payroll Management</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Financial Consulting</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Business Planning</a>
                </li>
              </ul>
            </div>
            
            <div data-name="footer-resources">
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Tax Guides</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Financial Calculators</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Client Portal</a>
                </li>
              </ul>
            </div>
            
            <div data-name="footer-contact">
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <address className="not-italic text-gray-300 space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1.5 mr-3 text-blue-400"></i>
                  <span>
                    123 Business Blvd, Suite 100<br />
                    Financial District<br />
                    New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                  <a href="tel:+11234567890" className="hover:text-blue-400 transition-colors">(123) 456-7890</a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-400"></i>
                  <a href="mailto:info@precisionaccounting.com" className="hover:text-blue-400 transition-colors">info@precisionaccounting.com</a>
                </div>
              </address>
            </div>
          </div>
          
          <hr className="border-gray-700 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p data-name="copyright" className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Precision Accounting. All rights reserved.
            </p>
            <div data-name="footer-legal" className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
    return null;
  }
}

function HeroSection() {
  try {
    return (
      <section 
        data-name="hero-section" 
        className="hero-pattern min-h-screen flex items-center pt-16 pb-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div data-name="hero-content" className="md:w-1/2 mb-10 md:mb-0">
              <h1 
                data-name="hero-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6"
              >
                Simplify Your Finances, <span className="text-blue-600">Focus on Growth</span>
              </h1>
              <p 
                data-name="hero-subtitle"
                className="text-xl text-gray-600 mb-8"
              >
                Expert Accounting & Bookkeeping Services You Can Trust.
              </p>
              <div data-name="hero-cta" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#contact" 
                  className="btn-primary bg-blue-600 text-white text-center px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-all"
                >
                  Book a Free Consultation
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-gray-300 text-gray-700 text-center px-8 py-3 rounded-md text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Our Services
                </a>
              </div>
            </div>
            
            <div data-name="hero-image" className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-200 rounded-full opacity-70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Business professionals reviewing financial documents" 
                  className="relative z-10 rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    reportError(error);
    return null;
  }
}

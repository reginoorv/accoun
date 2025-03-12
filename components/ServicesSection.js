function ServicesSection() {
  try {
    const services = [
      {
        icon: "fas fa-book",
        title: "Bookkeeping",
        description: "Streamlined record-keeping to keep your finances organized and up-to-date with our expert bookkeeping services."
      },
      {
        icon: "fas fa-file-invoice-dollar",
        title: "Tax Preparation",
        description: "Ensure compliance and maximize your returns with our comprehensive tax preparation and planning services."
      },
      {
        icon: "fas fa-money-check-alt",
        title: "Payroll Management",
        description: "Accurate and timely payroll services tailored to your business needs, ensuring your employees get paid correctly."
      },
      {
        icon: "fas fa-chart-line",
        title: "Financial Consulting",
        description: "Strategic insights to help you make informed decisions for sustainable growth and financial health."
      }
    ];

    return (
      <section 
        data-name="services-section"
        id="services" 
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-name="services-title"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Core Services
            </h2>
            <p 
              data-name="services-subtitle"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We provide comprehensive financial solutions to help your business thrive
            </p>
          </div>
          
          <div 
            data-name="services-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ServicesSection component error:', error);
    reportError(error);
    return null;
  }
}

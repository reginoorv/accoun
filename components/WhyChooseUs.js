function WhyChooseUs() {
  try {
    const reasons = [
      {
        icon: "fas fa-award",
        title: "20+ Years of Expertise",
        description: "With over two decades in the industry, we bring unparalleled experience to handle your financial needs."
      },
      {
        icon: "fas fa-puzzle-piece",
        title: "Tailored Solutions",
        description: "We create customized financial strategies that fit your unique business needs and goals."
      },
      {
        icon: "fas fa-check-circle",
        title: "Accuracy & Compliance",
        description: "Our meticulous approach ensures your finances are accurate and compliant with all regulations."
      },
      {
        icon: "fas fa-headset",
        title: "Dedicated Support",
        description: "Get personalized attention and responsive service from our committed team of professionals."
      }
    ];

    const testimonials = [
      {
        quote: "Precision Accounting transformed our financial operations. Their expertise helped us save on taxes while ensuring complete compliance.",
        name: "Sarah Johnson",
        position: "CEO",
        company: "Bright Solutions Inc."
      },
      {
        quote: "The team's attention to detail and personalized approach made all the difference for our growing business. Highly recommended!",
        name: "Michael Chen",
        position: "Founder",
        company: "InnoTech Startup"
      },
      {
        quote: "Their bookkeeping services have saved us countless hours and helped us make better financial decisions. True professionals.",
        name: "Amanda Rodriguez",
        position: "Operations Director",
        company: "Global Retail Group"
      }
    ];

    return (
      <section 
        data-name="why-choose-us-section"
        id="why-choose-us" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-name="why-choose-us-title"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Why Choose Precision Accounting
            </h2>
            <p 
              data-name="why-choose-us-subtitle"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our commitment to excellence sets us apart
            </p>
          </div>
          
          <div 
            data-name="reasons-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                data-name={`reason-card-${index}`}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <i className={`${reason.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <div className="text-center mb-10">
              <h3 
                data-name="certifications-title"
                className="text-2xl font-semibold text-gray-800 mb-4"
              >
                Our Certifications & Recognitions
              </h3>
              <div 
                data-name="certifications-logos"
                className="flex flex-wrap justify-center items-center gap-8"
              >
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <i className="fas fa-certificate text-blue-600 text-4xl"></i>
                  <p className="mt-2 font-medium">CPA Certified</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <i className="fas fa-star text-blue-600 text-4xl"></i>
                  <p className="mt-2 font-medium">Top Rated 2023</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <i className="fas fa-award text-blue-600 text-4xl"></i>
                  <p className="mt-2 font-medium">Industry Excellence</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <i className="fas fa-shield-alt text-blue-600 text-4xl"></i>
                  <p className="mt-2 font-medium">Security Verified</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            data-name="testimonials-section"
            className="mb-10"
          >
            <h3 
              data-name="testimonials-title"
              className="text-2xl font-semibold text-gray-800 mb-8 text-center"
            >
              What Our Clients Say
            </h3>
            <div 
              data-name="testimonials-grid"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('WhyChooseUs component error:', error);
    reportError(error);
    return null;
  }
}

function ContactSection() {
  try {
    return (
      <section 
        data-name="contact-section"
        id="contact" 
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-name="contact-title"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Let's Work Together
            </h2>
            <p 
              data-name="contact-subtitle"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Reach out today for a personalized financial consultation
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10">
            <div 
              data-name="contact-info"
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 
                  data-name="contact-info-title"
                  className="text-2xl font-semibold text-gray-800 mb-6"
                >
                  Contact Information
                </h3>
                
                <div 
                  data-name="contact-phone"
                  className="flex items-start mb-6"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <a href="tel:+11234567890" className="text-blue-600 hover:underline">(123) 456-7890</a>
                  </div>
                </div>
                
                <div 
                  data-name="contact-email"
                  className="flex items-start mb-6"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:info@precisionaccounting.com" className="text-blue-600 hover:underline">info@precisionaccounting.com</a>
                  </div>
                </div>
                
                <div 
                  data-name="contact-address"
                  className="flex items-start"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Office Address</p>
                    <address className="not-italic text-gray-600">
                      123 Business Blvd, Suite 100<br />
                      Financial District<br />
                      New York, NY 10001
                    </address>
                  </div>
                </div>
              </div>
              
              <div 
                data-name="business-hours"
                className="bg-white rounded-lg shadow-md p-8"
              >
                <h3 
                  data-name="hours-title"
                  className="text-2xl font-semibold text-gray-800 mb-6"
                >
                  Business Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              data-name="contact-form-container"
              className="lg:w-2/3"
            >
              <ContactForm />
            </div>
          </div>
          
          <div 
            data-name="map-container"
            className="mt-16 rounded-lg overflow-hidden shadow-md h-96"
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <i className="fas fa-map-marked-alt text-gray-400 text-5xl mb-4"></i>
                <p className="text-gray-600">
                  Interactive map would be embedded here in a production environment.<br />
                  For privacy and performance reasons, it's not loaded in this demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactSection component error:', error);
    reportError(error);
    return null;
  }
}

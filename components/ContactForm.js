function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      service: 'default',
      message: ''
    });
    
    const [submitting, setSubmitting] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
      
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: null
        }));
      }
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      handleFormSubmission(formData, setSubmitting, setSubmitted, setErrors);
    };
    
    const resetForm = () => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'default',
        message: ''
      });
      setSubmitted(false);
    };
    
    if (submitted) {
      return (
        <div 
          data-name="form-success"
          className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been received. We'll get back to you within 1-2 business days.
          </p>
          <button
            data-name="send-another-button"
            onClick={resetForm}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      );
    }
    
    return (
      <form 
        data-name="contact-form"
        onSubmit={handleSubmit} 
        className="bg-white rounded-lg shadow-md p-8"
      >
        {errors.form && (
          <div 
            data-name="form-error"
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4"
          >
            {errors.form}
          </div>
        )}
        
        <div data-name="form-group" className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md form-input ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your name"
            disabled={submitting}
          />
          {errors.name && (
            <p data-name="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        
        <div data-name="form-group" className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md form-input ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
            disabled={submitting}
          />
          {errors.email && (
            <p data-name="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        
        <div data-name="form-group" className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md form-input ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(123) 456-7890"
            disabled={submitting}
          />
          {errors.phone && (
            <p data-name="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        
        <div data-name="form-group" className="mb-6">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In*</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md form-input bg-white ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={submitting}
          >
            <option value="default" disabled>Select a service</option>
            <option value="bookkeeping">Bookkeeping</option>
            <option value="tax-preparation">Tax Preparation</option>
            <option value="payroll">Payroll Management</option>
            <option value="consulting">Financial Consulting</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p data-name="service-error" className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>
        
        <div data-name="form-group" className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md form-input"
            placeholder="Tell us about your needs..."
            disabled={submitting}
          ></textarea>
        </div>
        
        <button
          data-name="submit-button"
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          disabled={submitting}
        >
          {submitting ? (
            <div data-name="loading-spinner" className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </div>
          ) : (
            'Submit Inquiry'
          )}
        </button>
        
        <p data-name="form-disclaimer" className="text-gray-500 text-sm mt-4">
          * Required fields. By submitting this form, you agree to our privacy policy.
        </p>
      </form>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    reportError(error);
    return null;
  }
}

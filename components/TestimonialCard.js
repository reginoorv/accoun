function TestimonialCard({ quote, name, position, company }) {
  try {
    return (
      <div 
        data-name="testimonial-card"
        className="testimonial-card bg-white rounded-lg shadow-md p-6 flex flex-col"
      >
        <div data-name="testimonial-quote" className="mb-4">
          <i className="fas fa-quote-left text-blue-300 text-2xl mb-2"></i>
          <p className="text-gray-700">{quote}</p>
        </div>
        <div data-name="testimonial-author" className="mt-auto">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TestimonialCard component error:', error);
    reportError(error);
    return null;
  }
}

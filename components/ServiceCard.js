function ServiceCard({ icon, title, description }) {
  try {
    return (
      <div 
        data-name="service-card"
        className="service-card bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
      >
        <div 
          data-name="service-icon"
          className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4"
        >
          <i className={`${icon} text-2xl`}></i>
        </div>
        <h3 
          data-name="service-title"
          className="text-xl font-semibold text-gray-800 mb-3"
        >
          {title}
        </h3>
        <p 
          data-name="service-description"
          className="text-gray-600"
        >
          {description}
        </p>
      </div>
    );
  } catch (error) {
    console.error('ServiceCard component error:', error);
    reportError(error);
    return null;
  }
}

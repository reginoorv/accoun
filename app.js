function App() {
  try {
    React.useEffect(() => {
      // Intersection Observer for fade-in animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      // Apply to all sections that should fade in
      document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-fade-in');
        observer.observe(section);
      });
      
      // Clean up observer on unmount
      return () => {
        document.querySelectorAll('section').forEach(section => {
          observer.unobserve(section);
        });
      };
    }, []);
    
    return (
      <div data-name="app" className="min-h-screen flex flex-col">
        <Header />
        <main data-name="main-content">
          <HeroSection />
          <ServicesSection />
          <WhyChooseUs />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
    return null;
  }
}

// Initialize the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// Global error reporting function (used by components)
function reportError(error) {
  // In a production app, you might send this to an error tracking service
  console.error('Application error:', error);
  
  // You could also display a user-friendly error message
  const errorMessage = document.createElement('div');
  errorMessage.className = 'fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded';
  errorMessage.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline"> Something went wrong. Please try again later.</span>
  `;
  document.body.appendChild(errorMessage);
  
  // Remove the error message after 5 seconds
  setTimeout(() => {
    if (document.body.contains(errorMessage)) {
      document.body.removeChild(errorMessage);
    }
  }, 5000);
  
  return null;
}

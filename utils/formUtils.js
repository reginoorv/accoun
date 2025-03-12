function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return re.test(String(phone));
}

function validateFormFields(fields) {
  const errors = {};
  
  if (!fields.name || fields.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  if (!fields.email || fields.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!validateEmail(fields.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (fields.phone && fields.phone.trim() !== '' && !validatePhone(fields.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (!fields.service || fields.service === 'default') {
    errors.service = 'Please select a service';
  }
  
  return errors;
}

function handleFormSubmission(formData, setSubmitting, setSubmitted, setErrors) {
  setSubmitting(true);
  
  // Simulating API call with timeout
  setTimeout(() => {
    try {
      // Form validation
      const validationErrors = validateFormFields(formData);
      
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setSubmitting(false);
        return;
      }
      
      // In a real application, you would send the data to your backend here
      console.log('Form submitted successfully with data:', formData);
      
      // Reset form state
      setSubmitted(true);
      setSubmitting(false);
      setErrors({});
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'An error occurred. Please try again.' });
      setSubmitting(false);
    }
  }, 1000);
}

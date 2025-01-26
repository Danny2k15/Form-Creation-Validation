 document.addEventListener('DOMContentLoaded', function() {
    // Form Selection
    const form = document.getElementById('registration-form');
    
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
      // Prevent the form from submitting to the server
      event.preventDefault();
      
      // Additional client-side validation and feedback logic can go here
      console.log("Form submission prevented.");
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Form Selection
    const form = document.getElementById('registration-form');
    
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
      // Prevent the form from submitting to the server
      event.preventDefault();
      
      // Select input fields and trim whitespace
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
      // Initialize validation status and messages array
      let isValid = true;
      const messages = [];
      
      // Username Validation
      if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.');
      }
      
      // Email Validation
      if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Please enter a valid email address.');
      }
      
      // Password Validation
      if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long.');
      }
      
      // Handle validation feedback
      if (isValid) {
        feedbackDiv.textContent = 'Form submitted successfully!';
        feedbackDiv.style.color = 'green';
      } else {
        feedbackDiv.textContent = messages.join(' ');
        feedbackDiv.style.color = 'red';
      }
      
      // Optionally, you can log the validation status and messages
      console.log('Validation Status:', isValid);
      console.log('Validation Messages:', messages);
    });
  });
  function updateFeedback(isValid, messages) {
    const feedbackDiv = document.getElementById("feedbackDiv");
    
    // Make the feedbackDiv visible
    feedbackDiv.style.display = "block";
    
    if (isValid) {
        // Set success message and styling
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    } else {
        // Join messages with <br> and set error styling
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
    }
  }
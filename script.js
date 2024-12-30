function toggleMenu() {
	const navItems = document.querySelector('.nav-items');
	navItems.classList.toggle('show');
}

document.getElementById('enquiryForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Get error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Validate fields
  let isValid = true;

  if (name === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  if (email === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  // If valid, submit form (replace alert with actual submission logic)
  if (isValid) {
    alert('Form submitted successfully!');
    // Here, you can use AJAX or fetch to send data to the backend
    document.getElementById('enquiryForm').reset();
  }
});

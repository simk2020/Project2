
const loginFormHandler = async (event) => {
    console.log("login form handler being used")
      event.preventDefault();
      const email = document.querySelector('#email-login').value.trim();
      const password = document.querySelector('#password-login').value.trim();
      console.log("email")
      if (email && password) {
        console.log()
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/home');
        } else {
          document.location.replace('/home');
          alert('Failed to log in.');
        }
      }
    };




document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);


document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

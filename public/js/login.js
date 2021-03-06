
const loginFormHandler = async (event) => {
  console.log("login form handler being used")
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log("email")
  if (email && password) {
    console.log()
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('You have failed to Register');
    }
  }
};


const signupFormHandler = async (event) => {
  console.log("signup form handler being used")
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const name = document.querySelector('#name-signup').value.trim();
  if (username && email && password && name) {
    console.log("the username, password, name, and email saved for signup")
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, name }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
      console.log("Success!")
    } else {
      console.log(response)
      alert('You Are Now Signed Up, Please Go to Log In Screen ');
    }
  }
};


const loginform = document.querySelector('.login');
if (loginform) loginform.addEventListener('click', loginFormHandler);

const signupForm = document.querySelector('.signup');
if (signupForm) signupForm.addEventListener('click', signupFormHandler);

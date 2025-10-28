document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let isValid = true;
      emailError.textContent = '';
      passwordError.textContent = '';
      emailInput.classList.remove('invalid');
      passwordInput.classList.remove('invalid');
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailInput.classList.add('invalid');
        isValid = false;
      }
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        passwordInput.classList.add('invalid');
        isValid = false;
      }
      if (!isValid) return;
      const session = {
        token: 'fake-jwt-token-for-hng-task-twig',
        user: { name: 'Ahmad Taiwo', email: emailInput.value },
        expiresAt: new Date().getTime() + 3600 * 1000,
      };
      localStorage.setItem('ticketapp_session', JSON.stringify(session));
      window.location.href = 'dashboard.html';
    });
  }

  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const fullNameError = document.getElementById('fullName-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      let isValid = true;
      fullNameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';
      fullNameInput.classList.remove('invalid');
      emailInput.classList.remove('invalid');
      passwordInput.classList.remove('invalid');

      if (fullNameInput.value.trim() === '') {
        fullNameError.textContent = 'Full name is required.';
        fullNameInput.classList.add('invalid');
        isValid = false;
      }
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailInput.classList.add('invalid');
        isValid = false;
      } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('invalid');
        isValid = false;
      }

      if (passwordInput.value.trim().length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordInput.classList.add('invalid');
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      const session = {
        token: 'fake-jwt-token-for-hng-task-twig-signup',
        user: { name: fullNameInput.value, email: emailInput.value },
        expiresAt: new Date().getTime() + 3600 * 1000,
      };
      localStorage.setItem('ticketapp_session', JSON.stringify(session));

      window.location.href = 'dashboard.html';
     });
    }
})
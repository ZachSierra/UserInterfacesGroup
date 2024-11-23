//This file is used to handle the registration of a new user

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', handleRegister);
});

function handleRegister(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const retypePassword = document.getElementById('retypePassword').value.trim();

    if (username === '' || password === '') {
        // Show error if fields are empty
        const errorMessage = document.getElementById('register-error-message');
        errorMessage.textContent = 'Username and Password cannot be empty.';
        errorMessage.style.display = 'block';
        return;
    }
    if (username.length <= 6){
        const errorMessage = document.getElementById('register-error-message');
        errorMessage.textContent = 'Username must be more than 6 characters';
        errorMessage.style.display = 'block';
        return;
    }
    if (!(password === retypePassword)){
        const errorMessage = document.getElementById('register-error-message');
        errorMessage.textContent = 'Passwords do not match';
        errorMessage.style.display = 'block';
        return;
    }
    if (email === ''){
        const errorMessage = document.getElementById('register-error-message');
        errorMessage.textContent = 'Email cannot be empty';
        errorMessage.style.display = 'block';
        return;
    }

    // Save the user data in localStorage (for basic functionality)
    const users = JSON.parse(localStorage.getItem('users')) || {}; // Retrieve existing users
    if (users[username]) {
        // Check if the username is already taken
        const errorMessage = document.getElementById('register-error-message');
        errorMessage.textContent = 'Username is already taken.';
        errorMessage.style.display = 'block';
    } else {
        // Register the new user
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage

        // Redirect to login page
        window.location.href = './login.html';
    }
}


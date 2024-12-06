//This file is used to handle the registration of a new user
import {createUser, getUsers} from "./API.js";

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', handleRegister);
});

async function handleRegister(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const email = document.getElementById('registerEmail').value.trim();

    if (username === '' || password === '') {
        // Show error if fields are empty
        const errorMessage = document.getElementById('register-error-message');
        errorMessage.textContent = 'Username and Password cannot be empty.';
        errorMessage.style.display = 'block';
        return;
    }

    const data = await getUsers();

    const userData = data.filter((user) => user.username === username);

    // Save the user data in localStorage (for basic functionality)
    //const users = JSON.parse(localStorage.getItem('users')) || {}; // Retrieve existing users
    if (userData.length > 0 ) {
        // Check if the username is already taken
        const errorMessage = document.getElementById('register-error-message');
        errorMessage.textContent = 'Username is already taken.';
        errorMessage.style.display = 'block';
    } else {

        const res = await createUser(username, password, email); // Create the user in the database
        console.log(res);
        // Register the new user
        //users[username] = password;
        //localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage

        // Redirect to login page
        window.location.href = './login.html';
    }
}


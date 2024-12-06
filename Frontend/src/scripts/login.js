import { getUsers } from "./API.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
});

async function handleLogin(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const username = document.getElementById('userName').value.trim();
    const password = document.getElementById('passWord').value.trim();

    const data = await getUsers();

    const userData = data.filter((user) => user.username === username);
    const user = userData[0];

    console.log(user);

    if (user.username === username && user.password === password) {
        localStorage.setItem('currentUser', user.UserId);
        // Redirect to index.html if credentials are correct
        window.location.href = './index.html';
    } else {
        // Show error message if credentials are invalid
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
}

const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    window.location.href = './account.html';
}



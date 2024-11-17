document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
});

function handleLogin(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const username = document.getElementById('userName').value.trim();
    const password = document.getElementById('passWord').value.trim();

    // Retrieve the stored users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Validate the user
    if (users[username] && users[username] === password) {
        // Redirect to index.html if credentials are correct
        window.location.href = 'index.html';
    } else {
        // Show error message if credentials are invalid
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
}

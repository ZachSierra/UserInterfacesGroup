const url = 'http://ec2-18-227-140-139.us-east-2.compute.amazonaws.com:5000/';

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
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirect to index.html if credentials are correct
        window.location.href = 'index.html';
    } else {
        // Show error message if credentials are invalid
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }

    /**
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
        **/
}

async function getUsers(){
    try {
        const response = await fetch(url + 'users');
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const data = json.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

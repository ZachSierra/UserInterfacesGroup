const url = 'http://ec2-18-116-45-57.us-east-2.compute.amazonaws.com:5000/';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('submitButton');
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
        setCookie('currentUser', user.UserId, 1);
        // Redirect to index.html if credentials are correct
        window.location.href = 'index.html';
    } else {
        // Show error message if credentials are invalid
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
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

const currentUser = getCookie('currentUser');

if (currentUser !== ''){
    window.location.href = './account.html';
}
getUsers();

function setCookie(cname, cvalue, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}
//returns the cvalue of the cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteCookie(cname){
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

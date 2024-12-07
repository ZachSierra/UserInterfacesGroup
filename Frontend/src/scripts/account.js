async function getAccount(id){
    const url = 'http://ec2-18-116-45-57.us-east-2.compute.amazonaws.com:5000/';
    try {
        const response = await fetch(url + 'users/' + id);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const data = json.data[0];
        console.log(data);
        document.getElementById('userName').innerText = data.username;
        document.getElementById('email').innerText = data.email;
        document.getElementById('password').innerText = data.password;

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function handleSignOut(){
    localStorage.removeItem('currentUser');
    window.location.href = './login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const signOutButton = document.getElementById('signout');
    signOutButton.addEventListener('submit', handleSignOut);
});

const currentUser = localStorage.getItem('currentUser');
console.log(currentUser);

if (!currentUser) {
    window.location.href = './login.html';
}else {
    getAccount(currentUser);
}




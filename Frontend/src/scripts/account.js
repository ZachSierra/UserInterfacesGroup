async function getAccount(id){
    const url = 'https://ec2-18-116-45-57.us-east-2.compute.amazonaws.com:5000/';
    try {
        const response = await fetch(url + 'users/' + id);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const data = json.data[0];
        console.log(json);
        document.getElementById('userName').innerText = 'Username: '+ data.username;
        document.getElementById('email').innerText = 'Email: ' + data.email;
        document.getElementById('password').innerText = 'Password' + data.password;

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function handleSignOut(){
    setCookie('currentUser', '', 0);
    window.location.href = 'login.html';
}

function setCookie(cname, cvalue, days) {
    const d = new Date();
    console.log(d.getTime());
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

document.addEventListener('DOMContentLoaded', () => {
    const signOutButton = document.getElementById('signout');
    signOutButton.addEventListener('submit', handleSignOut);
});

const currentUser = getCookie('currentUser');
console.log(currentUser);
if (currentUser === '') {
    window.location.href = 'login.html';
}
else{
    getAccount(currentUser);
}



async function getAccount(){
    const url = 'http://ec2-18-227-140-139.us-east-2.compute.amazonaws.com:5000/';
    try {
        const response = await fetch(url + 'users/1');
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

getAccount();
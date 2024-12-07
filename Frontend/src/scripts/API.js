const url = 'http://ec2-18-116-45-57.us-east-2.compute.amazonaws.com:5000/';
async function getUsers(){
    try {
        const response = await fetch(url + 'users');
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const data = json.data;
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function getUser(id){
    try {
        const response = await fetch(url + 'users/' + id);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.data[0];
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function createUser(username, password, email){
    try {
        const response = await fetch(url + 'users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password, email: email})
        });
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.description;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function getPlantProfiles(){
    try{
        const reponse = await fetch(url + 'plantprofiles');
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function getPlantProfile(id){
    try {
        const response = await fetch(url + 'plantprofiles/' + id);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.data[0];
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function searchPlantProfile(search){
    try {
        const response = await fetch(url + 'plantprofiles/search/' + search);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function getGardenById(UserId){
    try {
        const response = await fetch(url + 'garden/' + UserId);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function deleteGarden(UserId, Plant_id){
    try {
        const response = await fetch(url + 'garden', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({UserId: UserId, Plant_id: Plant_id})
        });
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.description;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
async function createGarden(UserId, Plant_id){
    try {
        const response = await fetch(url + 'garden', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({UserId: UserId, Plant_id: Plant_id})
        });
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json.description;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

export { getUsers, getUser, createUser, getPlantProfiles, getPlantProfile, searchPlantProfile, getGardenById, deleteGarden, createGarden };

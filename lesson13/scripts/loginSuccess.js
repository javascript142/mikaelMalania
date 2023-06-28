let sessionToken = sessionStorage.getItem('sessionToken');
let usersData = localStorage.getItem('usersData');
usersData = JSON.parse(usersData);

let welcomeMessage = document.createElement('h3');

let loggedInUserData = {};

let documentCookie = document.cookie;

if (documentCookie.length > 0) {
    let indexOfEqualSign = documentCookie.indexOf('=');
    sessionToken = documentCookie.slice(indexOfEqualSign + 1);
}

for (let user of usersData) {
    if (user.sessionToken === sessionToken) {
        loggedInUserData = user;
    }
}

// if (Object.keys(loggedInUserData).length === 0) {
//     window.location.href = 'loginFailed.html';
// }

welcomeMessage.innerHTML = `Welcome ${loggedInUserData.firstName}! with surname ${loggedInUserData.lastName}`;

document.body.appendChild(welcomeMessage);
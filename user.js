

function getIdFromLocation() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id;
}

async function fetchUser(id) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
}

function paintUserToDom(user) {
    const divElement = document.getElementById('user-section');

    const spanElement = document.createElement('span');


    const nameElement = document.createElement('h2');
    nameElement.className = 'user-name';
    nameElement.innerText = `${user.name} (Works at ${user.company.name})`;

    const userNameElement = document.createElement('h4');
    userNameElement.className = 'user-username';
    userNameElement.innerText = ` @${user.username}`;

    spanElement.appendChild(nameElement);
    spanElement.appendChild(userNameElement);
    divElement.appendChild(spanElement);

    const emailElement = document.createElement('p');
    emailElement.innerText = `Email: ${user.email}, Phone: ${user.phone}`;
    divElement.appendChild(emailElement)

    const websiteElement = document.createElement('p');
    websiteElement.innerText = user.website;
    divElement.appendChild(websiteElement)

    const addressElement = document.createElement('p');
    const {suite, street, city, zipcode} = user.address;
    addressElement.innerText = `${suite}, ${street}, ${city} ${zipcode}`;
    divElement.appendChild(addressElement);
}

async function  getUser() {
    const id  = getIdFromLocation();
    const user = await fetchUser(id);
    paintUserToDom(user);
}

getUser();
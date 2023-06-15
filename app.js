console.log('Hello world');

const HyderabadTourism = [
    {
        title: 'Private Hyderabad tour in car with guide to experience its glorious heritage',
        rating: 5,
        numberOfPeopleReviewed: 63,
        pricing: 8017,
        pricingUnit: 'adult',
        imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8e/b9/14/caption.jpg?w=600&h=600&s=1"
    },
    {
        title: 'World heritage Ramappa temple & Kohinoor diamond tour from Hyderabad by car',
        rating: 5,
        numberOfPeopleReviewed: 9,
        pricing: 13502,
        pricingUnit: 'adult',
        imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/88/f8/6a/caption.jpg?w=600&h=600&s=1"
    },
    {
        title: 'Full day tour of Hyderabad with Nizam Museum',
        numberOfPeopleReviewed: 0,
        pricing: 13562,
        pricingUnit: 'adult',
        imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a1/c7/23/caption.jpg?w=600&h=600&s=1"
    },
    {
        title: 'Half day tour Hyderabad including Mecca Masjid',
        numberOfPeopleReviewed: 0,
        pricing: 8579,
        pricingUnit: 'adult',
        imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a1/c6/a6/caption.jpg?w=600&h=600&s=1"
    },
    {
        title: 'Full Day Sightseeing Tour of Hyderabad',
        rating: 4,
        numberOfPeopleReviewed: 80,
        pricing: 10970,
        pricingUnit: 'group',
        imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/e8/df/a4/caption.jpg?w=600&h=600&s=1"
    },
    {
        title: 'Day Trip to Taj Mahal and Agra from Hyderabad with both side Commercial Flights',
        rating: 4,
        numberOfPeopleReviewed: 22,
        pricing: 34093,
        pricingUnit: 'adult',
        imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f0/df/4c/caption.jpg?w=600&h=600&s=1"
    },
    
]

function generateSingleTourItem(tourItem) {
    const divElement = document.createElement('div');
    divElement.className = 'tour';
    
    const imgElement = document.createElement('img');
    imgElement.className = 'tour-image';
    imgElement.src = tourItem.imgSrc;
    imgElement.width = "300";

    const titleElement = document.createElement('p');
    titleElement.className = "tour-title";
    titleElement.innerText = tourItem.title;

    const reviewsElement = document.createElement('p');
    reviewsElement.className = "tour-reviews";
    if (tourItem.numberOfPeopleReviewed) {
        let rating = '';
        for (let i =0; i < tourItem.rating; i++) {
            rating += "⭐";
        }
        rating += ` ${tourItem.numberOfPeopleReviewed}`
        reviewsElement.innerText = rating;
    } else {
        reviewsElement.innerText = "0 reviews"
    }

    const pricingElement = document.createElement('p');
    pricingElement.className = "tour-pricing";
    pricingElement.innerText = `from ₹${tourItem.pricing} per ${tourItem.pricingUnit}`

    divElement.appendChild(imgElement);
    divElement.appendChild( titleElement);
    divElement.appendChild(reviewsElement);
    divElement.appendChild(pricingElement);
    return divElement;
}

function getWaysToTourHyderabad() {
    const waysToTourList = document.getElementById("tour-list");
    HyderabadTourism.forEach(tourItem => {
        const item = generateSingleTourItem(tourItem)
        waysToTourList.appendChild(item);
    });
}

function renderUser(userItem) {
    const userElement = document.createElement('a');
    userElement.className = 'user';
    userElement.href = `/users.html?id=${userItem.id}`

    const nameElement = document.createElement('h2');
    nameElement.innerText = userItem.name;
    nameElement.className="user-title";
    userElement.appendChild(nameElement);

    const userNameElement = document.createElement('p');
    userNameElement.innerText = userItem.username;
    nameElement.className="user-subtitle";
    userElement.appendChild(userNameElement);

    return userElement;
}

function fetchUsers() {
    const userListElement = document.getElementById('user-list');
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        const { data } = res;
        const nameCards = data.map(item => ({ id: item.id, name: item.name, username: item.username }));
        nameCards.forEach(card => userListElement.appendChild(renderUser(card)))
    })
}

getWaysToTourHyderabad();
fetchUsers();
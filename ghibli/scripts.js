const app = document.getElementById('root');

// Create an image
const logo = document.createElement('img');
// Assign the path to the image
logo.src = 'logo.png';

// Create a div container to hold the cards
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Append the logo and the container that was created
app.appendChild(logo);
app.appendChild(container);

// Create  request variable and assign a new XMLHTTPRequest object to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create an h1 and set it to the title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // Create a p and set it to the film's description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); // Limit to 300 characters
            p.textContent = `${movie.description}...`; // End with ellipses

            // Append the cards to container element
            container.appendChild(card);

            // Each card has an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        console.log('error');
    }
}

// Send request
request.send();
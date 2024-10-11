// Get the URL parameters
const params = new URLSearchParams(window.location.search);
const movieId = params.get('movieId');

// Sample movie data (this could also come from an API or database)
const movies = {
    1: {
        title: "Dr. Strange In The Multiverse Of Madness",
        image: "./img/m1.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    2: {
        title: "Pathaan",
        image: "./img/m2.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    3: {
        title: "Batman vs Superman",
        image: "./img/m3.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    4: {
        title: "John Wick 2",
        image: "./img/m4.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    5: {
        title: "Aquaman",
        image: "./img/m5.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    6: {
        title: "Black Panther",
        image: "./img/m6.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    7: {
        title: "Uncharted",
        image: "./img/m7.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    8: {
        title: "Brahmastra",
        image: "./img/m8.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    9: {
        title: "Mortal Engines",
        image: "./img/m9.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    10: {
        title: "Underworld: Blood Wars",
        image: "./img/m10.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    11: {
        title: "Guardians of the Galaxy",
        image: "./img/home1.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    12: {
        title: "Thor: Love and Thunder",
        image: "./img/home2.png",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    13: {
        title: "Spider-Man No Way Home",
        image: "./img/home3.jpg",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    },
    14: {
        title: "Avengers: End Game",
        image: "./img/home4.png",
        theaters: ["senipolicebsr","abc"],
        time: ["6am", "10am", "1pm", "5pm", "11pm"]
    }
};

// Get the movie details container
const movieDetails = document.querySelector('.movie-details');

// Check if movieId is valid and display movie details
if (movieId && movies[movieId]) {
    const movie = movies[movieId];
    movieDetails.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h1>${movie.title}</h1>
        <div>
        <label for="theater-select">Select Theater:</label>
        <select id="theater-select" onchange="populateTimes()">
        </select>
        </div>
        <div>
        <label for="time-select">Select Show Time:</label>
        <select id="time-select">
        </select>
        </div>
        <div>
        <a href="booking.html?movieId=${movieId}">
            <button id="book-now">Book Now</button>
        </a></div>
    `;
    const theaterSelect = document.getElementById('theater-select');
    const timeSelect = document.getElementById('time-select');

    movie.theaters.forEach(theater => {
        const option = document.createElement('option');
        option.value = theater;
        option.textContent = theater;
        theaterSelect.appendChild(option);
    });

    // Populate time dropdown
    movie.time.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    document.getElementById('book-now').addEventListener('click', () => {
        const selectedTheater = theaterSelect.value;
        const selectedTime = timeSelect.value;
        if (selectedTheater && selectedTime) {
            const bookNowLink = `booking.html?movieId=${movieId}&theater=${encodeURIComponent(selectedTheater)}&time=${encodeURIComponent(selectedTime)}`;
            console.log('url:',bookNowLink);
            document.getElementById('book-now').parentElement.href = bookNowLink;
        } else {
            alert('Please select a theater and time.');
        }
    });

} else {
    movieDetails.innerHTML = '<p>Movie not found.</p>';
}
// Total cost initialization
let totalCost = 0; // Initialize total cost

// Function to toggle seat selection
function toggleSeat(seat) {
    if (!seat.classList.contains('booked')) { // Check if the seat is booked
        seat.classList.toggle('selected'); // Toggle selection
        
        // Update the total cost
        const seatPrice = 10; // Assuming a fixed seat price of $10
        if (seat.classList.contains('selected')) {
            totalCost += seatPrice; // Add price to total cost
        } else {
            totalCost -= seatPrice; // Subtract price from total cost
        }
        document.getElementById('totalCost').innerText = `$${totalCost.toFixed(2)}`; // Update total cost display
    }
}

// Function to populate time options based on selected theater
function populateTimes() {
    const selectedTheater = theaterSelect.value;
    // Here, you could filter times based on the selected theater if needed
    // Currently just showing all times for simplicity
}



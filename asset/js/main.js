
var Persons;

// Fetch JSON data
fetch("./asset/js/MOCK_DATA.json")
    .then(res => res.json())
    .then(data => {
        Persons = data;
        profile(Persons); // Render cards with the fetched data
        console.log(data);
    })
    .catch(err => console.error("Error fetching data:", err));

const cardContainer = document.getElementById('card-container');

// Function to  cards

function profile(data) {
    data.forEach(person => {
        const card = document.createElement('div');
        card.className = 'col '; // Bootstrap column for 3 cards per row
        card.innerHTML = `
          <div class="card border border-dark border-2 shadow m-4 p-4">
            <img src="${person.profile}" class="card-img-top">
            <div class="card-body text-center">
              <h5 class="card-title fs-3">${person.first_name} ${person.last_name}</h5>
              <p class="card-text"><strong>Email:</strong> ${person.email}</p>
              <p class="card-text"><strong>Gender:</strong> ${person.gender}</p>
            </div>
          </div>
        `;
        cardContainer.appendChild(card);
    });
}
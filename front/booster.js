const booster_booster = document.querySelector(".booster_cards");

const booster = async () => {
    async function fetchCards() {
        const url = "https://hp-api.lainocs.fr/characters";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const cards = await fetchCards();

    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * cards.length);
        const card = cards[random];
        booster_booster.innerHTML += `
        <div class="card new-card">
            <img src="${card.image}" alt="${card.name}">
            <h2>${card.name}</h2>
            <p>${card.house}</p>
            <a class="card-details-link" href='details.html?id=${card.slug}'>Détails</a>
        </div>`;
    }

    document.querySelector(".booster").style.display = "block";
};

document.querySelector(".booster-button").addEventListener("click", () => {
    booster();
});

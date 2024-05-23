// const booster_booster = document.querySelector(".booster_cards")

// const booster = async () => {
//     async function fetchCards() {
//         const url = "https://hp-api.lainocs.fr/characters";
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     }

//     for (i=0; i<5; i++) {
//         let random = Math.floor(Math.random() * 30)
//         const cards = await fetchCards();
//         const card = cards[random]
//         booster_booster.innerHTML += `
//         <div class="booster_card">
//             <h2>${card.name}</h2>
//             <img src="${card.image}" alt="">
//           </div>`
//     }
// }

// booster()

const booster_booster = document.querySelector(".booster_cards");

const booster = async () => {
    async function fetchCards() {
        const url = "https://hp-api.lainocs.fr/characters";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const cards = await fetchCards();  // Récupérer toutes les cartes une seule fois

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

    // Afficher la section des cartes une fois qu'elles ont été générées
    document.querySelector(".booster").style.display = "block";
};

// Écouteur d'événement pour le clic sur le bouton
document.querySelector(".booster-button").addEventListener("click", () => {
    booster(); // Appel de la fonction pour afficher les cartes
});

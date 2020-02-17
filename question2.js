
const api = "https://api.rawg.io/api/games"

fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGames(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createGames(json) {
    const data = json.results;
    const results = document.querySelector(".results")

    let html = "";

    for (let i = 0; i < data.length; i++) {
        let object = data[i];
        
        html += `<div class="game">
                <h2>${object.name}</h2>
                <img src="${object.background_image}" alt="Name of game">
                </div>
                `;
    };
    results.innerHTML = html;

}
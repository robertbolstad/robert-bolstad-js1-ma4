
const apiUrl = "https://api.rawg.io/api/games/4200";

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
        
    });

function createGameDetails(json) {

    const name = document.querySelector("h1")
    name.innerHTML = json.name;

    const image = document.querySelector(".image");
    image.style.backgroundImage = `url("${json.background_image}")`;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;

}


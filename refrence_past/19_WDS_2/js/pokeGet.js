/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Standards 2 (WDSII)
   
   */

/* Modal New */

(function modalAction() {

    const modal = document.querySelector("#mascotModal");

    document.querySelector("#mascotButton").addEventListener("click", function() {
        modal.style.display = "block";
    });

    document.querySelector(".modalClose").addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

})();


(function mascotSave() {

    const pokeAPI = {
        url: 'https://pokeapi.co/api/v2',
        type: 'pokemon'
    };

    const { url, type } = pokeAPI;
    const pokeGetApi = `${url}/${type}/`;

    const pokeStorage = localStorage.getItem("1");

    const pokeGetApiUrl = `${pokeGetApi}${pokeStorage}`;

    fetch(pokeGetApiUrl)
        .then(data => data.json())
        .then(pokemon => {
            generateHTML(pokemon);
        })
        .catch(error => {});

    const generateHTML = (data) => {

        const html = `<img src=${data.sprites.front_default} height="175" width="175">`

        const pokemonDiv = document.querySelector('footer');
        pokemonDiv.innerHTML = html;

    };

    // document.querySelector('#mascotModal').onkeypress = console.log('this doesn\'t work');

    document.querySelector('#mascotModal').disabled = true;

    document.querySelector("#pokeSubmitBtn").addEventListener('click', function() {
        const pokemonChoice = document.querySelector("#inputPokemon");
        const pokemonLower = pokemonChoice.value.toLowerCase();
        localStorage.setItem(1, pokemonLower);
        window.location.reload();
    });
})();
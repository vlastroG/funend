const inputElement = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const nameElement = document.getElementById("pokemon-name");
const idElement = document.getElementById("pokemon-id");
const weightElement = document.getElementById("weight");
const heightElement = document.getElementById("height");
const typesElement = document.getElementById("types");
const hpElement = document.getElementById("hp");
const attackElement = document.getElementById("attack");
const defenseElement = document.getElementById("defense");
const specialAttackElement = document.getElementById("special-attack");
const specialDefenseElement = document.getElementById("special-defense");
const speedElement = document.getElementById("speed");

const clearData = () => {
    nameElement.textContent = "";
    idElement.textContent = "";
    weightElement.textContent = "";
    heightElement.textContent = "";
    typesElement.innerHTML = "";
    hpElement.textContent = "";
    attackElement.textContent = "";
    defenseElement.textContent = "";
    specialAttackElement.textContent = "";
    specialDefenseElement.textContent = "";
    speedElement.textContent = "";
}

const searchPokemonById = (id) => {

}

const searchPokemonByName = (str) => {

}

const displayPokemonData = (pokemon) => {
    if (pokemon !== undefined) {
        alert("Pokémon not found");
    } else {
        clearData();
    }
}

const searchPokemon = (str) => {
    const id = parseInt(str);
    if (!isNaN(id)) {
        displayPokemonData(searchPokemonById());
    } else {
        displayPokemonData(searchPokemonByName(str));
    }
}

searchBtn.addEventListener("click", () => {
    console.log("clicked");
    if (!inputElement.value) {
        alert("Please enter Pokémon name or ID");
        clearData();
        return;
    }
    const str = inputElement.value.trim();
    searchPokemon(str);
});
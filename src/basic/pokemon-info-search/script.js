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
const spriteElement = document.getElementById("sprite");

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
    spriteElement.style.display = "none";
}

const displayPokemonData = (pokemon) => {
    if (pokemon !== undefined) {
        nameElement.textContent = pokemon.name.toUpperCase();
        idElement.textContent = pokemon.id;
        weightElement.textContent = pokemon.weight;
        heightElement.textContent = pokemon.height;
        typesElement.innerHTML = pokemon.types.map(t => `<div class="type-item">${t.type.name.toUpperCase()}</div>`).join("");
        const stats = Object.fromEntries(pokemon.stats.map(t => [t.stat.name, t.base_stat]));
        hpElement.textContent = stats.hp;
        attackElement.textContent = stats.attack;
        defenseElement.textContent = stats.defense;
        specialAttackElement.textContent = stats["special-attack"];
        specialDefenseElement.textContent = stats["special-defense"];
        speedElement.textContent = stats.speed;
        spriteElement.style.display = "block";
        spriteElement.setAttribute("src", pokemon.sprites.front_default);
    } else {
        alert("Pokémon not found");
        clearData();
    }
}

const searchPokemon = async (str) => {
    const id = parseInt(str);
    let searchStr;
    if (!isNaN(id)) {
        searchStr = id;
    } else {
        searchStr = str
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9\- ]/g, '')
            .split(' ')
            .map(s => s.trim())
            .filter(s => s !== '')
            .join('-');
    }
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchStr}`);
        const pokemon = await res.json();
        displayPokemonData(pokemon);
    } catch (err) {
        displayPokemonData(undefined);
    }
}

searchBtn.addEventListener("click", () => {
    if (!inputElement.value) {
        alert("Please enter Pokémon name or ID");
        clearData();
        return;
    }
    const str = inputElement.value.trim();
    searchPokemon(str);
});
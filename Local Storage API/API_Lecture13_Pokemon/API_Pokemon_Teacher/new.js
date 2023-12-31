const poke_container = document.getElementById("poke-container");
const pokemon_count = 500;


const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);
// console.log(main_types);

const fetchPokemon = async () => {
  for (let i = 1; i < pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
};

function showData(data) {
  let pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = data.name[0].toUpperCase() + data.name.slice(1);


  const id = data.id.toString().padStart(3, "0");

  
  const typeMap = data.types.map((type) => type.type.name);

  const type = main_types.find((type1) => typeMap.indexOf(type1) > -1);

  // console.log(type);
  const color = colors[type];
  console.log(color);

  pokemonEl.style.backgroundColor = color;

  const pokeInnerHtml = `<div class="img-container">
  <img src="${data.sprites.front_shiny}" alt="">
</div>

<div class="info">
  <span class="number">#${id}</span>
  <h3 class="name">${name}</h3>
  <small class="type">Type: <span>${type}</span> </small>
</div>`;
  pokemonEl.innerHTML = pokeInnerHtml;
  poke_container.append(pokemonEl);
}

fetchPokemon();

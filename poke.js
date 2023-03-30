const cardsContainer = document.querySelector("#cards-container");
const getPikachuButton = document.querySelector("#get-pikachu-button");

async function fetchPikachu() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
  const data = await response.json();
  const card = createCard(data);
  cardsContainer.appendChild(card);
}

function createCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  image.src = pokemon.sprites.front_default;
  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = pokemon.name;
  const info = document.createElement("div");
  info.classList.add("info");
  const type = document.createElement("p");
  type.classList.add("type");
  type.textContent = `Type: ${pokemon.types[0].type.name}`;

  info.appendChild(type);
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(info);
  return card;
}

getPikachuButton.addEventListener("click", fetchPikachu);

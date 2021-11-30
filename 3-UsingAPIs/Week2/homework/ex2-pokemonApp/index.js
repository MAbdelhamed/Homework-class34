'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
let pokemonList = [];

async function fetchData(url) {
  const response = await fetch(url);
  return new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response.json());
    } else {
      reject(new Error(`Failed to fetch`));
    }
  });
}
function setOption(optionName, optionValue = optionName) {
  const selectList = document.getElementById('selectList');
  const selectOption = document.createElement('option');
  selectOption.text = optionName;
  selectOption.value = optionValue;
  selectList.add(selectOption);
}

function fetchAndPopulatePokemons(dataFetched) {
  pokemonList = dataFetched.results;

  setOption('pokemon', '');
  for (const pokemon of pokemonList) {
    setOption(pokemon.name);
  }
}

async function fetchImage(pokemonName) {
  const pokemonObj = pokemonList.filter((pokemon) => {
    if (pokemon.name === pokemonName) return pokemon;
  });
  try {
    const dataFetched = await fetchData(pokemonObj[0].url);
    const pokemonImage = document.getElementById('pokemonImage');
    pokemonImage.src = dataFetched.sprites.front_default;
    pokemonImage.alt = pokemonName;
  } catch (error) {
    console.log(error);
  }
}

function setStructure() {
  const container = document.createElement('div');
  const selectList = document.createElement('select');
  const pokemonImage = document.createElement('img');
  const getPokemonBtn = document.createElement('button');
  container.id = 'mainContainer';
  pokemonImage.id = 'pokemonImage';
  selectList.id = 'selectList';
  getPokemonBtn.id = 'getPokemonBtn';
  getPokemonBtn.textContent = 'Get Pokemon';
  getPokemonBtn.style.marginBottom = '20px';
  container.appendChild(getPokemonBtn);
  container.appendChild(selectList);
  container.appendChild(pokemonImage);
  container.style.width = 'fit-content';
  container.style.display = 'flex';

  container.style.flexDirection = 'column';
  document.body.appendChild(container);
}

async function main() {
  setStructure();
  const selectList = document.getElementById('selectList');
  const getPokemonBtn = document.getElementById('getPokemonBtn');
  try {
    const dataFetched = await fetchData(
      `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
    );
    getPokemonBtn.addEventListener(
      'click',
      fetchAndPopulatePokemons(dataFetched)
    );
  } catch (error) {
    console.log(error);
  }

  selectList.addEventListener('change', () => {
    fetchImage(selectList.value);
  });
}

main();

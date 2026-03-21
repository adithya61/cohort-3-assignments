function renderTypes(types) {
  let categorySelect = document.querySelector("#category");

  for (const type of types) {
    let optionType = document.createElement("option");
    optionType.value = type;
    optionType.textContent = type;

    categorySelect.appendChild(optionType);
  }
}

async function loadTypes() {
  let typesArray = [];

  let types = await fetch("https://pokeapi.co/api/v2/type/");
  let typesData = await types.json();
  let typeIterable = typesData["results"];

  for (const type of typeIterable) {
    typesArray.push(type["name"]);
  }

  renderTypes(typesArray);
}

function renderCollection(collection) {
  let collectionContainer = document.querySelector("#collection");
  collectionContainer.innerHTML = "";

  for (const card of collection) {
    let collectionCard = document.createElement("div");
    collectionCard.classList.add("collectionCard");

    let name = document.createElement("div");
    name.classList.add("name");
    name.textContent = card["name"];

    let type = document.createElement("div");
    type.classList.add("type");
    type.textContent = card["type"];

    let img = document.createElement("img");
    img.src = card["img"];

    collectionCard.appendChild(name);
    collectionCard.appendChild(type);
    collectionCard.appendChild(img);

    collectionContainer.appendChild(collectionCard);
  }
}

async function getPokemons(numberOfCards, categoryName) {
  let response = await fetch(`https://pokeapi.co/api/v2/type/${categoryName}/`);
  let pokemons = await response.json();
  let requiredPokemons = pokemons["pokemon"].slice(0, numberOfCards);
  //   response structure:
  //   console.log(requiredPokemons[0]["pokemon"]["url"]);

  let responses = requiredPokemons.map((item) => {
    return fetch(item["pokemon"]["url"]).then((res) => res.json());
  });

  let result = await Promise.all(responses).then((res) => res);

  let collection = [];

  for (const res of result) {
    let tempTypes = "";
    for (const type of res["types"]) {
      tempTypes += type.type.name;
      res["types"].length > 1 ? (tempTypes += " / ") : null;
    }

    res["types"].length > 1 ? (tempTypes = tempTypes.slice(0, -2)) : null;

    collection.push({
      name: res["name"],
      img: res["sprites"]["front_default"],
      type: tempTypes,
    });
  }

  renderCollection(collection);
}

let generate = document.querySelector("#generateCollection");
generate.addEventListener("click", () => {
  let numberOfCards = document.querySelector("#numberCards").value;
  let categoryName = document.querySelector("#category").value;

  getPokemons(numberOfCards, categoryName);
});

loadTypes();

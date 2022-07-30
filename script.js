let pokemon1;
let pokemon2;
let pokemon3;
let pokemon4;
let pokemon5;
let pokemon6;
let starter;
const getMon = async () => {
  try {

    const randomNum = Math.floor(Math.random() * 150);
    console.log(randomNum)
    response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    console.log(response)
    let pokemonType = response.data.types[0].type["name"];
    console.log(pokemonType)
    starter = pokemonType;
    let firstSprite = response.data.sprites.front_default;
    pokemon1 = firstSprite
    console.log(pokemon1)
  } catch (e) {
    console.log(e);
  }
}; 
getMon();
const poke2 = async () => {
  try {
    const randomNum = Math.floor(Math.random() * 150);
    console.log(randomNum);
    response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    console.log(response);
    let secondSprite = response.data.sprites.front_default;
    pokemon2 = secondSprite;
    console.log(pokemon2)
  } catch (e) {
    console.log(e);
  }
};
poke2()
const poke3 = async () => {
  try {
    const randomNum = Math.floor(Math.random() * 150);
    console.log(randomNum);
    response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    console.log(response);
    let thirdSprite = response.data.sprites.front_default;
    pokemon3 = thirdSprite;
    console.log(pokemon2)
  } catch (e) {
    console.log(e);
  }
};
poke3()
const poke4 = async () => {
  try {
    const randomNum = Math.floor(Math.random() * 150);
    console.log(randomNum);
    response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    console.log(response);
    let fourthSprite = response.data.sprites.front_default;
    pokemon4 = fourthSprite;
    console.log(pokemon4)
  } catch (e) {
    console.log(e);
  }
};
poke4()
const poke5 = async () => {
  try {
    const randomNum = Math.floor(Math.random() * 150);
    console.log(randomNum);
    response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    console.log(response);
    let fifthSprite = response.data.sprites.front_default;
    pokemon5 = fifthSprite;
    console.log(pokemon5)
  } catch (e) {
    console.log(e);
  }
};
poke5()
const poke6 = async () => {
  try {
    const randomNum = Math.floor(Math.random() * 150);
    console.log(randomNum);
    response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    console.log(response);
    let sixthSprite = response.data.sprites.front_default;
    pokemon6 = sixthSprite;
    console.log(pokemon6)
  } catch (e) {
    console.log(e);
  }
};
poke6()
function draw() {
  let divOne= document.createElement('div')
//   divOne.innerHTML = "This is a newly created div!";
    divOne.className = "pokemon";
    divOne.style.display = ('flex')
    divOne.style.width = ('100px')
    divOne.style.height = ('100px')
    divOne.style.backgroundColor = ('white')
    divOne.style.borderRadius = ('20%')
    divOne.style.backgroundImage = `url('${pokemon1}')`
    console.log(pokemon1)
  
  let divTwo = document.createElement("div");
//   divTwo.innerHTML = "This is a newly created div!";
  divTwo.className = "pokemon";
    divTwo.style.display = "flex";
    divTwo.style.width = "100px";
    divTwo.style.height = "100px";
    divTwo.style.backgroundColor = "white";
    divTwo.style.borderRadius = "20%";
    divTwo.style.backgroundImage = `url('${pokemon2}')`;
    console.log(pokemon1);

  let divThree = document.createElement("div");
//   divThree.innerHTML = "This is a newly created div!";
  divThree.className = "pokemon";
      divThree.style.display = "flex";
      divThree.style.width = "100px";
      divThree.style.height = "100px";
      divThree.style.backgroundColor = "white";
      divThree.style.borderRadius = "20%";
      divThree.style.backgroundImage = `url('${pokemon3}')`;
      console.log(pokemon3);

  let divFour = document.createElement("div");
//   divFour.innerHTML = "This is a newly created div!";
  divFour.className = "pokemon";
        divFour.style.display = "flex";
        divFour.style.width = "100px";
        divFour.style.height = "100px";
        divFour.style.backgroundColor = "white";
        divFour.style.borderRadius = "20%";
        divFour.style.backgroundImage = `url('${pokemon4}')`;
        console.log(pokemon4);
  let divFive = document.createElement("div");
//   divFive.innerHTML = "This is a newly created div!"
  divFive.className = "pokemon";
        divFive.style.display = "flex";
        divFive.style.width = "100px";
        divFive.style.height = "100px";
        divFive.style.backgroundColor = "white";
        divFive.style.borderRadius = "20%";
        divFive.style.backgroundImage = `url('${pokemon5}')`;
        console.log(pokemon5);
  let divSix = document.createElement("div");
//   divSix.innerHTML = "This is a newly created div!";
  divSix.className = "pokemon";
        divSix.style.display = "flex";
        divSix.style.width = "100px";
        divSix.style.height = "100px";
        divSix.style.backgroundColor = "white";
        divSix.style.borderRadius = "20%";
        divSix.style.backgroundImage = `url('${pokemon6}')`;
        console.log(pokemon6);

  let parentDiv = document.getElementById("pokemon-go");
  if (parentDiv) {
    parentDiv.appendChild(divOne); // this attaches our new div element into the DOM, by nesting it under an existing element
    parentDiv.appendChild(divTwo); // this attaches our new div element into the DOM, by nesting it under an existing element
    parentDiv.appendChild(divThree); // this attaches our new div element into the DOM, by nesting it under an existing element
    parentDiv.appendChild(divFour); // this attaches our new div element into the DOM, by nesting it under an existing element
    parentDiv.appendChild(divFive); // this attaches our new div element into the DOM, by nesting it under an existing element
    parentDiv.appendChild(divSix); // this attaches our new div element into the DOM, by nesting it under an existing element
    }
  drawButton.removeEventListener("click", draw);
}
drawButton = document.getElementById("poke-click");

drawButton.addEventListener("click", draw);

function getRandomInt() {
  return Math.floor(Math.random() * 151);
}


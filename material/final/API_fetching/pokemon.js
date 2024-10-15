'use strict';

//the fetch method is based on promises so it'll resolve or reject

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){ throw new Error("could not fetch resource");}
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const imgElement = document.getElementById("pokemonSprite");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){ throw new Error("could not fetch resource");}
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        console.log(pokemonSprite);
        imgElement.src = String(pokemonSprite);
        imgElement.style.display = "block";
        
    } catch(error){
        console.error(error);
    }
}
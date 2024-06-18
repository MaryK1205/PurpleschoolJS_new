'use strict'

fetch('https://pokeapi.co/api/v2/pokemon/ditto').
    then((responce) => responce.json()).
    then((responce) => {
        return fetch(responce.abilities[0].ability.url)
    })
    .
    then((responce) => responce.json()).
    then((data) => {
        console.log(data.effect_entries[1].effect);
    }
    )



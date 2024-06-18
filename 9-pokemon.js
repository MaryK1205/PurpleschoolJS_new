'use strict'

const request = new XMLHttpRequest();
request.open('Get', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
    const abilities = (JSON.parse(this.responseText)).abilities[0].ability.url;
    //  console.log(abilities);

    const request = new XMLHttpRequest();
    request.open('Get', 'https://pokeapi.co/api/v2/ability/7/');
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText).effect_entries[1].effect;
        console.log(data);
    })


})


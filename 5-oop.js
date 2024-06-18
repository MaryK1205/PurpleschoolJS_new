const HeroFilm = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
    this.speek = function () {
        console.log(language, name);
    }
}

const Ork = new HeroFilm('111', 'Вася', 'rus');
const Elf = new HeroFilm('444', 'Федя', 'eng');
Ork.weapon = 'weapon';
HeroFilm.prototype.beat = function () {
    console.log('Удар');
}
HeroFilm.prototype.spell = function () {
    console.log('Заклинание');
    HeroFilm.prototype.creatspell = function () {

    }
}

console.log(Ork);
console.log(Elf);
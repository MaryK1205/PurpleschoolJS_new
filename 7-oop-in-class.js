class HeroFilm {
    race;
    name;
    language;
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speek() {
        console.log(`${this.name} - ${this.language}`);
    }

}

class Ork extends HeroFilm {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }
    speek1() {
        console.log(`${this.name} - ${this.language}-${this.weapon}`);

    }


}
class Elf extends HeroFilm {
    constructor(race, name, language, spell) {
        super(race, name, language, spell)
        this.spell = spell;
    }
    speek2() {
        console.log(`${this.name} - ${this.language}-${this.spell}`);


    }

}


const ork_ = new Ork('111', 'Вася', 'rus', 10);
const elf_ = new Elf('444', 'Федя', 'eng', 'spell');

ork_.speek();
ork_.speek1();
elf_.speek2();

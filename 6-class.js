class Car {
    #make;
    #model;
    #run;
    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }
    set run(run) {
        this.#run = run;
    }
    get run() {
        return this.#run;
    }
    info() {
        console.log(this.#make, this.#model, this.#run);
    }

}

const car = new Car('11', '222', '333');
console.log(car);
console.log(car.info());

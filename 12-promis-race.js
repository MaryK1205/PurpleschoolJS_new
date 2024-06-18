'use strict'

const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 100)
);


function race(promises) {
    return new Promise((resolve, reject) => promises.forEach(element => element.then(resolve, reject)))
}

race([firstPromise, secondPromise, thirdPromise]).then(res => console.log(res));








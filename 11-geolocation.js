'use strict'

function position() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const log = position.coords.longitude;

                resolve({ lat, log });
                return ({ lat, log });

            });
        }
        else {
            reject(new Error('ERROR'));
        }


    })

}
position()
    .then(data => console.log(data))
    .catch(error => console.error(error));










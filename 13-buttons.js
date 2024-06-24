'use strict'

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 5; i++) {
    const el = document.createElement('button');
    el.innerHTML = 'Нажми меня';
    wrapper.append(el);
}


let j = 0;
const num = document.createElement('div');
wrapper.append(num);

wrapper.children[0].classList = ('active')

const buttonClick = function (e) {
    for (const el of [...wrapper.children]) {
        if (el.className.includes('active')) {
            el.classList.remove('active')
            el.innerHTML = 'Нажми меня';
        }
    }
    j++;
    e.target.innerHTML = 'Я нажата';
    e.target.classList.add('active');
    num.innerHTML = `Счетчик = ${j}`;

}

wrapper.addEventListener('click', buttonClick);







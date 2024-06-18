const arrObj = [{ id: 1, name: 'Bacя' },
{ id: 2, name: 'Петя' },
{ id: 1, name: 'Вася' },
{ id: 1, name: 'Bacя' },
{ id: 2, name: 'Петя' },
{ id: 2, name: 'Петя' }]

const arrUnic = [];
const unique = [...new Set(arrObj.map(e => e.id))];
for (i = 0; i < unique.length; i++) {
    arrUnic.push(arrObj.find(elem => elem.id == unique[i]))

}
console.log(arrUnic);
const array = {
    D4: 4,
    D6: 6,
    D8: 8,
    D10: 10,
    D12: 12,
    D16: 16,
    D2: 20
};
function dice(array, key) {
    return (Math.floor(Math.random() * Number(array[key]) + 1));
};
console.log(dice(array, 'D12'));

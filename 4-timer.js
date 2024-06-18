setInterval(function timer() {
    let lastDayOfYear = new Date(2024, 12, 31);
    let now = new Date();
    let month = 11 - now.getMonth();
    let firstDayNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    let timeToEndCurrentMonth = Number(firstDayNextMonth) - Number(now);
    let days = Math.floor(timeToEndCurrentMonth / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeToEndCurrentMonth / (1000 * 60 * 60) - days * 24));
    let minuts = Math.floor((timeToEndCurrentMonth / (1000 * 60) - days * 24 * 60 - hours * 60));
    let sec = Math.floor((timeToEndCurrentMonth / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minuts * 60));
    if (month < 10) month = '0' + month;
    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minuts < 10) minuts = '0' + minuts;
    if (sec < 10) sec = '0' + sec;
    clock.textContent = `${month} месяцев, ${days} дней, ${hours} часов, ${minuts} минут, ${sec} секунд`;
    //setInterval(clock.textContent, 1000);

}, 1000);



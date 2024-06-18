let age = new Date(2000, 12, 31);
let ageRegiter = new Date(2014, 12, 31);
function isAge(age, ageRegiter) {
    if ((ageRegiter.getFullYear() - age.getFullYear()) > 14) {
        return true;
    }
    else if (((ageRegiter.getFullYear() - age.getFullYear()) == 14) && (age.getMonth() <= ageRegiter.getMonth()) && (age.getDate() <= ageRegiter.getDate())) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isAge(age, ageRegiter));
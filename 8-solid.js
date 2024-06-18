class Billing {
    amount = 100;
    value = 1;
    calculateTotal() {
        return this.amount * this.value;
    }
}
class FixedBilling extends Billing {

}
class HourBilling extends Billing {
    constructor(numHour) {
        super();
        this.value = numHour;

    }

}
class ItemBilling extends Billing {
    constructor(numItem) {
        super();
        this.value = numItem;
    }

}
const nnn = new FixedBilling();
console.log(nnn.calculateTotal());
const mmm = new HourBilling(40);
console.log(mmm.calculateTotal());
const lll = new ItemBilling(30);
console.log(lll.calculateTotal());



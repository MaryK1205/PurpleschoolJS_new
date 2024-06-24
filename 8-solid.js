class Billing {
    amount = 100;
}
class FixedBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }

}
class HourBilling extends Billing {
    constructor(numHour) {
        super();
        this.numHour = numHour;

    }
    calculateTotal() {
        return this.amount * this.numHour;
    }
}
class ItemBilling extends Billing {
    constructor(numItem) {
        super();
        this.numItem = numItem;
    }
    calculateTotal() {
        return this.amount * this.numItem;
    }
}
const nnn = new FixedBilling();
console.log(nnn.calculateTotal());
const mmm = new HourBilling(40);
console.log(mmm.calculateTotal());
const lll = new ItemBilling(30);
console.log(lll.calculateTotal());

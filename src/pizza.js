export class Pizza {
    constructor(size, price) {
        this.price = price;
        this.size = size;
    }

    get unitPrice() {
        return this.price / (Math.PI * Math.pow(this.size, 2));
    }

    get pizzaPerMoney() {
        return 1 / this.unitPrice;
    }

    valueOf() {
        return this.unitPrice();
    }

    get prettySize() {
        return this.size + "\"";
    }

    _formatPrice(_price) {
        return "$" + _price.toFixed(2);
    }

    get prettyPrice() {
        return this._formatPrice(this.price);
    }

    get prettyUnitPrice() {
        return this._formatPrice(this.unitPrice) + "/in²";
    }

    get prettyPizzaPerMoney() {
        return this.pizzaPerMoney.toFixed(2) + " in² per dollar";
    }
}
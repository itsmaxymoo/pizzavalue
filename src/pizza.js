/*
 * Class to represent a pizza entry
 */

export class Pizza {
    constructor(size, price) {
        this.price = price;
        this.size = size;
    }

    get prettySize() {
        return this.size + "\"";
    }

    get prettyPrice() {
        return this._formatPrice(this.price);
    }

    get unitPrice() {
        return this.price / (Math.PI * Math.pow(this.size, 2));
    }

    get prettyUnitPrice() {
        return this._formatPrice(this.unitPrice) + "/in²";
    }

    get pizzaPerMoney() {
        return 1 / this.unitPrice;
    }

    get prettyPizzaPerMoney() {
        return this.pizzaPerMoney.toFixed(2) + " in² per dollar";
    }

    _formatPrice(_price) {
        return "$" + _price.toFixed(2);
    }

    // Function to compare pizzas, supply to an array's sort() function
    static compare(a, b) {
        let x = a.unitPrice, y = b.unitPrice;

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    }
}
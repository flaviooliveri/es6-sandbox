export default class Address {

    constructor(street, num) {
        this.street = street;
        this.num = num;
    }

    show() {
        return `${this.num} ${this.street}`;
    }

}
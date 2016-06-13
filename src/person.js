import chalk from "chalk";
import Address from "./address";

export default class Person {

    constructor(name) {
        this.name = name;
        this.addressList = [];
    }

    showPersonalInformation() {
        console.log(`My name is ${chalk.blue(this.name)}`);
        console.log("My address(es):");
        this.addressList.forEach(address => {
           console.log(`${chalk.red(address.show())}`);
        });
    }

    addAddress(street, num) {
        let address = new Address(street, num);
        this.addressList.push(address);
    }

    addressCount() {
        return this.addressList.length;
    }
    
}


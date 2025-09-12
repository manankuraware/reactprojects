"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    name = "Mk";
    price = 120000;
    category = "digital";
}
let d1 = new Device();
let d2 = new Device();
class BottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    changePrice() {
        // this.price=90   /cant chanege readonly values
    }
}
const b1 = new BottleMaker("Million", 1200);
// protected is same as private but we can acces protected variable and method inside inherited class
class HomeMaker {
    name = "Milton";
}
class KitchenHomeMaker extends HomeMaker {
    appliance = "Gas";
    changeName() {
        this.name = "Some Other Name";
    }
}
let dw = new KitchenHomeMaker();
dw.changeName();
//# sourceMappingURL=classLearn.js.map
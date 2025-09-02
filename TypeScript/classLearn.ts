class Device {
    name = "Mk";
    price = 120000;
    category = "digital"
}

let d1 = new Device();
let d2 = new Device();

class BottleMaker {
    constructor(public name: string, public price: number) { }
}
const b1 = new BottleMaker("Million", 1200);
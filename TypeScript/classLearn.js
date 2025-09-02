var Device = /** @class */ (function () {
    function Device() {
        this.name = "Mk";
        this.price = 120000;
        this.category = "digital";
    }
    return Device;
}());
var d1 = new Device();
var d2 = new Device();
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Million", 1200);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// protected is same as private but we can acces protected variable and method inside inherited class
var HomeMaker = /** @class */ (function () {
    function HomeMaker() {
        this.name = "Milton";
    }
    return HomeMaker;
}());
var KitchenHomeMaker = /** @class */ (function (_super) {
    __extends(KitchenHomeMaker, _super);
    function KitchenHomeMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appliance = "Gas";
        return _this;
    }
    KitchenHomeMaker.prototype.changeName = function () {
        this.name = "Some Other Name";
    };
    return KitchenHomeMaker;
}(HomeMaker));
var dw = new KitchenHomeMaker();
dw.changeName();

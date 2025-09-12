"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class person {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set setname(value) {
        this._name = value;
    }
}
let u1 = new person("Manan", 24);
// u1.name;
// u1.setname = "Mannara"
//# sourceMappingURL=getseter.js.map
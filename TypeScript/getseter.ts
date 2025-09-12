class person {
    constructor(public _name: String, public age: Number) { }
    get name() {
        return this._name;
    }
    set setname(value: string) {
        this._name = value;
    }
}

let u1 = new person("Manan", 24);

// u1.name;
// u1.setname = "Mannara"
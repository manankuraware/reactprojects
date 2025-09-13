function abcd(name, cb) {
    cb(name);
}
abcd("Manan", function (value) {
    console.log(value);
});
// rest operator
function friends() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
friends("messi", "meymar", "suarez");

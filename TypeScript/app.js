"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 10;
a = "Manan";
let b = 20;
// b = "manan2" error
let arr = [1, 2, 3, { name: "manan" }, { name: 12 }];
typeof (arr);
// tuples: having fix size and fix datatype for indexs eg: 
const arr2 = ["Mnanan", 33];
// enumeration 
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super admin";
})(UserRoles || (UserRoles = {}));
UserRoles.SUPER_ADMIN;
// unkown type: when constion run on type 
let a2;
a2 = 12;
a2 = "Manan2";
if (typeof a2 === "string")
    a2.toLocaleUpperCase();
//# sourceMappingURL=app.js.map
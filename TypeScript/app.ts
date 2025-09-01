let a: any = 10;
a = "Manan"

let b: number = 20;
// b = "manan2" error

let arr = [1, 2, 3, { name: "manan" }, { name: 12 }]
typeof (arr)

// tuples: having fix size and fix datatype for indexs eg: 
const arr2: [string, number] = ["Mnanan", 33];

// enumeration 
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super admin"
}

UserRoles.SUPER_ADMIN


// unkown type: when constion run on type 
let a2: unknown;

a2 = 12;
a2 = "Manan2"

if (typeof a2 === "string") a2.toLocaleUpperCase()

// interface
interface User {
    name: string,
    email: string,
    password: string,
    gender?: string
}
// here we defined stucture of object using interface if we create object of this structure we need to defined this structue except with ? its optional
function abcd(obj: User) { }
abcd({ name: "Manan", email: "sxyboy@gmail.com", password: "fu", gender: "male" })

interface Admin extends User {
    admin: boolean
}

// inhertance in interface 

function interf(obj: Admin) {
    obj.admin = false;
}
interf({ name: "Manan", email: "sxyboy@gmail.com", password: "fu", gender: "male", admin: true });


// type alias : defining custom type 
type val = string | number | null;
let b2: val;
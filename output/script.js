const country = "I love Bangladesh";
console.log(country);
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
let fruits = ['apple', 'banana'];
fruits.push("pineapple");
fruits.push('10');
let mixed = [10, "a", false, {}];
mixed.push(200);
let a;
let b;
b = 34;
let mixedArray = [];
mixedArray.push(100);
// mixedArray.push(false) //get error
let obj;
obj = {
    name: "Test"
};
let objKnown;
objKnown = {
    name: "test",
    age: 15
};
let arrayObj;
arrayObj = [1, 2, 3, 4];
let anyTypeVar;
anyTypeVar = 10;
anyTypeVar = "test";
let MyFuncType;
const myFunc = (a, b, c, o = "mr junior") => {
    console.log(c);
    console.log(o);
    console.log(`hello ${a} and ${b}`);
    return a + b + c + o;
};
myFunc("mr khan", "mrs khan");
myFunc("mr khan", "mrs khan", "mr junior");
const userDeatils = (id, user) => {
    console.log(`User id is ${id}, and name is ${user.name} and age is ${user.age}`);
};
let add;
import { Player } from "./classes/player.js";
const masrafi = new Player("Masrafi", 40, "Bangladesh");
const shakib = new Player("Shakib", 40, "Bangladesh");
masrafi.play();
shakib.play();
const players = [];
players.push(shakib);
players.push(masrafi);
console.log(players);
masrafi.name = "Shakib";
// masrafi.age = 20; cannot possible because of private
// masrafi.country = "test" // cannot possible beacuse of readonly
// Generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "masrafi",
    age: 40
});
user.name;
user.age;
// Enum
var statusEnum;
(function (statusEnum) {
    statusEnum[statusEnum["SUCCESS"] = 0] = "SUCCESS";
    statusEnum[statusEnum["FAILED"] = 1] = "FAILED";
})(statusEnum || (statusEnum = {}));
;
const response1 = {
    status: 200,
    type: statusEnum.SUCCESS,
    data: {}
};
console.log(response1);
// Tuples
let t = [3, "hello", { p: 3 }];
let tvar = [4, 'world', { t: 1 }];
tvar.push();

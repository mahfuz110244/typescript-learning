const country = "I love Bangladesh";
console.log(country)

function sum(a : number, b : number){
    return a+b;
}

console.log(sum(10, 20));

let fruits = ['apple', 'banana'];
fruits.push("pineapple");
fruits.push('10');

let mixed = [10, "a", false, {}]
mixed.push(200);

let a: string;
let b: number;
b = 34

let mixedArray: (string | number)[] = [];
mixedArray.push(100);
// mixedArray.push(false) //get error

let obj: object;
obj = {
 name : "Test"
}

let objKnown: {
    name: string,
    age: number
}
objKnown = {
    name: "test",
    age: 15
}

let arrayObj: object;
arrayObj = [1,2,3,4];

let anyTypeVar: any;
anyTypeVar = 10;
anyTypeVar = "test";

let MyFuncType: Function;

const myFunc = (a: string, b: string, c?: string, o: string = "mr junior"): string => {
    console.log(c);
    console.log(o);
    console.log(`hello ${a} and ${b}`);
    return a + b + c + o;
}
myFunc("mr khan", "mrs khan");
myFunc("mr khan", "mrs khan", "mr junior");

type stringOrNumber = string | number;
type userType = { name: string, age: number};
 
const userDeatils = (id: stringOrNumber, user: userType) => {
    console.log(`User id is ${id}, and name is ${user.name} and age is ${user.age}`);
}

let add: (a: number, y: number) => number;


import { Player} from "./classes/player.js"; 


const masrafi = new Player("Masrafi", 40, "Bangladesh");
const shakib = new Player("Shakib", 40, "Bangladesh");
masrafi.play();
shakib.play();

const players: Player[] = [];
players.push(shakib);
players.push(masrafi);
console.log(players)
masrafi.name = "Shakib";
// masrafi.age = 20; cannot possible because of private
// masrafi.country = "test" // cannot possible beacuse of readonly

// Generics
const addID = <T extends {
    name: string;
    age: number;
}> (obj: T) => {
    let id = Math.floor(Math.random() *100);
    return { ...obj, id};
};

let user = addID({
    name: "masrafi",
    age: 40
});
user.name;
user.age;

// Enum
enum statusEnum {
    SUCCESS,
    FAILED
}

interface APIResponse<T> {
    status: number,
    type: statusEnum,
    data: object;
};

const response1: APIResponse<string> = {
    status: 200,
    type: statusEnum.SUCCESS,
    data: {}
};
console.log(response1)

// Tuples
let t = [3, "hello", {p:3}];
let tvar: [number, string, object] = [4, 'world', {t: 1}]
tvar.push();



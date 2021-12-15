export class Player {
    // public name: string;
    // private age: number;
    // readonly country: string;

    // constructor(n: string, a: number, c:string) {
    //     this.name = n;
    //     this.age = a;
    //     this.country = c;
    // }

    // alternative of upper part
    constructor(
        public name: string,
        private age: number,
        readonly country: string,
    ){}

    play() {
        console.log(`${this.name} from ${this.country} is playing`)
    }
}
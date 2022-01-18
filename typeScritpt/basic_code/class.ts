// Class type
interface IUserr{
    name: string,
    getName(): string
}

class User implements IUserr{
    constructor(public name: string){}
    getName(): string {
        return this.name;
    }   
}

const neo= new User(`Neo`);
neo.getName(); // Neo


// 2
interface rCat{
    name: string
}
interface IrcatConstructor{
    new (name: string): rCat
}

class Cat implements rCat{
    constructor(public name: string) {}
}
function makeKitty(c: IrcatConstructor, n: string){
    return new c(n);
}
const kitty= makeKitty(Cat, `Lucy`);
console.log(kitty);

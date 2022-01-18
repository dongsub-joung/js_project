// Null Undefined 
// Null, Undefined: last type of all
let value_void: void= undefined;


// Void
// function return type declearing instread of undefined


// Never
function error(message: string): never {
    throw new Error(message);
}


// Intersection &


// Function
let myFunc: (arg1: number, arg2: number) => number;
myFunc= function(x,y){
    return x+y;
}


// inference
// Assertions // as


// Non-null // !
function fnE(x: number | null | undefined) {
    return x!.toFixed(2);
}
// DOM
document.querySelector('.menu-item')!.innerHTML;


// Guards
// `typeof`, `in` and `instanceof`
function isNumber(val: string | number): val is number {
    return typeof val === 'number';
}
function someFunc(val: string | number) {
    if (isNumber(val)) {
        val.toFixed(2);
        isNaN(val);
    } else {
        val.split('');
        val.toUpperCase();
        val.length;
    }
}


// interface
interface IUser {
    name: string,
    age: number,
    isAdult?: boolean // Optional property
}
  

// Readonly 
interface IUser {
    readonly name: string,
    age: number
}
let user: IUser = {
    name: 'Neo',
    age: 36
};
// user.name= 'Evan'

// Readonly utility
interface IUser {
    name: string,
    age: number
}
  let user: Readonly<IUser> = {
    name: 'Neo',
    age: 36
};

// const
let user = {
    name: 'Neo',
    age: 36
} as const;


// indexable types
// https://heropy.blog/2020/01/27/typescript/
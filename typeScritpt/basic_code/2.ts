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

// bool -> String
let value= ture;
console.log(typeof value);

value= String(value);
console.log(typeof value);


// String -> number
let str= `123`;
console.log(typeof str);

let num= Number(str);
console.log(typeof num);

// exception
alert( Boolean("0") ); // true
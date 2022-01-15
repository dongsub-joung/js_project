N= 43;

let a= 1;
let b= 17;
let n= Math.abs(a-b);

let result= (1 << (n-1) + (1 << (N-n-1)) - 1);

console.log(result);
this.x= 9;
const A= {
    x: 1,
    b: function () { return this.x; },
}
console.log(A.x);
console.log(A.b());
let indeed= A.b;
console.log(indeed());

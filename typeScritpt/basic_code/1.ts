// 1
console.log('typescript on nodeJS');

// 2
function add(a: number, b: number): number{
    return a+b;
}
let sum: number= add(1,2);
console.log(sum);

// 3
// let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
let array: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3];
let someArr: any[] = [0, 1, {}, [], 'str', false];
console.log(array);
console.log(someArr);

// 4
// let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];

// 5 tuple
let tuple: [string, number];
tuple = ['a', 1];
let user: [number, string, boolean] = [1234, 'HEROPY', true];

// 5-2
// allow .push() or .splice()
let users: Array<[number, string, boolean]>;
users = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];

// 6
type Result= {
    success: true,
    value: unknown,
} | {
    success: false,
    value: Error,
}

export default function getItems(user: IUser): Result{
    // Some
    if(id.isValid){
        return {
            success: true,
            value: ['Apple', 'Banna'],
        };
    } else {
        return {
            success: false,
            error: new Error(`Invalid uses.`)
        }
    }
}

// 7 object type
let obj: object = {};
let arr: object = [];
let func: object = function () {};
let nullValue: object = null;
let date: object = new Date();


let check: (remain: number, pre: number) => number;

let M= 10;
let N= 100;
let result: number= check(N,2);
console.log(result);

check= function (remain: number, pre: number): number{
    if (remain < 0)       {return 0;}
    else if (remain == 0) {return 1;}
    
    let cnt= 0;
    for (let i= pre; i<=M; i++){
        cnt += check(remain-i, i);
    }
    return cnt;
}
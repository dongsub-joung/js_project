const M: number= 10;
const N: number= 100;
let check: (remain: number, pre: number) => number;

check= function (remain: number, pre: number): number{
    if (remain < 0)       {return 0;}
    else if (remain == 0) {return 1;}
    
    let cnt= 0;
    for (let i= pre; i<=M; i++){
        cnt += check(remain-i, i);
    }
    return cnt;
}
console.log(check(N,2));
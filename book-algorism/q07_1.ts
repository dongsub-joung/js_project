const N= 15;
function nPr(n: number, r: number): number{
    let result= 1;
    for (let i =0; i<r; i++){
        result *= n-i;
    }
    return result;
}

let cnt= 0;
for(let i=1; i<N; i++){
    cnt += i * (N-i) * nPr(N, i-1);
}

console.log(cnt);
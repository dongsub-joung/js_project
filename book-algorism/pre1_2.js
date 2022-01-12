M = 10;
N = 100;

let memo= {};
function chk(remain, pre){
    let cnt = 0;

    if (memo[[remain, pre]]) {
        console.log(memo[[remain, pre]]);
        return memo [[remain, pre]];
    }
    if (remain < 0) return 0;
    if (remain == 0) return 1;
    for (let i = pre; i <= M; i++) {
      cnt += (remain - i, i);
    }
    return memo[[remain, pre]]= cnt;
}

result= chk(N,2);
console.log(result);
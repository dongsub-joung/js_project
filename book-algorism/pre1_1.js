M= 10;
N= 100;

function chk(remain, pre){
    if (remain < 0) {return 0;}
    else if (remain == 0) {return 1;}
    let cnt= 0;
    for (let i= pre; i<=M; i++){
        cnt += chk(remain-i, i);
    }
    return cnt;
}

result= chk(N,2);
console.log(result);
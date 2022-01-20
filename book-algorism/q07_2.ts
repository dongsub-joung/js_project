const N= 15;

// nP1= 1
let cnt= [1];
for(let i= 1; i<=N; i++){
    cnt[i]= 0;
    for (let j=0; j< i-2; j++){
        cnt[i-j-1]= cnt[i-j-2] *i;
    }
    cnt[1]= i-1;
}
let sum= 0;
for(let i=0; i<N; i++){
    sum += i*cnt[i];
}

console.log(sum);

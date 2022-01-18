N= 45;

function count(n){
    let coin= [10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1];
    let result= 0;
    for(let i=0; i< coin.length; i++){
        let cnt= Math.floor(n/coin[i]);
        n= n%coin[i];
        result += cnt;
    }
    
    return result;
}

row= new Array(N+1);
row[0]= 1;
for (let i =1; i< N; i++){
    row[i] = 0;
}
for (let i=0; i< N; i++){
    for(let j= i+1; j> 0; j--){
        row[j] += row[j-1];
    }
}

let total= 0;
for(let i=0; i<N+1; i++){
    total += count(row[i]);
}

console.log(total);
N = 456780;
let coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10];

// one by one
let used= [0, 0, 0, 0, 0, 0, 0, 0];
let rmain= N;

Array.prototype.sum= function(){
    let result= 0;
    this.forEach(function(i) { result += i; });
    return result;
}

// locating by one
for (let i= coins.length-1; i>=0; i--){
    if (remain>coins[i]){
        used[i]= 1;
        remain-= coins[i];
    }
}

for (let i=0; i<coins.length; i++){
    used[i] += Math.floor(remain / coins[i]);
    remain %= coins[i];
}

// readjusting for reducemant on count 
for (let i=0; i<coins.length; i++){
    if ((used[i] == 0) && (coins[i+1] * used[i+1] >= coins[i]) ){
        used[i]= 1;
        used[i+1] -= Math.floor(coins[i] / coins[i+1]);
    }
}

console.log(used.sum());
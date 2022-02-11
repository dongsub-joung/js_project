// prototype
Array.prototype.combination= function(n){
    let result= [];
    for (let i=0; i<= this.length-n; i++){
        if (n>1){
            let combi= this.slice(i+1).combination(n-1);
            for ( let j= 0; j< combi.length; j++){
                result.push([this[i]].concat(combi[j]));
            }
        } else {
            result.push[this[i]];
        }
    }
    return result;
}
Array.prototype.sum= function () {
    let result=0;
    this.forEach(function(i) { result += i; });
    return result;
}


// init
N = 456780;
var coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
var result = N;

for(let i= coins.length; i>= 1; i--){
    let coin= coins.combination(i);
    for (let j=0; j<coin.length; j++){
        let remain= N- coin[j].sum();
        if (remain < 0){
            continue;
        } 
        let cnt= coin[j].length;
        for (let c= 0; c<coin[j].length; c++){
            let r= Math.floor(remain / coin[i][c]);
            cnt += r;
            remain-= coin[j][c] *r;
        }
        result= Math.min(result, cnt);
    }
    if (result< N){ break; }
}

console.log(result);
M= 9;
N= 5;

Array.prototype.permutation= function(n) {
    let result= [];
    for (let i=0; i< this.length; i++){
        if (n>1){
            let remain= this.slice(0);
            remain.splice(i, 1);
            let permu= remain.permutation(n-1);
            for (let j=0; j<permu.length; j++){
                result.push([this[i]].concat(permu[j]));
            }
        } else {
            result.push([this[i]]);
        }
    }
    return result;
}

let temp= new Array(M-1);
for (let i= 1; i< M; i++){
    temp[i-1]= i+1;
}

let permu= temp.permutation(M-1);
let seq= [];
for (let i= 0; i< permu.length; i++){
    seq.push([1].concat(permu[i]));
}

log= [];
log.push(seq);
for (let i=0; i<N; i++){
    let s= [];
    for(let j=0; j<log[i].length; j++){
        for(let k= 1; j<M; k++){
            if (log[i][j][k] == k + 1) {
        
            temp = log[i][j].slice(0, k + 1).reverse();
            temp = temp.concat(log[i][j].slice(k + 1));
            s.push(temp);
        }
    }
    log.push(s);
}

console.log(log[n].length);
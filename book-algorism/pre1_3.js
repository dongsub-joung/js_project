M = 10;
N = 100;

let table= new Array(M+1);
for(let i=0; i<= M; i++){
    table[i]= new Array(N+1);
    for(let j =0; j<=N; j++){
        table[i][j]= 0;
    }
}

for(let i=0; i<=M; i++){
    table[i][0]= 1;
}

for(let i= 1; i<=M; i++){
    for(let j= 2; j<= N; j++){
        if ((i>=2) && (j>=1)){
            table[i][j]= table[i][j-i];
        } 
        if (i>2){
            table[i][j] += table[i-1][j];
        }
    }
}

let result= table[M][N];
console.log(result);
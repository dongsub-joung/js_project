N= 100;

let cnt= 0;

for(l=0; l<=N; l++){
    for(r= l; r<=N; r++){
        if (l> r-l){
            if(l != N-r) cnt++
        } else if (l < r-l){
            if( r-l != N-r ) cnt++
        } else {
            if(l<N-r) cnt++
        }
    }
}

console.log(cnt);
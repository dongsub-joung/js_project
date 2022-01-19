const W: number= 1000;
const NN: number= 20;
let cnt= 0;

function cut(w: number, h: number, n: number): boolean{
    if(w==h) return (n==0);
    if (w>h){
        let temp= w; 
        w= h;
        h= temp;
    }

    let r= h % w;
    let q= Math.floor(h/w);
    if( (n-q<0) || (r==0) ) return (n-q==0)
    else return cut(w,r,n-q);
}

for(let i= 1; i<=W; i++){
    for(let j= i; j<= W; j++){
        if (cut(i,j,NN)) cnt++
    }
}

console.log(cnt);

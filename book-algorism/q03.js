N= 12;

function conv(n,i,v,x){
    let result= '';

    if(n == 9){
        result += i+x;
    } else if (n == 4){
        result += i + v;
    } else {
        for(j= 0; j< Math.floor(n/5); j++){
            result += v;
        }
        
        n= n%5;

        for(j=0; j< n; j++){
            result += i;
        }
    }
    return result;
}

function roman(n){
    let m= Math.floor(n / 1000);
    n %= 1000;
    let c= Math.floor(n / 100);
    n %= 100;
    var x = Math.floor(n / 10);
    n %= 10;
    let result= 'M'.repeat(m);
    result += conv(c, 'C', 'D', 'M');
    result += conv(x, 'X', 'L', 'C');
    result += conv(n, 'I', 'V', 'X');
    return result;
}

let cnt= {};
for (index = 1; index < 4000; index++) {
    let len= roman(index).length;
    if(cnt[len]){
        cnt[len] += 1;
    } else {
        cnt[len] = 1;
    }
}

console.log(cnt[N]);
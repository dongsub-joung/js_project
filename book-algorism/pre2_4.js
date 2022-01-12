function nCr(n, r){
    let result= 1;
    for(let i= 1; i<=r; i++){
        result= result * (n-i +1) / i;
    }
    return result;
}
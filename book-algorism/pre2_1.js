function nPr(n, r){
    let result= 1;
    for (let i= n-r-1; i<=n; i++){
        result *= i;
    }
    return result;
}
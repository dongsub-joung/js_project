let memo= [1];

function factorial(n){
    if (memo[n]) return memo[n];
    return memo[n]= n*factorial(n-1);
}

function nCr(n, r){
    return factorial(n)  / (factorial(r) * factorial(n-r));
}
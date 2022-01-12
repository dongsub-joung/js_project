let memo= {};

function nCr(n, r){
    if (memo[[n, r]]) return memo[[n, r]]
    if ((r==0) || (r == n)) return 1;
    return memo[[n, r]] = nCr(n-1, r-1) + nCr(n-1, r)
}
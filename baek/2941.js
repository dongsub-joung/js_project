const fs= require("fs");
const input= (
    process.platform === "linux"
        ? fs. readFileSync("/dev/stdin").toString()
        : `ljes=njak`
).trim();


let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input){
    for (let alphabet of croatia){
        input= input.splite(alphabet).join("Q");
    }

    return input.length;
}

console.log(solution(input));
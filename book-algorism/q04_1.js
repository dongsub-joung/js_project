N= 30;

function check(num){
    let light= [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
    return light[Math.floor(num/10) + light[num&10]];
}

let cnt= 0;
for(let h=0; h<24; h++){
    for(let m=0; m<60; m++){
        for(let s=0; s<60; s++){
            if(check(h)+ check(m)+ check(s) == N){
                cnt++;
            }
        }
    }
}

console.log(cnt);
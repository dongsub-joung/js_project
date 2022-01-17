// A way saving Array 

N= 30;
function check(num){
    let light= [6,2,5,5,4,5,6,3,7,6];
    return light[Math.floor(num/10)] + light[num % 10];
    
}

let light= new Array(60);
for(let i=0; i< 60; i++){
    light[i]= check(i);
}

let cnt= 0;
for(let h=0; h< 24; h++){
    for(let m= 0; m<60; m++){
        for(let s= 0; s< 60; s++){
            if(light[h] + light[m] + light[s] == N){
                cnt++;
            }
        }
    }
}

console.log(cnt);
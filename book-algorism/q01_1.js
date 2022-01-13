N= 100;
let cnt= 0;
for(let rock= 0; rock<= N; rock++){
    for(let scissor= 0; scissor <= N-rock; scissor++){
        let paper= N-rock-scissor;

        if(rock>scissor){
            if(rock != paper) cnt++;
        } else if( rock < scissor){
            if(scissor != paper) cnt++
        } else{
            if(rock<paper) cnt++
        } 
    }
}

console.log(cnt);
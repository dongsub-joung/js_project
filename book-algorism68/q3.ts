const N= 100;
let card= [false];

for(let i=2; i<N; i++){
    let j= i-1;
    while (j< card.length){
        // not card[j]
        card[j] != card[j];
        j+=1;
    }

    for (let i =0; i<N-1; i++){
        if (!card[i]){
            console.log(i+1);
        }
    }
}
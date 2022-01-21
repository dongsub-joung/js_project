const N8= 8;

let jari= 1;
// 탐색해야 하는 최대 자릿수 확인
while(true){
    if(jari*Math.pow(N8-1, jari) < Math.pow(N8, jari)){
        break;
    }
    jari++;
}

let cnt8= 0;
for(let i= N8; i<Math.pow(N8,jari); i++){
    
    // N진수로 변환
    let value= i.toString(N8);
    let len= value.length;
    let sum= 0;
    for (let d= 0; d<len; d++){
        sum += Math.pow(parseInt(value[d], N8), len);
    }
    if (i == sum ){
        console.log(value);
        cnt++;
        if(cnt == N8) break; 
    }
}
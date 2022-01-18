let oper= ["+", "-", "*", "/", ""];

for (i= 1000; i< 10000; i++){
    let c= String(i);

    for(let j=0; j< oper.length; j++){
        for(let k=0; k<oper.length; k++){
            for(let l=0; l<oper.length; l++){
                let val= c.charAt(3) + oper[j] 
                    + c.charAt(2) + oper[k]
                    + c.charAt(1) + oper[l]
                    + c.charAt(0);
                if ( val.length > 4){
                    if(i==eval(val)){
                        console.log(val + "=" + i);
                    }
                }
            }
        }
    }
}
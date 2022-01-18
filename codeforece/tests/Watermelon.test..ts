function init(n: number): string{
  if(n <= 100){
    if( n%2 == 0){
      return `YES`;
    } else {
      return `NO`;
    }
  }
  return ``;
}

let input= 8;
let result= "YES";
if (init(8) == result){
  console.log("pass");
} else {
  console.log("Deny");
  
}
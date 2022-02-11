// Source remained 
// https://flaviocopes.com/debugging/

// console.log();
// console.dir();

// JSON.stringify()
// JSON.stringify(car, null, 2)

const inspect = (obj) => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`${prop}: ${obj[prop]}`)
      }
    }
  }
  
inspect(car)
// Code source
// https://medium.com/@bsalwiczek/4-most-important-features-coming-in-es2022-that-you-should-know-about-f7e18c1bff9b

// at()
const arr = [1,2,3,4]
let a= arr.at(-2) // 3

const str = "1234"
let b= str.at(-2) // '3'


// Error cause
try {
    doSomeComputationThatThrowAnError() 
} catch (error) {
    throw new Error('I am the result of another error', { cause: error })
}
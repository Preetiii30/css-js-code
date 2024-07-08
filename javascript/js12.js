// DATATYPE CONVERSION

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number (score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// it will give output NaN
// 33=number
// 33abc=NaN
// true= 1; false-0

let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=true
// 0=false
// ""=false
// "preeti"=true

// -------------------------------------------------------

// STACK AND HEAP IN JS
let myName = "Preeti"
let anotherName =myName
anotherName="Aira"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo= userOne

userTwo.email="me@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Stack = Primitive
// Heap = Non-Primitive

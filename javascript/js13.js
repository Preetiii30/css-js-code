// STRINGS IN JS

"hello"+"world"
// Hello world

const name="Preeti"
const age=22

console.log(name+age);
// we can also add something
console.log(name+"is"+age);
// but this is very old syntax, we dont use it now

console.log(`Hello, my name is ${name} and my age is ${age}`);
// this is called string interpolation, it is nothing but modern way of writing 
// benefits - can do many things on the go, like we can add something if we want to

const gameName=new String('Preeti-pm-pp')
// this is how we declare string
// if i copy paste same thing on console and ask for gameNmae it will give key value pairs like 0='P' and so on and length and many methods along with ... and here it is object

console.log(gameName[0])
// this is how we can access keys through key value pairs
// we can also access proto type
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0, 4)
console.log(newString);
// 4 index value will not be included it will give Pree, it will not obey negative values

const anotherString=gameName.slice(-6, 3)
console.log(anotherString);
// if we give any value in -, it will start backwards

const newStringOne="   Preeti    "
console.log(newStringOne);
// it will show spaces
// it will not
console.log(newStringOne.trim());
// use - if we make input form user might add extra spaces, sometimes we dont want spaces 

const url="https://google.com%20google"
// browser dont understand spaces so it will automatically fill this spaces with random thing like %20\
 console.log(url.replace('%20', '-'))
console.log(url.includes('Preeti'))
// if we want to find something, it will give True

console.log(gameName.split('-'));
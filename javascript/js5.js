console.log("we are learning js");

function intro(Name, greetText="Greeting from javascript"){
    // this is the default value 
    console.log(Name + " is last year engineeering student");
    console.log(greetText +" "+ Name);

}
function sum(a,b,c){
    let d=a+b+c;
    return d;
    // console.log("function is returned") unreachable code
}
let Name="Preeti";
let Name1="Anjali";
let Name2="Jeevisha";
let Name3="Kritika";
let greetText="Good morning";
intro(Name, greetText);
intro(Name1, greetText);
intro(Name2, greetText);
intro(Name3);
// let returnVal=greet(name3);
// console.log(returnVal);
let returnVal=sum(1,2,3);
console.log(returnVal);
// console.log(Name + " is last year engineeering student");
// console.log(Name1 + " is last year engineeering student");
// console.log(Name2 + " is last year engineeering student");
// console.log(Name3 + " is last year engineeering student");
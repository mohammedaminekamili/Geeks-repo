// Exercice 1
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// we will get an error because const can't be reassigned

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//we will get an error because const can't be reassigned


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// nothing change because the variable is declared in different scope
//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//nothing change because the variable is declared in different scope

// Exercice 2
const winBattle=()=>true

let experiencePoints=winBattle?10:1

console.log(experiencePoints)

// Exercice 3
const isString=x=> typeof(x)==="string"?true:false

//Exercice 4
const sum=(x,y)=>x+y
// Exercice 5
function toGramme(x){
return x*1000
}

let toGrammeEx=function (x){
    return x*1000
}
//function expression create anonymous functions and they are called by the name of the variable
let toGrammeOL=x=>x*1000

//Exercice 6

(function (job, location, partner, childrenNumber) {
    document.body.textContent =
      `You will be a ${job} in ${location}, and married to ${partner} with ${childrenNumber} kids.`;
  })("job", "location", "partner", 3);

  // Exercice 7
  
const body =document.body
const navBar= document.createElement("nav")
body.appendChild(navBar)
(function(name){
    const div=document.createElement("div")
    navBar.appendChild(div)
    const img =document.createElement("img")
    const p= document.createElement("p")
    p.textContent=name
    div.appendChild(img)
    div.appendChild(p)
})("john")

//Exercice 8

//Part I
function makeJuice(size) {
    function addIngredients(ingredient1,ingredient2,ingredient3) {
        const body=document.body
        const p = document.createElement("p")
        p.textContent=`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`
        body.appendChild(p)
    }
    console.log("this is inner execution")
    addIngredients("mm","nn","nn")
}
makeJuice("medium")

//PArtII

function makeJuice(size) {
    let ingredients=[]
function addIngredients(ingredient1,ingredient2,ingredient3) {
ingredients.push(ingredient1, ingredient2, ingredient3)}
function displayJuice(){
const body=document.body
const p = document.createElement("p")
let message = ingredients.join(", ")
p.textContent=`The client wants a ${size} juice, containing ${message}`
body.appendChild(p)
}
addIngredients("mm","nn","nn")
addIngredients("ws","wswsw","dxd")
displayJuice()
}
makeJuice("medium")
  

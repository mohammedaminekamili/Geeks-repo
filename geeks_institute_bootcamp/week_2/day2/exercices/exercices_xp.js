// Exercice 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// Exercice 2
function displayStudentInfo(objUser){
    const {first,last}=objUser
    console.log("Your full Name is "+first+" "+last)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercice 3
const users = { user1: 18273, user2: 92833, user3: 90315 };


const usersArray = Object.entries(users);


const modifiedUsers = usersArray.map(([key, id]) => {
    return [key, id * 2];
});



//Exercice 4
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
//OutPut ==> object

// Exercice 5
//this is the right answer 
  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  
//Exercice 6

[2] === [2] 
//false
{} === {}
//false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4 passed by referance
console.log(object3.number)//4 passed by referance
console.log(object4.number)//5 not passed by reference

class Animal{
    constructor(name,type,color){
        this.name=name
        this.type=type
        this.color=color
    }
}

class Mammal extends Animal{
    sound(sound) {
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
}
const farmerCow= new Mammal("Lily","cow","black and white")
farmerCow.sound("Moo")


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
  

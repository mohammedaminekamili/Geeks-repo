// Exercice 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((x,i)=>{
    console.log(`my #${i+1} choice is ${x}`)

})

// Exercice 2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors.forEach((x,i)=>{
    i<3?console.log(`my ${i+1}${ordinal[i+1]} choice is ${x}`):console.log(`my ${i+1}${ordinal[0]} choice is ${x}`)

})
// Exercice 3

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//output  ["bread","carrot", "potato", "chicken","apple", "orange"]

const country = "USA";
console.log([...country]);
//output ["U","S","A"]

let newArray = [...[,,]];
console.log(newArray);
//output [null,null]

//Exercice 4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents=users.map(x=>`Hello ${x.firstName}`)


const studentFullStack=users.filter(x=>x.role=='Full Stack Resident')


const studentFullStackLastName=users.filter(x=>x.role=='Full Stack Resident').map(x=>x.lastName)
// Exercice 5
const reducer = (accumulator, currentValue) => accumulator + " "+currentValue;
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const story= epic.reduce(reducer)


//Exercice 6

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];
const passedStudent=students.filter(x=>x.isPassed)
const congratulation= passedStudent.forEach(x=>console.log(`Good job ${x.name}, you passed the course in ${x.course}`))
  // Exercice 7
  

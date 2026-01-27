// ===== Exercise 1
//===Part I
//1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
//2
people.splice(2,1,"jason")
//3
people.push("Kamili")
//4
console.log(people.indexOf("Mary"))
//5
let peoplecopy=people.slice(1,-1)
//6
people.indexOf("Foo")
// return -1 because the string "Foo" doesn't exist in the people array
//7
let last=people[people.length-1]

//===Part II
//1
for (let person of people){
    console.log(person)
}

//2
for (let person of people){
    console.log(person)
    if (person=="Devon"){
        break
    }
}

// ===== Exercise 2
//1
let favColors=["Blue","Red"]
//2
for(let color in favColors){
    console.log(`my #${Number(color)+1} choice is ${favColors[color]}`)
}
//bonus

// ===== Exercise 3

while(!Number(number)){
    var  number=prompt("give a number")
  }

while(Number(number)< 10){
    number=prompt("give a number higher then 10")
}

// ===== Exercise 4

// ===== Exercise ...
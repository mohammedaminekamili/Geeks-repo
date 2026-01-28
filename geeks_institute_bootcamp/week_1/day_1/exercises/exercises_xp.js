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
let suffix=["st", "nd"]
for(let i=0;i<favColors.length;i++){
    console.log(`my ${i+1}${suffix[i]} choice is ${favColors[i]}`)
}
// ===== Exercise 3
//1
let number=prompt("give a number")
console.log(typeof(number))


//2
while(Number(number)< 10){
    number=prompt("give a number higher then 10")
}

// ===== Exercise 4
//1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//2
console.log(building.numberOfFloors)
//3
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
//4
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])
//5
let sumRent=building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]
if (sumRent>building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1]+=1200
}

// ===== Exercise 5 
//1
const family={
    father: "bouchaib",
    mother:"jamila",
    children: "mohammed"
}
//2
for(let member in family){
    console.log(member)
}
//3
for(let member in family){
    console.log(family[member])
}

// ===== Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
let phrase=[]
  for (let word in details){
phrase.push(word)
phrase.push(details[word])
  }
phrase=phrase.join(" ")
console.log(phrase)

// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sortedNames=names.sort()
let societyName=[]
for(let name of sortedNames){
    societyName.push(name[0])
}
societyName=societyName.join("")
console.log(societyName)

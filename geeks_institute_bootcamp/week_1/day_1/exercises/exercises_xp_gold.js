// ===== Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7]
for (let number of numbers) {
    if(number%3==0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
// ===== Exercise 2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  
  let name=prompt("what's your name?")
  if(name in guestList){
      console.log("Hi! I'm "+name+", and I'm from "+guestList[name]+".")
  }
  else{
      console.log("Hi! I'm a guest.")
  }
  
// ===== Exercise 3
//1
let age = [20,5,12,43,98,55];
let sum=0

for (let num of age) {
    sum+=num
}
console.log(sum)
//2
let higher=0
for (let num of age) {
    if(higher<num){
        higher=num
    }
}

console.log(higher)
// ===== Exercise 4

// ===== Exercise ...
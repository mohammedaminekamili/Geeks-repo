// ===== Exercise 1
function displayNumbersDivisible(){
    let divisibleNumbers=[]
    let sum=0
    for(let i=0; i<=500;i++){
        if(i%23==0){
            divisibleNumbers.push(i)
            sum+=i
        }
    }
    console.log(divisibleNumbers)
    console.log(sum)
}
//bonus
function displayNumbersDivisible(a){
    let divisibleNumbers=[]
    let sum=0
    for(let i=0; i<=500;i++){
        if(i%a==0){
            divisibleNumbers.push(i)
            sum+=i
        }
    }
    console.log(divisibleNumbers)
    console.log(sum)
}
// ===== Exercise 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList =["banana","apple","orange"]

function myBill(){
    let sum=0;
    for (let item of shoppingList){
    if (item in stock  && stock[item]>0){
        sum+=prices[item]
    }
   
}
console.log(sum)
}
//bonus
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList =["banana","apple","orange"]

function myBill(){
    let sum=0;
    for (let item of shoppingList){
    if (item in stock && stock[item]>0){
        sum+=prices[item]
        stock[item]--
    }
   
}
console.log(sum)
}
// ===== Exercise 3
function changeEnough(itemPrice, amountOfChange) {
    let change=[0.25,0.1,0.05,0.01]
    let pocket=0
        for (let index = 0; index < 4; index++) {
            pocket+=change[index]*amountOfChange[index]
        }
        return pocket>=itemPrice
    }
// ===== Exercise 4
function hotelCost(){
    let Nightnumber=NaN
    while (!Nightnumber) {
        Nightnumber=parseInt(prompt("how many nights you want to stay"))
    }
    return 140*Nightnumber
    
}
function planeRideCost() {
    let location
     do {
        location=prompt("where you want to fly")
    }while (parseInt(location)|| !location)
    if (location.toLowerCase()=="london"){
        return 183
    } else if (location.toLowerCase()=="paris") {
        return 220
    } else {
        return 300
    }
}


function rentalCarCost(){
    let rentday=NaN
     while (!rentday) {
        rentday=parseInt(prompt("how many days you want to rent the car"))
    }
    return rentday<=10?40*rentday:38*rentday
}

function totalVacationCost(){
    let Nightnumber=hotelCost()
    let location= planeRideCost()
    let rentday= rentalCarCost()
    return Nightnumber+location+rentday
}
//bonus 
function hotelCost(Nightnumber){
   
    return 140*Nightnumber
    
}
function planeRideCost(location) {
   
    if (location.toLowerCase()=="london"){
        return 183
    } else if (location.toLowerCase()=="paris") {
        return 220
    } else {
        return 300
    }
}


function rentalCarCost(rentday){
   
    return rentday<=10?40*rentday:38*rentday
}

function totalVacationCost(){
    let Nightnumber=NaN
    while (!Nightnumber) {
        Nightnumber=parseInt(prompt("how many nights you want to stay"))
    }
   let location
   do {
      location=prompt("where you want to fly")
  }while (parseInt(location)|| !location)
    
    let rentday=NaN
    while (!rentday) {
       rentday=parseInt(prompt("how many days you want to rent the car"))
   }
   
    return  hotelCost(Nightnumber)+planeRideCost(location)+ rentalCarCost(rentday)
}

// ===== Exercise ...
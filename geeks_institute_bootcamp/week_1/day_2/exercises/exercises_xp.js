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

// ===== Exercise 5

const div=document.getElementById("container")
const list=document.querySelectorAll(".list")
list[0].children[1].innerHTML="Richard"
list[1].children[1].remove()
for (let index = 0; index < list.length; index++) {
    list[index].children[0].innerHTML="Kamili"
}
for (let index = 0; index < list.length; index++) {
    list[index].classList.add("student_list")
}
list[0].classList.add("university", "attendance")

div.style.backgroundColor="lightblue"
for (let index = 0; index < list.length; index++) {
    for (let j = 0; j < list[index].children.length; j++) {
       if (list[index].children[j].innerHTML.toLowerCase()=="dan") {
        list[index].children[j].style.display="none"
       }
        
    }
    
}

for (let index = 0; index < list.length; index++) {
    for (let j = 0; j < list[index].children.length; j++) {
       if (list[index].children[j].innerHTML.toLowerCase()=="richard") {
        list[index].children[j].style.border="1px solid"
       }
        
    }
    
}
 const body= document.body
 body.style.fontSize="10px"

//bonus
if (div.style.backgroundColor=="lightblue") {
    alert("Hello "+list[0].firstElementChild.textContent+" and "+list[0].lastElementChild.textContent)
}

// ===== Exercise 6
const div=document.getElementById("navBar")
div.setAttribute("id","socialNetworkNavigation")
const ul = document.getElementsByTagName("ul");
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
ul[0].appendChild(newLi);
const firstLi = ul[0].firstElementChild;
const lastLi = ul[0].lastElementChild;

console.log("First li text:", firstLi.textContent);
console.log("Last li text:", lastLi.textContent);

// ===== Exercise 7

const allBooks=[]
const book1={
    title:"Sans famille",
    autor:"Hector Malot",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvlwDXaUw-DSXK3FDKyc3m31MMaKEBUNysElGaAjbPJ3ZAMYLm-OpMdxKW9s5qYmY36QWbta0nNZziXpLR9_Ti0-cYKOo3pKVijlqzgA&s=10",
    alreadyRead :true
}
const book2={
    title:"Harry Potter",
    autor:"JKRolling",
    img:"https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_1333535796/responsivegrid_19882/image_copy.coreimg.100.1024.png/1751469484559/hp-stencil-covers-homepage-02.png",
    alreadyRead :true
}

allBooks.push(book1)
allBooks.push(book2)
const div =document.querySelector(".listBooks")
for (const book of allBooks) {
    
    let element= document.createElement("p")
    let details=book.title+" written by "+book.autor
    let textNode=document.createTextNode(details)
    element.appendChild(textNode)
    div.appendChild(element)

    let img=document.createElement("img")
    img.setAttribute("src",book.img)
    img.style.width="100px"
    div.appendChild(img)
    


    if (book.alreadyRead) {
        element.style.color="red"

    }
}

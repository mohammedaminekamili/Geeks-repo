// ===== Exercise 1
// 1
const person1={
    fullName:"kam ili",
    mass:100,
    height:1.8
}

const person2={
    fullName:"ili kam",
    mass:130,
    height:1.7
}
//2
person1.ibm=function(){
    return this.mass/(this.height**2)
}
person2.ibm=function(){
    return this.mass/(this.height**2)
}
//3
function compare(a,b){
  return a>b?a:b
}
//4
console.log(compare(persone1.ibm(),persone2.ibm()))
// ===== Exercise 2
function findAVG(a){
    let sum=0
    for (element of a){
        sum+=element
    }
    let avg =sum/a.length
    console.log(avg)
    avg>=65?console.log("You passed"):console.log("You failed")
}
//bonus
function calculAVG(a){
    let sum=0
    for (element of a){
        sum+=element
    }
    return sum/a.length
}

function result(a){
    a>=65?console.log("your average is: "+a+" You passed"):console.log("your average is: "+a+" You failed")
}
result(calculAVG(gradeList))


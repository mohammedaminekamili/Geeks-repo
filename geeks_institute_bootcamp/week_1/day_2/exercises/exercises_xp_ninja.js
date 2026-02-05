// ===== Exercise 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
let even =[0]
for (let i=0; i<=randomNumber;i++) {
    if (i%2==0) {
        even.push(i)
    }
}
console.log(even)
// ===== Exercise 2
function capitalize(string) {
    let odd=string[0].toUpperCase()
    let even=string[0]
    for (let i = 1; i < string.length; i++) {
        if (i%2==0) {
            odd+=string[i].toUpperCase()
            even+=string[i]
        } else {
            odd+=string[i]
            even+=string[i].toUpperCase()
        }
    }
    return [odd,even]
   

}
// ===== Exercise 3
function palindrome(string) {
    string=string.toLowerCase()
  let middle=Math.floor(string.length/2)
    let firsthalf=string.slice(0,middle)
    let secondhalf=string.length%2==0?string.slice(middle).split('').reverse().join(''):string.slice(middle+1).split('').reverse().join('')

    if(firsthalf==secondhalf) {
        return true
    } else  {
        return false
    }
}
// ===== Exercise 4
function biggestNumber(array) {
    let num=0
    for (let i = 0; i < array.length-1; i++) {
        if(!isNaN(array[i])&&!isNaN(array[i+1])){
            
            if (array[i]>=array[i+1]) {
                num=array[i]
                break
            } else {
                num=array[i+1]
                break
            }
        }
        
    }
    for (let i = 0; i < array.length; i++) {
        if(!isNaN(array[i])){
            
            if (num<array[i]) {
                num=array[i]
            } 
        }
        
    }
    
    return num
}


// ===== Exercise 5
function unique(arr){
    for (let i = 0; i < arr.length; i++) {
        let temp=arr[i]
        for (let j = i+1; j < arr.length; j++) {
            if(temp==arr[j]){
                arr.splice(j,1)
                j--
            }            
        }
       
    }
    return arr
}
// ===== Exercise 6

function createCalendar(year,month){
    const body=document.body
    month=month-1
    const date=new Date(year,month,1)
    let Firstday= date.getDay()
    Firstday=Firstday>0?Firstday-1: 6
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // Months with 30 days (by index)
    const months30Indexes = [3, 5, 8, 10]; // April, June, September, November
    let count=1
// Months with 31 days (by index)
    const months31Indexes = [0, 2, 4, 6, 7, 9, 11]; // Jan, Mar, May, Jul, Aug, Oct, Dec
    let daysCount=months30Indexes.includes(month)?30:months31Indexes.includes(month)?31:(month==1&&year%4==0)?29:28
    const table=document.createElement("table")
    body.appendChild(table)
    const thead=document.createElement("tr")
    table.appendChild(thead)

    for (const day of daysOfWeek) {
        let th=document.createElement("th")
        th.textContent=day
        thead.appendChild(th)
    }
    const tr= document.createElement("tr")
    table.appendChild(tr)
        for (let index = 0; index < 7; index++) {
            let td=document.createElement("td")
       
           if (index>=Firstday) {
                
                
                td.textContent=count
                
                count++
           } else {
            
               
                
                td.textContent="-"
               
                
                
           }
           tr.appendChild(td)
          

            
        }
  
    for (let i = 0; i < 5; i++) {
       
        const tr= document.createElement("tr")
    table.appendChild(tr)
        for (let index = 0; index < 7; index++) {
           
            let td=document.createElement("td")
           if (count<=daysCount) {
                
               
                td.textContent=count
                
                count++
           } else {
            
             
                td.textContent="-"

                
                
                
           }
           tr.appendChild(td)
          

            
        }
    }
    

}
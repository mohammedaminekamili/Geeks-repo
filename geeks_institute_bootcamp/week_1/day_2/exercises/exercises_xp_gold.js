// ===== Exercise 1
function isBlank(a) {
    return !a
}
// ===== Exercise 2
const abbrevName = function (a){
    const arr=a.split(" ")
    arr[1]=arr[1][0] + "."
    return arr.join(" ")
}
// ===== Exercise 3
function swapcase(s){
    let result=""
    for (let e of s) {
        
        if (e==e.toLowerCase()) {
           result+=e.toUpperCase()
            
        }
        else  {
            result+=e.toLowerCase()
        }
    }

  return result
}

// ===== Exercise 4
function omnipresent(arr,a){

    for(let e of arr){
    
    if(!e.includes(a)){
     return false
    }
    
    }
    return true
    }

// ===== Exercise 5
let tr=document.getElementsByTagName("tr")
 
for (let index = 0; index < tr.length; index++) {
    tr[index].children[index].style.backgroundColor="red";
    
}



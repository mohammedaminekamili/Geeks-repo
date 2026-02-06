// ===== Exercise 1
const select=document.getElementById("genres")
console.log(select.value)
const option= document.createElement("option")
option.textContent="Classic"
option.value="classic"
select.appendChild(option)
option.setAttribute("selected","true")
// ===== Exercise 2
const form=document.forms[0]
const button=form[1]
function removecolor(){
    const options= document.getElementsByTagName("option")
    for (const option of options) {
     if (option.selected) {
        option.remove()
     }
        
    }
    

}
button.addEventListener("click",removecolor)
// ===== Exercise 3
let shoppingList=[]
const div=document.getElementById("root")
const form=document.createElement("form")
const input = document.createElement("input")
const button= document.createElement("button")
button.textContent="AddItem"
input.setAttribute("type","text")
form.appendChild(input)
form.appendChild(button)
div.appendChild(form)
function addItem(e){
    e.preventDefault()
   
    shoppingList.push(input.value)
    input.value=""
}
button.addEventListener("click",addItem)
const clear=document.createElement("button")
clear.textContent="ClearAll"
form.appendChild(clear)
const clearAll=(e)=>{
e.preventDefault()
shoppingList=[]
}
clear.addEventListener("click",clearAll)
// ===== Exercise 4

// ===== Exercise ...
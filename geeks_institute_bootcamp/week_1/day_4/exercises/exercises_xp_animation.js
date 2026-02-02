// ===== Exercise 1
setTimeout(
    function(){
        alert("Hello world")
    },2000
)
const div=document.getElementById("container")
setTimeout(
    function(){
       const p=document.createElement("p")
       p.textContent="hello world"
       div.appendChild(p)
    },2000
)
const intervalID=setInterval(
    function(){
       
       const p=document.createElement("p")
       p.textContent="hello world"
       div.appendChild(p)
       if (document.getElementsByTagName("p").length==5) {
    clearInterval(intervalID)
}
    },2000   
)


const button= document.getElementById("clear")
button.addEventListener("click",()=>{clearInterval(intervalID)})

// ===== Exercise 2
let pos=1
const myMove=function (){
    const id=setInterval(()=>{
        const animation=document.getElementById("animate")
        
        animation.style.left =pos +"px"
        pos++

        if (pos==350) {
            clearInterval(id)
        }

    },1)
}

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...
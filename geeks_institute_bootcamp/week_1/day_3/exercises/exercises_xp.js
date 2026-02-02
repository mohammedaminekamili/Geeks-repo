// ===== Exercise 1
const body=document.body
const h1=document.querySelector("h1")
let text=h1.textContent
console.log(text)

const article=document.querySelector("article")
article.lastElementChild.remove()
const h2=document.querySelector("h2")

h2.addEventListener("click",()=>{
   h2.style.backgroundColor="red"
})
const h3=document.querySelector("h3")
h3.addEventListener("click",()=>{
    h3.style.display="none"
})
const button= document.createElement("button")
button.textContent="Click me"
body.appendChild(button)
button.addEventListener("click",()=>{
    article.style.fontWeight="bold"
})
h1.addEventListener("mouseover",()=>{
  h1.style.fontSize=Math.floor(Math.random()*100)+"px"
})
p=document.querySelectorAll("p")[1]
p.addEventListener("mouseover",()=>{
  p.classList.add("fade-out")
})



// ===== Exercise 2
const form=document.forms[0]
console.log(form)
const firstname=form.firstname
const lastname=form.lastname
const submit=form.submit
console.log(firstname,lastname,submit)
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const submitInput=document.getElementById("submit");
console.log(firstNameInput,lastNameInput,submitInput)
const ul = document.querySelector(".usersAnswer");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page from reload

  


  if (firstname.value == "" || lastname.value == "") {
    alert("Please fill in both fields");
    return;
  }

  const liFirstName = document.createElement("li");
  liFirstName.textContent = firstname.value;

  const liLastName = document.createElement("li");
  liLastName.textContent = lastname.value;


  ul.appendChild(liFirstName);
  ul.appendChild(liLastName);

  form.reset();
});




// ===== Exercise 3
let allBoldItems

function getBoldItems(){
    allBoldItems=document.querySelectorAll("strong")
    
}
function highlight(){
    getBoldItems()
    allBoldItems.forEach(item=>{
        item.style.color="blue"
    })
}

function returnItems(){
    getBoldItems()
    allBoldItems.forEach(item=>{
        item.style.color="black"
    })
}

const p=document.querySelector("p")
p.addEventListener("mouseover",highlight)
p.addEventListener("mouseout",returnItems)


// ===== Exercise 4
const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volume");
volumeInput.setAttribute("disabled",true)

form.addEventListener("submit", function (event) {
  event.preventDefault(); 


  const radius = Number(radiusInput.value);

  
  if (radius <= 0 || isNaN(radius)) {
    alert("Please enter a valid positive number for radius");
    return;
  }

 
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  
  volumeInput.value = volume.toFixed(2);
});

// ===== Exercise ...
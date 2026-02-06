// ====== Daily Challenge 1
const libForm = document.getElementById("libform");
const storySpan = document.getElementById("story");

function madLibs(noun, adjective, person, verb, place) {
    return `One day, ${person} went to ${place} with a very ${adjective} ${noun}. Everyone was shocked when they started to ${verb} right in the middle of the street!`;
}

libForm.addEventListener("submit", function(event) {    
    event.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        alert("Please fill in all the blanks before clicking 'Lib it!'");
        return; 
    }

    const story = madLibs(noun, adjective, person, verb, place);


    storySpan.textContent = story;
});
// ====== Daily Challenge 2
const regex = /^[A-Za-z]+$/;
const body=document.body
const input=document.createElement("input")
input.setAttribute("type","text")
body.appendChild(input)
input.addEventListener("input",()=>{
    if (!regex.test(input.value)) {
        let chars = input.value.split("");
    chars.splice(-1, 1);        // remove last char
    input.value = chars.join(""); 
        
    }
})
// ====== Daily Challenge 1
const libForm = document.getElementById("libform");
const storySpan = document.getElementById("story");


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
    const story = `One day, ${person} went to ${place} with a very ${adjective} ${noun}. 
                   Everyone was shocked when they started to ${verb} right in the middle of the street!`;


    storySpan.textContent = story;
});
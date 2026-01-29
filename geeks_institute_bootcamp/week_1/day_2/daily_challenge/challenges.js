// ====== Daily Challenge 1
const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto"
  ];

  const planetColors = [
    "gray",       // Mercury
    "goldenrod",  // Venus
    "blue",       // Earth
    "red",        // Mars
    "brown",      // Jupiter
    "khaki",      // Saturn
    "lightblue",  // Uranus
    "darkblue"    // Neptune
  ];

  for (const  color of planetColors) {
    let element=document.createElement("div")
    element.classList.add("planet")
    element.style.backgroundColor=color
    let section = document.querySelector(".listPlanets")
    section.appendChild(element)
  }
//bonus
const planetsData = [
    { planet: "Mercury", color: "gray", moons: 0 },
    { planet: "Venus", color: "goldenrod", moons: 0 },
    { planet: "Earth", color: "blue", moons: 1 },
    { planet: "Mars", color: "red", moons: 2 },
    { planet: "Jupiter", color: "brown", moons: 95 },
    { planet: "Saturn", color: "khaki", moons: 146 },
    { planet: "Uranus", color: "lightblue", moons: 27 },
    { planet: "Neptune", color: "darkblue", moons: 14 }
  ];

  for (const  planetData of planetsData) {
    let element=document.createElement("div")
    element.classList.add("planet")
    element.style.backgroundColor=planetData.color
    let section = document.querySelector(".listPlanets")
    section.appendChild(element)
    if (planetData.moons) {
      for (let index = 0; index < planetData.moons; index++) {
        let element=document.createElement("div")
      element.classList.add("moon")
      let section = document.querySelector(".listPlanets")
      section.appendChild(element)
        
      }
      
    }
    
  }
// ====== Daily Challenge 2
let phrase=prompt("give me separated words with ,")
const arr=phrase.split(",")
function longestWord(arr) {
    let wordlength=0
    for (let element of arr) {
        if (element.length>wordlength) {
            wordlength=element.length
        }
    }
    return wordlength
}
function wrapper(wordlength) {
    let Line="****"
       for (let index = 0; index < longestWord(arr); index++) {
        Line+="*"
    }

    console.log(Line)
}
function displayInFame(arr,b) {
    wrapper(arr)
    for (let name of arr) {
        let line="* "+name
       while (line.length<b+2) {
           line+=" "
       }
        line+=" *"
        console.log(line)
    }
    wrapper(arr)
}
displayInFame(arr,longestWord(arr))


// ====== Daily Challenge 3

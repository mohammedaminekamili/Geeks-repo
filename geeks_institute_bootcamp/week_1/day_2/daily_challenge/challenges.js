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

// ====== Daily Challenge 3

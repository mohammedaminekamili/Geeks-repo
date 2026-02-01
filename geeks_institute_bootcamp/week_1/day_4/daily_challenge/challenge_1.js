//Daily challenge 1

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        // Check if every item in the array is a string
        const allStrings = words.every(word => typeof word === 'string');

        if (allStrings) {
            const uppercased = words.map(word => word.toUpperCase());
            resolve(uppercased);
        } else {
            reject("Error: Not all items in the array are strings!");
        }
    });
}

// Function 2: Sort the words
function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
        if (uppercasedWords.length > 4) {
            // .sort() modifies the original, so we spread it into a new array
            const sorted = [...uppercasedWords].sort();
            resolve(sorted);
        } else {
            reject("Error: Array length is too short (must be > 4)!");
        }
    });
}
//Daily challenge 2

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  // 1. Convert JSON string to JS Object
  function toJs() {
      return new Promise((resolve, reject) => {
          const morseJS = JSON.parse(morse);
          if (Object.keys(morseJS).length === 0) {
              reject("Error: The Morse object is empty.");
          } else {
              resolve(morseJS);
          }
      });
  }
  
  // 2. Translate user input to Morse array
  function toMorse(morseJS) {
      return new Promise((resolve, reject) => {
          const userInput = prompt("Enter a word or a sentence:").toLowerCase();
          const morseTranslation = [];
  
          for (let char of userInput) {
              // Handle spaces (optional, but good for sentences)
              if (char === " ") continue; 
  
              if (morseJS[char]) {
                  morseTranslation.push(morseJS[char]);
              } else {
                  reject(`Error: The character "${char}" does not exist in Morse code.`);
                  return; // Stop execution if an invalid character is found
              }
          }
          resolve(morseTranslation);
      });
  }
  
  // 3. Display the result in the DOM
  function joinWords(morseTranslation) {
      // Join array elements with a line break
      const resultString = morseTranslation.join("<br>");
      
      // Display on the page
      const container = document.createElement("div");
      container.innerHTML = `<h3>Morse Translation:</h3><p>${resultString}</p>`;
      document.body.appendChild(container);
  }
  
  // --- The Chain ---
  toJs()
      .then(morseJS => toMorse(morseJS))
      .then(morseTranslation => joinWords(morseTranslation))
      .catch(error => console.error(error));

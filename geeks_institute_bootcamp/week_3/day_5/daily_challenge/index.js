import { getRandomEmoji } from "./module.js";

const choices = getRandomEmoji();
const rightindex=Math.floor(Math.random() * choices.length);
const rightEmoji=choices[rightindex]
const body=document.body

const h1=document.createElement("h1")
h1.textContent=rightEmoji.emoji
body.appendChild(h1)

for (const emoji of choices) {
    const p=document.createElement("button")
    p.textContent=emoji.name
    body.appendChild(p)
    
   
}
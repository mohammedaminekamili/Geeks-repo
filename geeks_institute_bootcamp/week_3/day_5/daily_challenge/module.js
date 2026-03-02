import { emojis } from "./data.js";
export function getRandomEmoji() {
    let emojisCopy=emojis
    const choices=[]
  for (let index = 0; index < 3; index++) {
    
    const randomEmoji=emojisCopy[Math.floor(Math.random() * emojisCopy.length)];
    choices.push(randomEmoji)
    emojisCopy=emojisCopy.filter(emoji => emoji !== randomEmoji);
  }
  return choices
}

console.log(getRandomEmoji());





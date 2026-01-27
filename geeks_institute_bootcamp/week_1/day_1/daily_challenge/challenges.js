// ====== Daily Challenge 1
let sentence="the movie is not that bad! I like it."
let wordNot=sentence.indexOf("not")
let wordBad=sentence.indexOf("bad")

if(wordNot>0 && wordNot<wordBad){
    sentence=sentence.slice(0,wordNot)+"good"+sentence.slice(wordBad+3)
}
console.log(sentence)
// ====== Daily Challenge 2
let pattern=""
for (let i=0;i<6;i++){
    pattern=pattern+"*"
   console.log(pattern)
    
}

for (let index = 0; index <7; index++) {
    let row=""
    for (let j= 0; j< index; j++) {
        row+="*"
    }
    console.log(row)
}

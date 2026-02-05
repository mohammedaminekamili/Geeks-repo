function anagram(word1,word2){
    let comp1= word1.trim().toLowerCase().split(" ").join("").split("").sort().join("")
        let comp2= word2.trim().toLowerCase().split(" ").join("").split("").sort().join("")
    
return comp1==comp2
}
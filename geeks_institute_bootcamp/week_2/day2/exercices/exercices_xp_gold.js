//exercice1
[2,4,6]
//exercice2
[1,2,0,1,2,3]
//exercice 3
//i is the index

//exercice 4
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const newarray=array.flat(2)
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]

const array2=greeting.map(x =>x.join(" "))

const sayHello=greeting.flat(1).join(" ")

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
let a=trapped.flat(Infinity)

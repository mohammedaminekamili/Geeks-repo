import { people } from "./data.js";
const avg=(array)=>{
let sum=0
for (const e of array) {
    sum+=e.age/array.length
}
return sum
}

console.log(avg(people))
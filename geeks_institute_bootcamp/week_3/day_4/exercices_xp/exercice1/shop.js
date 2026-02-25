const products=require ("./product.js")


function search(name){
   return products.find(product=>product.name==name)
}

console.log(search("Laptop"))
console.log(search("Notebook"))

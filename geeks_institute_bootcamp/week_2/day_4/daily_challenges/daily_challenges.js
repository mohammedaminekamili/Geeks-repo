let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries=()=>groceries.fruits.forEach(x => {
    console.log(x)
    
});

displayGroceries()

const cloneGroceries=()=>{
    let user =client
    client="betty"
    // user will not change because it passed by value
    const shopping=groceries
    groceries.totalPrice=35
    //yes shopping will change because it's passed by reference
    groceries.other.paid=false
        //yes shopping will change because it's passed by reference


}

cloneGroceries()

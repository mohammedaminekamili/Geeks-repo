//exercice 1
function printFullName({first,last}) {
    console.log("Your full Name is "+first+" "+last)
}

//exercice 2

function keysValues(obj){
    let keys=[]
    let values =[]
    for (const key in obj) {
        keys.push(key)
    }
    keys=keys.sort()
    for (const e of keys) {
        values.push(obj[e])
    }
return [keys,values]
}

//exercice 3
//3

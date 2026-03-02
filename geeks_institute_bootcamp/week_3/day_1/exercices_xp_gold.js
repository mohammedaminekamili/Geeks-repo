//Exercice 1

const promise1 = Promise.resolve(3);
const promise2 = 42; 
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});


Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); 
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });
  //promise.all is used to handle an array of promises and return an array of results when all promises are resolved or reject if one of the promises is rejected
  //promise.all return the results in the order of the promises in the array 

//Exercice 2
//[2,4,6]

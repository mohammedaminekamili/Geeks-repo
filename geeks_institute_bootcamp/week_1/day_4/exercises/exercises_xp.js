// ===== Exercise 1
function compareToTen(num) {
    return num<=10? Promise.resolve(`${num} is less than or equal to 10. Promise Resolved!`):Promise.reject(`${num} is greater than 10. Promise Rejected!`);
}
// ===== Exercise 2
const delayedSuccess = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000); 
});
// ===== Exercise 3
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");
// ===== Exercise 4

// ===== Exercise ...
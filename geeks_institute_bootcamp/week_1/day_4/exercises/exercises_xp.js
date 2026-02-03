// ===== Exercise 1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10. Promise Resolved!`);
        } else {
            reject(`${num} is greater than 10. Promise Rejected!`);
        }
    });
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
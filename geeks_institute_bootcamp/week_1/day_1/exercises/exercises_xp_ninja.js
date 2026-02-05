// ===== Exercise 1
// 1. Create the two person objects
const person1 = {
    fullName: "John Doe",
    mass: 80,   // in kg
    height: 1.8, // in meters
    // Method to calculate BMI
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const person2 = {
    fullName: "Jane Smith",
    mass: 75,
    height: 1.7,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// 2. Create the comparison function
function compareBMI(p1, p2) {
    // We call the methods to ensure the BMI is calculated
    const bmi1 = p1.calcBMI();
    const bmi2 = p2.calcBMI();

    if (bmi1 > bmi2) {
        console.log(`${p1.fullName} has the largest BMI: ${bmi1.toFixed(2)}`);
    } else if (bmi2 > bmi1) {
        console.log(`${p2.fullName} has the largest BMI: ${bmi2.toFixed(2)}`);
    } else {
        console.log("They have the same BMI!");
    }
}

// 3. Execute the comparison
compareBMI(person1, person2);
console.log(compare(persone1.ibm(),persone2.ibm()))
// ===== Exercise 2
// Function 1: The Mathematician
// This function only cares about numbers.
function calculateAverage(gradesList) {
    let sum = 0;
    
    for (let grade of gradesList) {
        sum += grade;
    }
    
    const average = sum / gradesList.length;
    return average;
}

// Function 2: The Evaluator
// This function calls Function 1 and then makes a decision.
function findAvg(gradesList) {
    // Calling the first function
    const avg = calculateAverage(gradesList);
    
    console.log(`The average is: ${avg.toFixed(2)}`);

    // Logic for passing/failing
    if (avg > 65) {
        console.log("Congratulations! You passed.");
    } else {
        console.log("Unfortunately, you failed and must repeat the course.");
    }
}

// --- Testing the code ---
const myGrades = [85, 90, 60, 70, 45];
findAvg(myGrades);
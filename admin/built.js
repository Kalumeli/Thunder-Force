// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    // Math.PI is a built-in constant for the value of PI
    // Math.pow() is a built-in function to raise numbers to a power
    let area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2); // toFixed() is a built-in function to format the number to 2 decimal places
}

// Parse a string input to an integer
let radiusInput = "5";
let radius = parseInt(radiusInput); // parseInt() is a built-in function to convert a string to an integer

// Calculate and display the area of the circle
let area = calculateCircleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area}`); // console.log() is a built-in function to print messages to the console

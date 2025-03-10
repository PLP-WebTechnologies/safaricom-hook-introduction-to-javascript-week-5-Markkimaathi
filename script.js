// Part 1: JavaScript Basics

// Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "gaming"];
const user = { name: "Alice", age: 30, city: "New York" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${user} (Type: ${typeof user})`);

// Calculator Function
function simpleCalculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid numbers entered!");
        return;
    }

    let result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation!");
            return;
    }
    alert(`Result: ${result}`);
}

simpleCalculator();

// Greet User Function
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

const userName = prompt("Enter your name:");
document.getElementById('greeting').textContent = greetUser(userName);

// Part 2: Control Structures

// Age Check
const userAge = parseInt(prompt("Enter your age:"));
const ageResult = document.getElementById('age-result');
if (isNaN(userAge)) {
    ageResult.textContent = "Invalid age entered!";
} else if (userAge >= 18) {
    ageResult.textContent = "You are eligible to vote.";
} else {
    ageResult.textContent = "You are not eligible to vote.";
}

// Number List
const numberList = document.getElementById('number-list');
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: DOM Manipulation

// Modify Heading
document.querySelector('h1').textContent = "JavaScript in Action!";

// Add Dynamic Content
const dynamicContent = document.getElementById('dynamic-content');
const newParagraph = document.createElement('p');
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);
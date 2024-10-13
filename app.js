//Chapter 35 to 38(Function)

// //Question 1

// function date(){
//     var date =new Date()
//     document.write(date)
// }
// date()

//Question 2

// function greetUser(firstName, lastName) {
//     var fullName = `${firstName} ${lastName}`;
//     console.log(`Hello, ${fullName}!`);
// }

// greetUser('Munazzah', 'Ramzani');

//Questin 3

// function addTwoNumbers() {
//     var firstNumber = parseFloat(prompt("Enter the first number:"));
//     var secondNumber = parseFloat(prompt("Enter the second/ number:"));

//     var sum = firstNumber + secondNumber;

//     return sum;
// }

// var result = addTwoNumbers()
// console.log(`The sum is: ${result}`);

//Question 4

// function calculate(num1, num2, operator) {
//     var result;

    // switch (operator) {
    //     case '+':
    //         result = num1 + num2;
    //         break;
    //     case '-':
    //         result = num1 - num2;
    //         break;
    //     case '*':
    //         result = num1 * num2;
    //         break;
    //     case '/':
    //         result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    //         break;
    //     default:
    //         result = 'Error: Invalid operator';
    // }

//     return result;
// }
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");

// var result = calculate(num1, num2, operator);
// alert(`The result is: ${result}`);

// Question 5

// function square(number) {
//     return number * number;
// }
// var result = square(6);
// console.log(`The square of 5 is: ${result}`);

// Question 6

// function factorial(n) {
//     if (n < 0) {
//         return 'Error: Factorial is not defined for negative numbers.';
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// var num = 5;
// var result = factorial(num);
// console.log(`The factorial of ${num} is: ${result}`);

// Question 7

// function countNumbers(start, end) {
//     if (start > end) {
//         alert("Error: Start number must be less than or equal to the end number.");
//         return;
//     }
//     var count = '';
//     for (var i = start; i <= end; i++) {
//         count += i + (i < end ? ', ' : ''); 
//     }
//     alert(`Counting from ${start} to ${end}: ${count}`);
// }
// var startNumber = parseInt(prompt("Enter the start number:"));
// var endNumber = parseInt(prompt("Enter the end number:"));
// countNumbers(startNumber, endNumber);

// Question 8

// Question 9

// function calculateArea(width, height) {
//     return width * height;
// }

// var areaWithValues = calculateArea(5, 10);
// console.log(`Area (using values): ${areaWithValues}`); 

// var width = 7;
// var height = 12;

// var areaWithVariables = calculateArea(width, height);
// console.log(`Area (using variables): ${areaWithVariables}`); 

// Question 10

// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//         return cleanedStr === reversedStr;
// }

// const inputString = prompt("Enter a string to check if it's a palindrome:");
// const result = isPalindrome(inputString);

// alert(`Is the string "${inputString}" a palindrome? ${result}`);

// Question 11

// function capitalizeFirstLetterOfEachWord(str) {
//     return str.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// }

// const exampleString = 'the quick brown fox';
// const result = capitalizeFirstLetterOfEachWord(exampleString);

// console.log(result); 

// Question 12

// Question 13

// Question 14

// Chapter 38 to 42

//Question 1

// function power(a, b) {
//     if (b < 0) {
//         return 1 / power(a, -b);
//     }
    
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// const base = 2;
// const exponent = 3;
// const result = power(base, exponent);

// console.log(`${base} raised to the power of ${exponent} is: ${result}`); 

//Question 2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; 
//     } else {
//         return false;
//     }
// }
// const inputYear = parseInt(prompt("Enter a year:"));
// const result = isLeapYear(inputYear);

// alert(`${inputYear} is ${result ? 'a leap year' : 'not a leap year'}.`);


// Question 3

// Function to calculate the semi-perimeter
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     const S = calculateSemiPerimeter(a, b, c);
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const area = calculateArea(sideA, sideB, sideC);
// console.log(`The area of the triangle with sides ${sideA}, ${sideB}, and ${sideC} is: ${area}`);

// Questin 4

// function calculateAverage(marks) {
//     const total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
// }

// function calculatePercentage(marks) {
//     const totalMarks = 300; // Assuming each subject is out of 100
//     const obtainedMarks = marks.reduce((sum, mark) => sum + mark, 0);
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     const marks = [];
//         for (let i = 1; i <= 3; i++) {
//         const mark = parseFloat(prompt(`Enter marks for subject ${i}:`));
//         marks.push(mark);
//     }
//     const average = calculateAverage(marks);
//     const percentage = calculatePercentage(marks);
    
//     alert(`Average Marks: ${average.toFixed(2)}`);
//     alert(`Percentage: ${percentage.toFixed(2)}%`);
// }

// mainFunction();

// Question 5

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// const inputString = "Hello, world!";
// const characterToFind = 'o';
// const index = customIndexOf(inputString, characterToFind);

// console.log(`The index of '${characterToFind}' in "${inputString}" is: ${index}`);

// Question 6

// function deleteVowels(sentence) {
//     const vowels = /[aeiouAEIOU]/g;

//     const result = sentence.replace(vowels, '');

//     return result;
// }

// const inputSentence = prompt("Enter a sentence (max 25 characters):");
// if (inputSentence.length <= 25) {
//     const output = deleteVowels(inputSentence);
//     console.log(`Sentence without vowels: "${output}"`);
// } else {
    // console.log("Please enter a sentence that is 25 characters or less.");
// }

// Question 7

// function countDoubleVowels(sentence) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for (let i = 0; i < sentence.length - 1; i++) {
//         const pair = sentence[i] + sentence[i + 1];

//         if (vowels.includes(sentence[i]) && vowels.includes(sentence[i + 1])) {
//             count++;
//             console.log(`Found: ${pair}`); 
//         }
//     }

//     return count;
// }

// const inputSentence = "Pleases read this application and give me gratuity";
// const occurrences = countDoubleVowels(inputSentence);
// console.log(`Number of occurrences of two vowels in succession: ${occurrences}`);

// Question 8

// Question 9

//Question 10

//Chapter 43 to 48

// Question 1

// function showAlert() {
//     alert("You clicked the link!");
// }
 
// Question 2

// function showAlert(imageName) {
//     alert(`You clicked on: ${imageName}`);
// }

// Question 3

// Question 4

// const originalImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KLsKw0jLKi6EOWlMs2QnOvqlopxW-8i54w&s";
//         const newImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s";

//         function changeImage() {
//             document.getElementById('myImage').src = newImage; 
//         }

//         function resetImage() {
//             document.getElementById('myImage').src = originalImage;
//         }
// Question 5

// let counter = 0; 

//         function increaseCounter() {
//             counter++; // Increase the counter
//             updateCounterDisplay(); // Update the displayed value
//         }

//         function decreaseCounter() {
//             counter--; 
//             updateCounterDisplay(); 
//         }

//         function updateCounterDisplay() {
//             document.getElementById('counterValue').innerText = counter; 
//         }

// Chapter 31 to 34

//Question 1

// let dobj = new Date(); 
// console.log(dobj)

// Question 2

// dStr = new Date().toString();
// console.log(dStr)

// Question 3

// day = new Date(d).getDay();

// Question 4

// const d = new Date(); 
// const dayIndex = d.getDay(); 

// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// alert("Today is: " + dayNames[dayIndex]);

// Question 5

// const now = new Date();

// year = now.getFullYear();        
// month = now.getMonth() + 1;    
// date = now.getDate();            
// hours = now.getHours();          
// minutes = now.getMinutes();      
// seconds = now.getSeconds();    
// milliseconds = now.getMilliseconds();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`);
// console.log(`Date: ${date}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);
// console.log(`Milliseconds: ${milliseconds}`);

// Question 6

// later = new Date(2024, 10, 13); 
// console.log(later)

// Question 7

// dateObject = new Date(1992, 1, 2);
// console.log(dateObject)

//Question 8

// alert(new Date('YOUR_REFERENCE_DATE').getTime() - new Date(1980, 0, 1).getTime());

// Question 9

// let date = new Date('2023-10-13'); 

// date.setFullYear(2024);

// console.log(date);

//Question 10

// function changeToJanuary(date) {
//     const newDate = new Date(date);
//     newDate.setMonth(0); 
//     return newDate; 
// }

// const originalDate = new Date('2024-10-13');
// const updatedDate = changeToJanuary(originalDate);

// console.log('Original Date:', originalDate); 
// console.log('Updated Date:', updatedDate);   

//Question 11

// let specificDate = new Date('2024-10-13'); 
// specificDate.setDate(20);

// console.log(specificDate); 

// Question 12

// function changeMinutes(date) {
//     const newMinutes = prompt("Enter the new minutes (0-59):");

//     const minutesValue = parseInt(newMinutes, 10);

//     if (!isNaN(minutesValue) && minutesValue >= 0 && minutesValue <= 59) {
//         date.setMinutes(minutesValue);
//         console.log("Updated Date and Time:", date);
//     } else {
//         console.log("Invalid input! Please enter a value between 0 and 59.");
//     }
// }
// let time = new Date('2023-10-13T10:30:00'); 
// console.log("Original Date and Time:", time);
// changeMinutes(time); 

// Question 13

// function addHours(date, hoursToAdd) {
//     date.setHours(date.getHours() + hoursToAdd);
//     return date; 
// }
// let originalTime = new Date('2023-10-13T10:30:00'); 
// console.log("Original Date and Time:", originalTime); 

// let hoursToAdd = prompt("Enter the number of hours to add:");
// hoursToAdd = parseInt(hoursToAdd, 10);

// if (!isNaN(hoursToAdd)) {
//     let updatedTime = addHours(originalTime, hoursToAdd);
//     console.log("Updated Date and Time:", updatedTime); 
// } else {
//     console.log("Invalid input! Please enter a valid number of hours.");
// }

// Question 14

// function calculateAge() {
//     const birthDateInput = prompt("Enter your birth date (YYYY-MM-DD):");
//     const birthDate = new Date(birthDateInput);

//     if (isNaN(birthDate)) {
//         document.getElementById("result").innerText = "Invalid date format. Please use YYYY-MM-DD.";
//         return;
//     }

//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();

//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     document.getElementById("result").innerText = `Your age is: ${age} years.`;
// }

// Chapter 35 to 37 

// Question 1

// function displayAlert() {
//     alert("This is an alert message!");
// }

// displayAlert()

// Question 2

// function askName() {
//     userName = prompt("Enter name"); 
// }

// askName(); 
// console.log(userName);

//Question 3

// function greet() {
//     console.log("Hello!");
// }

// function farewell() {
//     console.log("Goodbye!");
// }

// function callFunctions() {
//     greet();    
//     farewell(); 
// }

// callFunctions()

// Question 4

// function askAndDisplayName() {
//     const userName = prompt("Enter name");
    
//     alert("Your name is: " + userName);
// }

// askAndDisplayName();

//Question 5

// function concat(A, B, C) {
//     console.log(A + B + C); 
// }

// concat("A", "B", "C")

//Question 6

// function concatenateAndAssign(param1, param2) {
//     result = param1 + param2; 
// }
// concatenateAndAssign("Hello, ", "world!"); 

// console.log(result); 

//Question 7

// function multiplyAndAssign(param1, param2, param3) {
//     result = param1 * param2 * param3; 
// }

// multiplyAndAssign(2, 3, 4); 
// console.log(result); 

//Question 8

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; 
//     }

//     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//     const average = sum / numbers.length;

//     return average;
// }

// const numArray = [10, 20, 30, 40, 50];
// const average = calculateAverage(numArray);
// console.log("Average:", average);

// Question 9

// function addNumbers(a, b) {
//     return a + b; 
// }

// const sum = addNumbers(5, 10);
// console.log("Sum:", sum); 

//Question 10

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; 
//     }

//     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//     const average = sum / numbers.length;

//     return average; 
// }

// const numArray = [10, 20, 30, 40, 50];
// const average = calculateAverage(numArray);
// console.log("Average:", average); 

// Question 11

// function multiply(a, b) {
//     return a * b; 
// }

// const result = multiply(5, 10); 

// console.log("The result is:", result); 

// Question 12

// function letterCount(word) {
//     const counts = {}; 
//     for (let letter of word) {
//         letter = letter.toLowerCase();
        
//         counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
//     }

//     return counts;
// }

// const word = "Hello World";
// const result = letterCount(word);
// console.log(result); 

//Question 13

// function setYearInDate(year) {
//     const date = new Date();
//     date.setFullYear(year); 
//     return date; 
// }

// const updatedDate = setYearInDate(2025);
// console.log("Updated Date:", updatedDate); 

//Question 14

// function calculateAge(dateOfBirth) {
//     const birthDate = new Date(dateOfBirth); 
//     const today = new Date(); 

//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();

//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age; 
// }

// const dob = "2002-05-15"; 
// const age = calculateAge(dob);
// console.log("Age:", age);

//Question 15

//Question 16

// Chapter 38

// Question 1

// function demonstrateLocalVariable() {
//     let localVar = "I am a local variable"; 

//     console.log(localVar); 
// }

// demonstrateLocalVariable(); 

// Question 2


// let globalVar = "I am a global variable";

// function accessGlobalVariable() {
//     let globalVar = "I am a local variable"; 
//     console.log(globalVar); 
// }

// accessGlobalVariable();
// console.log(globalVar); 

//Chapter 39 t 40

// function checkDayOfWeek(day) {
//     switch (day) {
//         case "Monday":
//             console.log("Start of the work week!");
//             break;
//         case "Tuesday":
//             console.log("Second day of the week.");
//             break;
//         case "Wednesday":
//             console.log("Midweek already!");
//             break;
//         case "Thursday":
//             console.log("Almost the weekend!");
//             break;
//         case "Friday":
//             console.log("Last work day of the week!");
//             break;
//         case "Saturday":
//         case "Sunday":
//             console.log("It's the weekend!");
//             break;
//         default:
//             console.log("That's not a valid day")
//                 }
// }

// checkDayOfWeek("Monday"); 
// checkDayOfWeek("Saturday"); 
// checkDayOfWeek("Holiday");

// Question 2


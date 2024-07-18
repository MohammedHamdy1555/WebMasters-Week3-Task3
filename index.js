function Sum() {
    function sumArray(numbers) {
        let sum = 0;
        for (let number of numbers) {
            sum += number;
        }
        return sum;
    }

    let userInput = prompt("Enter numbers separated by commas to add them:");
    let numbersArray = userInput.split(',').map(Number);
    let totalSum = sumArray(numbersArray);

    alert("Sum of the numbers = "+totalSum);
}

function Largest() {
    function findLargestNumber(numbers) {
        let largestNumber = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largestNumber) {
                largestNumber = numbers[i];
            }
        }
        return largestNumber;
    }
    let userInput = prompt("Enter numbers separated by commas to find the Largest Number:");
    let numbersArray = userInput.split(',').map(Number);
    let largestNumber = findLargestNumber(numbersArray);
    
    alert("The largest number is "+largestNumber);
}

function Reverse() {

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    let userInput = prompt("Enter any text to be Reversed:");
    let reversedString = reverseString(userInput);
    alert("Original Text Is: "+userInput)
    alert("Reversed Text Is: "+reversedString)
}

function Duplicate() {
    function removeDuplicatesFromUserInput() {
        let userInput = prompt("Enter numbers separated by commas to remove Duplication:");
        let numbers = userInput.split(',').map(Number);
        let uniqueNumbers = Array.from(new Set(numbers));
        return uniqueNumbers;
    }
    
    let uniqueNumbers = removeDuplicatesFromUserInput();
    alert("Numbers without duplicates: "+uniqueNumbers)
}
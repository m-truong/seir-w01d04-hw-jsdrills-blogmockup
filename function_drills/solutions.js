// Written Questions 
// 1. What is the difference between a parameter and an argument?
// The parameter is a variable input that can be passed into a function when it is first declared.
// The argument is what's passed into a function as a parameter. 

// 2. Within a function, what's the difference between return and console.log?
// The console.log is used to print messages to the terminal, but the return-statement is required for a function to give back a value that can be reused.

// Palindrome
const checkPalindrome = (word) => {
    let wordLower = word.toLowerCase(); 
    let splitString = wordLower.split(""); 
    let reverseArray = splitString.reverse(); 
    let joinString = reverseArray.join("");
    let reverseWord = joinString;
    if (joinString === wordLower ) {
        return true;
    } else {
        return false;
    }
};
// console.log(checkPalindrome("Radar")); 
console.log(checkPalindrome("Borscht"));

// Sum Array


// Prime Numbers



// Rock Paper Scissors 
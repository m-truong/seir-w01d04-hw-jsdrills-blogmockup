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
    let joinWord = reverseArray.join("");
    if (joinWord === wordLower ) {
        return true;
    } else {
        return false;
    }
};
// console.log(checkPalindrome("Radar")); 
// console.log(checkPalindrome("Borscht"));

// Sum Array
const sumArray = (arr) => {
    let sum = 0; 
    for (let k = 0 ; k < arr.length ; k++) {
        sum += arr[k]; 
    }
    return sum; 
};
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers
// Step One
/* I couldn't figure out the conditional statement required to compare 
whether the passed-in number is only evenly divisible by 1 AND itself. 
*/
const checkPrime = (n) => {
    let squareN = Math.sqrt(n);
    // console.log(squareN); 

    for (let k = 1 ; k <= squareN ; k ++) {
        if ( (n % k) !== 0  ) {
            return false;
        } 
    }
    return true; 
};

// console.log(checkPrime(25)); 


// Rock Paper Scissors 
/* I couldn't figure out the rest of the chained if-else conditions to compare 
 every possible winning situation of the computer vs. user moves possibilities 
 in the rockPaperScissors() function, but I have a very good understanding of the
 logic that would've been required to complete the problem.
 I had to move on to the Array Methods & Callbacks homework and save time. 
 */
const randomMove = () => {
    const moves = ["rock", "paper", "scissors"]; 
    let rand = (Math.floor(Math.random() * moves.length)); 
    return moves[rand];
};
// console.log(randomMove()); 

let computersMove = randomMove();

let usersMove = randomMove();

const rockPaperScissors = (computersMove, usersMove) => {
    if (computersMove === "rock" && usersMove === "paper") {
        console.log("computer chose rock");
        console.log("user chose paper");
        console.log("paper beats rock, user wins!");
    }
    return;
};
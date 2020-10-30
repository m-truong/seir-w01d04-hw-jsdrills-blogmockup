// number array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
// string array
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
nums.forEach( (n) => { 
    if (n >= 0) {
        console.log(n + " is greater than or equal to 0");
    } else {
        console.log(n + " is not greater than 0");
    }
}); 

// determine if every word shorter than 8 characters
panagram.forEach( (w) => {
    if (w.length < 8) {
        console.log(w + " is shorter than 8 chararacters");
    } else {
        console.log(w + " is not shorter than 8 chararacters");
    }
}); 

// Filter 
// Filter the array for numbers less than 4

// Filter the words than have an even length 
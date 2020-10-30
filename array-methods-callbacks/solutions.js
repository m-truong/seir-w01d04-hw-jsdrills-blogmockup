// number array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
// string array
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
const a = nums.every( (n) => { 
    return (n >= 0);
}); 
console.log(a); 

// determine if every word shorter than 8 characters
const b = panagram.every( (w) => {
    return (w.length < 8);
}); 
console.log(b);
// Filter 
// Filter the array for numbers less than 4
const c = nums.filter( (n) => {
    return (n < 4); 
});
console.log(c);

// Filter the words than have an even length 
const d = panagram.filter( (w) => { 
    return (w.length % 2 === 0); 
});
console.log(d); 

// Find
// Find the first value divisible by 5
const e = nums.find( (n) => {
    return (n % 5 ===0);
});
console.log(e);

// find the first word that is longer than 5 characters
const f = panagram.find( (w) => {
    return (w.length > 5); 
});
console.log(f); 

// Find Index 
// find the index of the first number that is divisible by 3
const g = nums.findIndex((n) => {
    return (n % 3 === 0);
}); 
console.log(g); 

// find the index of the first word that is less than 2 characters long
const h = panagram.findIndex( (w) => {
    return (w.length < 2); 
});
console.log(h);

// For Each 
// console.log each value of the nums array multiplied by 3
nums.forEach( (n) => {
    console.log(n * 3);
    return;
}); 

// console.log each word with an exclamation point at the end of it
panagram.forEach ( (w) => {
    console.log( w + "!");
    return;
});

// Map
// make a new array of each number multiplied by 100
const i = nums.map((n) => {
    return (n*100); 
});
console.log(i); 

// make a new array of all the words in all uppercase
const j = panagram.map( (w) => {
    return w.toUpperCase();
});
console.log(j);

// Some 
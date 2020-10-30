// number array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
// string array
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// .every() 
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

// .filter() 
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

// .find()
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

// .findIndex() 
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

// .forEach()
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

// .map()
// make a new array of each number multiplied by 100
const i = nums.map((n) => {
    return (n * 100); 
});
console.log(i); 

// make a new array of all the words in all uppercase
const j = panagram.map( (w) => {
    return w.toUpperCase();
});
console.log(j);

// .some() 
// Find out if some numbers are divisible by 7
const k = nums.some((n) => {
    return (n % 7 === 0);
});
console.log(k);

// Find out if some words have the letter a in them
const l = panagram.some( (w) => {
    return (w.includes("a"));
});
console.log(l);
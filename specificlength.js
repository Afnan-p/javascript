let str = "I love coding in JavaScript daily";
let length = 10;

let words = str.split(" ").filter(word => word.length === length);
console.log(words);
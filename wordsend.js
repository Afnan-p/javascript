let str = "I love coding and playing games";
let letter = "e";

let words = str.split(" ").filter(word => word.endsWith(letter));
console.log(words);
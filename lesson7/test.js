let userInput = "i like the color blue";

console.log(userInput.split(" ").map((word) => { return word[0].toUpperCase() + word.slice(1); }).join(" "));
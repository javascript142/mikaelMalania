let fruits = ['apple', 'nichurinis apple', 'grape', 'banana', 'banana'];

let filteredFruits  = [];

for (let fruit of fruits) {
    if (fruit !== 'apple') {
        filteredFruits.push(fruit);
    }
}

let filteredFruitsV1 = fruits.filter(fruit => !fruit.includes('apple'));

let filteredFruitsV2 = fruits.filter(function (fruit) {
    if (fruit !== 'apple') {
        return true;
    } else {
        return false;
    }
});

let participants = [
    "John Kennedy",
    "John Adams",
    "John Jackson",
];

let announcements = participants.map(participant => {
    return `${participant} has joined the contest`; // template string
});

// // forEach
// participants.forEach(participant => { // for (let participant of participants) 
//     console.log(`${participant} has joined the contest`);
// }); 


// reduce

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
    // console.log(accumulator, currentValue)
    return accumulator + currentValue;
});

// console.log(sum);

// every

let isAllFruits = fruits.every(fruit => {
    return fruit.includes('apple');
});

console.log(isAllFruits);

// some
let usernames = ['flappyBird', 'gamer123', 'admin', 'admin123'];
let userPrompt = prompt('Enter username');
let isUsernameTaken = usernames.some(username => {
    return username.includes(userPrompt);
});

if (isUsernameTaken) {
    alert('Username is taken');
}
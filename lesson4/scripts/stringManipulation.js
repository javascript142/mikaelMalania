let password = 'abcd1234abcdPOP';
console.log(password.slice(0,1) + password.slice(1, 2).toUpperCase()+password.slice(2, password.length));
// get a length of the string
console.log(password.length);

let userTopics = 'HTML,CSS,JavaScript,React';

// split the string into an array
console.log(userTopics.split(','));

// slice the string
console.log(password.slice(0, 4));

// extract a substring
console.log(password.substring(0, 4));

// replace a string
console.log(password.replace('abcd', 'zxcv'));

// replace all occurrences of a string
console.log(password.replace(/abcd/g, 'zxcv')); // regular expression variant
console.log(password.replaceAll('abcd', 'zxcv')); // ES2021 variant

// convert string to upper case
console.log(password.toUpperCase()); // changes the original string to upper case
// convert string to lower case
console.log(password.toLowerCase()); // changes the original string to lower case

// concatinate strings
console.log(password.concat('1234'));
console.log(password + '1234');

// trim a string
let passwordWithSpaces = '    abcd1234abcdPOP    ';
console.log('=' + passwordWithSpaces + '=');
console.log('=' + passwordWithSpaces.trim() + '=');

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

let arrayOfColors = ['red', 'green', 'blue', 'yellow', 'orange', 'black'];

let copiedArrayOfColors = arrayOfColors;
// copiedArrayOfColors.pop();

let shadowCopiedArrayOfColorsV1 = arrayOfColors.slice(); // shadow copy of original array 
// shadowCopiedArrayOfColors.pop();
// console.log(arrayOfColors);
// console.log(shadowCopiedArrayOfColors);

let shadowCopiedArrayOfColorsV2 = [...arrayOfColors]; // ... <= spread operator, shadow copy of original array

let shadowCopiedArrayOfColorsV3 = Array.from(arrayOfColors); // shadow copy of original array
shadowCopiedArrayOfColorsV3.pop();
// console.log(arrayOfColors);
// console.log(shadowCopiedArrayOfColorsV3);

let shadowCopiedArrayOfColorsV4 = arrayOfColors.concat(); // shadow copy of original array
shadowCopiedArrayOfColorsV4.pop();
console.log(arrayOfColors);
console.log(shadowCopiedArrayOfColorsV4);


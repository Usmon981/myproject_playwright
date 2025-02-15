// let a = [1, 2, 3];
// let b = [3, 2, 1];

// let output = a.map((num, index) => num + b[index]);
// console.log(output);
let a = 'java937script';
let reversed = a.split(/(\d+)/).map(part => part.split('').reverse().join('')).join('');
console.log(reversed);


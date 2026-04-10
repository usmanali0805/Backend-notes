const fs = require('fs');

const file = fs.readFileSync('welcome.txt', 'utf-8');
console.log(file)

const right = fs.writeFileSync('welcome.txt', 'helloooooo world')
console.log(right)
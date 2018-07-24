const path = require('path');
console.log(path);
let myPath = path.join(__dirname,'///a','bbb///');
console.log(myPath);

let yourPath = path.resolve('./a1/a2.js');
console.log(yourPath);

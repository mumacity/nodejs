const path = require('path');
let myPath = path.join(__dirname,'a','b','c.txt');
let obj = path.parse(myPath);
obj.base = 'd.js';
let formatPath = path.format(obj);
console.log(formatPath);

const fs = require('fs');
let data = fs.readFileSync('a.txt','utf8');
fs.writeFileSync('b.txt',data);
console.log('success');

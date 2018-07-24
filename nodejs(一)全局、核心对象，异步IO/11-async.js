const fs = require('fs');

console.log('异步之前的工作')
fs.readFile('./a.txt','utf-8',(err,data)=>{
  if(err) throw err;
  console.log(data);
  console.log('异步');
})
console.log('异步之后的工作');

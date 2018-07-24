const fs = require('fs');
fs.readFile('./a.txt','utf8',(err,data)=>{
  if(err) throw err;
  console.log(data);
})
fs.readFile('./a.txt',(err,data)=>{
  if(err) throw err;
  console.log(data.toString());//data.toString('utf8')默认也是utf8
})

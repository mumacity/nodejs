const fs = require('fs');

fs.appendFile('a.txt','追加内容',(err)=>{
  if(err) throw err;
  console.log('追加完成！')
})

fs.writeFile('a.txt','mumacity',{flag:'a'},(err)=>{
  if(err) throw err;
  console.log('success!');
})

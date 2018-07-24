const fs = require('fs');
fs.writeFile('./a.txt',"向文件中添加内容",(err)=>{
  if(err) throw err;
  console.log("文件写入成功！");
})

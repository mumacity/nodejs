let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let sum = num1 + num2;

console.log("正在计算，请稍后。。。");

setTimeout(()=>{
  console.log(sum);
},2000);

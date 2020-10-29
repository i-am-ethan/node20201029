// console.log('Hello world');

//non blocking 
setTimeout(function(){
  console.log('1');
}, 1000);
console.log(2);

//blocking
var start = new Date().getTime();
while(new Date().getTime()<start+1000);
console.log("world");
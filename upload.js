var fs =require('fs')
var fs=require('fs');
fs.readFile('./test1.txt','utf-8',function(err,data){ // 异步  把返回的值赋给回调函数里的data
	if(err){
		console.log(err)
	}else{
		console.log(123)
		setTimeout(function(){
			console.log(data)
		},200)
	}
})
console.log('end')

// function getData(data){
// 	setTimeout(function(data){
// 		console.log(data)
// 	},200)
// }




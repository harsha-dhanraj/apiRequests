const request=require('request');
var connOpt={
	url:"http://localhost:3000",	
	method:'GET'
}
request(connOpt,(err,response,body)=>{		
	res = JSON.parse(body);
	if(res.success)
		console.log(res.devices);
	else {
		console.log(res.msg);		
	}			
});
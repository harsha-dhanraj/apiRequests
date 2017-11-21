const request =require('request');
const fs =  require("fs");
const moment = require("moment");
var temp = fs.readFileSync("/sys/class/thermal/thermal_zone0/temp");
var temp_c = (temp/1000).toString()+"°C";
var payload={
    name:"IPC302",
    type:"DEATH HANG.GG.!!",
    owners:["YAMRAJ","JUDGE SAHAB"],
    cpuTemp: temp_c,
    timestamp: moment().format('llll')
}

var connOpt={
    url:"http://localhost:3000",
    method:'POST',
    headers:{
        'content-Type':'application/json'
    },
    json:payload

}

request(connOpt,(err,res,body)=>{

    if(body.success){
        console.log("Device is registered successfully");
        console.log(body.device);
    }else {
        console.log(body.msg);	
    }	
});
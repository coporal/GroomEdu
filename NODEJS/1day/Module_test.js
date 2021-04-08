var os = require('os');

var util=require('util');
var data=util.format('%d,%s,%j',6,'chapter',{cotent:'module'});

var fs = require ('fs');

console.log(os.tmpdir());
console.log(os.type());

console.log(data);

fs.readFile('text.txt','utf8',function(err,data){
    console.log('비동기적 읽기'+data);
});

var text=fs.readFileSync('hello.txt','utd 8');
console.log('동기적 읽기'+text);

var cpus = os.cpus();
for(var i = 0; i < cpus.length; i++) {
	console.log("CPU[" + (i+1) + "]");
	console.log("model: " + cpus[i].model);
	console.log("speed: " + cpus[i].speed);
}

util.log('message');
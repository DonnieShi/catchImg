const request = require('request');
const path = require('path');
const fs = require('fs')

const config = require('./config');
const analyze = require('./analyze');
const querystring = require('querystring')

function start(){
	request(config.url,function(err,res,body){
		console.log('start',res.statusCode)
		if (!err && res.statusCode == 200) {
			analyze.findImg(body,download)
		}
	})
}

function download(imgUrl,i){
	let ext = 'jpg'
	request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir,i+'.'+ext),{
		'encoding':'utf8'
	}))
}

start()
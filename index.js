//var fs       = require('fs')
var Download = require('download');
var src      = process.env.SRC   || './urls.json';
var dst      = process.env.DST   || 'pics';
var mode     = process.env.MODE  || '755';
var sleep    = process.env.SLEEP || 5000000; // = 5 seconds
var urls     = require(src);
var download = new Download({ mode: mode });


//try {
//	fs.mkdirSync(dst);
//} catch(e) {}

function done(err, files) {
	if (err) throw err;
	console.log(files.length + ' downloaded');
}

for(var i=0; i < urls.length; i++) {
	var url = urls[i];
	download.get(url);
	console.log(i + ' of ' + urls.length + ': ' + url);
}

download.dest(dst).run(done);

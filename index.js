//var fs       = require('fs')
var Download = require('download');
var src      = process.env.SRC   || './urls.json';
var dst      = process.env.DST   || 'pics';
var mode     = process.env.MODE  || '755';
var sleep    = process.env.SLEEP || 5000000; // = 5 seconds
var urls     = require(src);
var numeric  = process.env.NUMERIC_ORDER || false;
var download = new Download({ mode: mode });
var counter  = 0;


//try {
//	fs.mkdirSync(dst);
//} catch(e) {}

function rename(name) {
	counter++;
	name.basename = counter;
	return name;
}

function done(err, files) {
	if (err) throw err;
	console.log(files.length + ' downloaded');
}

for(var i=1; i <= urls.length; i++) {
	var url = urls[i-1];
	download.get(url);
	console.log(i + ' of ' + urls.length + ': ' + url);
}

if (numeric) download.rename(rename);
download.dest(dst).run(done);

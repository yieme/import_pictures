//var fs       = require('fs')
var Download = require('download');
var src      = process.env.SRC   || './urls.json';
var dst      = process.env.DST   || 'pics';
var mode     = process.env.MODE  || '755';
var sleep    = process.env.SLEEP || 5000000; // = 5 seconds
var urls     = require(src);
var download = new Download({ mode: mode });
var numeric  = process.env.NUMERIC_ORDER || false;


//try {
//	fs.mkdirSync(dst);
//} catch(e) {}

function done(err, files) {
	if (err) throw err;
	console.log(files.length + ' downloaded');
}

for(var i=1; i <= urls.length; i++) {
	var url = urls[i-1];
	if (numeric) {
		var ext = url.split('.');
		var dstfil = dst + '/' + i + '.' + ext[ext.length-1];
		download.get(url, dstfil);
	} else {
		download.get(url);
	}
	console.log(i + ' of ' + urls.length + ': ' + url);
}

download.dest(dst).run(done);

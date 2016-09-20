var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request : '+ Date().toString() + ' '+ req.method + ' ' + req.originalUrl);
		next();
	}
} ;

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req, res){
	res.send('About US \n');

});

app.use(express.static(__dirname+'/public'));
//console.log();

app.listen(PORT,function(){
	console.log('server started on port ' + PORT);
});
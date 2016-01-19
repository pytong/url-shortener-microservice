'use strict';

let express = require('express'),
	routes = require('./app/routes/index.js'),
	app = express();

app.use('/public', express.static('public'));
app.use('/', express.static('app'));

routes(app);

let port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
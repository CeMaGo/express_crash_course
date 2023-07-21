// create express server 1st require the express lib we downloaded
// the setup the actual server by creating app vaiable which is aclling express as a function
const express = require('express');
const app = express();

//to make server/run or  listen we pass it a port number

app.listen(3000);
// now the server is listening on port 3000 for a bunch of requests
//? can now go to loaclhost.3000 to check
// now basically any Http method is avaible to use Get,put,post,delete,patch

app.get('/', (req, res) => {
	console.log('here');
	res.render('index');
});

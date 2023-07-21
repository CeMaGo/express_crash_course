const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
// app.use(logger);
app.listen(3000);

// app.get('/', logger, (req, res) => {
// 	res.render('index', { text: 'World' });
// });

const userRouter = require('./routes/users');

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}

app.use('/users', userRouter);

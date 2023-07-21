const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
	console.log(req.query.name);
	res.send('User List');
});

router.get('/new', (req, res) => {
	res.render('users/new', { firstName: 'test' });
	// res.send('User New Form');
});

router.post('/', (req, res) => {
	const isValid = true;
	if (isValid) {
		users.push({ firstName: req.body.firstName });
		res.redirect(`/users/${users.length - 1}`);
	} else {
		console.log('ERROR creating new user');
		res.render('users/new', { firstName: req.body.firstName });
	}
	console.log('hi', req.body.firstName);
	res.send('Hi');
});

router
	.route('/:id')
	.get((req, res) => {
		console.log(req.user);
		res.send(`Get User With ID ${req.params.id}`);
	})
	.put((req, res) => {
		res.send(`Update User With ID ${req.params.id}`);
	})
	.delete((req, res) => {
		res.send(`Delete User With ID ${req.params.id}`);
	});

const users = [{ name: 'kyle' }, { name: 'sally' }]; //.param gets triggert when an param argument fits?

router.param('id', (req, res, next, id) => {
	req.user = users[id];
	next();
});

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}

module.exports = router;

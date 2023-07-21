const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('User List');
});

router.get('/new', (req, res) => {
	res.send('User New Form');
});

router.post('/', (req, res) => {
	res.send('Create User');
});

//! make sure to put static req bove dynamic req in order to not disrupt reading flow of the code

//* now since express is smart, hey chained together all these similar req -- this way you can chain on the get,put,delete

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

module.exports = router;

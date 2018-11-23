const Customer = require('../models/customer.models');
const express = require('express');
const router = express.Router();

router.post('/customer', (req, res) => {
	if(!req.body) {
		return res.status(404).send('Rekèt lan manke');
	}

	const model = new Customer(req.body)
	model.save()
	.then(data => {
		if(!data || data.length == 0) {
			return res.status(500).send(data);			
		}
		res.status(201).send(data);
	})
	.catch(err => {
		res.status(500).json(err)
	})
	
});

router.get('/customer', (req, res) => {
	if(!req.query.email) {
		return res.status(400).send('Paramèt URL lan manke: email');
	}
	Customer.findOne({
		email: req.query.email,
	})
		.then(data => {
		res.json(data);
	})
		.catch(err => {
		res.status(500).send(err)
	})
});

router.put('/customer', (req, res) => {
	if(!req.query.email) {
		return res.status(400).send('Paramèt URL lan manke: email');
	}

	Customer.findOneAndUpdate({
		email: req.query.email
	}, req.body, {
		new: true
	})
		.then(data => {
		res.json(data);
		})
		.catch(err => {
		res.status(500).send(err);
		})
});


router.delete('/customer', (req, res) => {
	if(!req.query.email) {
		return res.status(400).send('Paramèt URL lan manke: email');
	}

	Customer.findOneAndRemove({
		email: req.query.email
	})
	.then(data => {
		res.json(data);
	})
	.catch(err => {
		res.status(500).send(err);
	})
});



module.exports = router;

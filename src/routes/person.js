const express = require('express');
const router = express.Router();

router.get('/person', (req, res) => {
	if(req.query.name) {
		res.send(`Ou mande pou ${req.query.name}`);
	}else{
		res.send('Ou mande pou yon moun');
	}
});

router.get('/person/:name', (req, res) => {
	res.send(`Ou mande pou ${req.params.name}`);
});

router.get('/error', (req, res) =>  {
	throw new Error('Yon erè planifye')
})

module.exports = router;

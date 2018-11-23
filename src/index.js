const express = require("express")
const path = require('path');
const bodyParser = require('body-parser');
const customer = require('./routes/customer');
const person = require('./routes/person');

app = express()
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(person);

app.use(customer);
app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`)
	next();
})

// Reket lan pa ekziste érè 404
app.use((req, res, next) => {
	res.status(404).send('Nou panse\'w pèdi ')
});

// Kaptè pou érè 500
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Ou konekte sou nimewo: ${PORT}`))

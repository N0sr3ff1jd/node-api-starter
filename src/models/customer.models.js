const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const customerSchema = new Schema({
	name: String,
	email: { type: String, require: true, unique: true}

});

module.exports = mongoose.model('Customer', customerSchema)

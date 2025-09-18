const connection = require('../data/db');

// Index
const index = (req, res) => {
	console.log('Metodo Index')
};

// Show
const show = (req, res) => {
	console.log('Metodo Show')
};

module.exports = {
	index,
	show
};
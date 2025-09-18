const connection = require('../data/db');

// Index
const index = (req, res) => {
	const sql = "SELECT * FROM movies"
	connection.query(sql, (err, results) => {
		if(err)return res.status(500).json({error: `Errore nell'esecuzione della query: ${err}`})
			res.send(results);
	})
};

// Show
const show = (req, res) => {
	console.log('Metodo Show')
};

module.exports = {
	index,
	show
};
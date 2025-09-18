const express = require('express');
const connection = require('./data/db');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.get("/", (req, res) => {
	res.send("Rotta base della Cineteca")
});
app.listen(port, () =>{
	console.log(`Server in ascolto sulla porta ${port}`)
});
const express = require('express');
const app = express();
const port = 3000;
app.get("/", (req, res) => {
	res.send("Rotta base della Cineteca")
});
app.listen(port, () =>{
	console.log(`Server in ascolto sulla porta ${port}`)
});
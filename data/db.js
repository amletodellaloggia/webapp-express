const mysql = require("mysql2");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "db_movies",
});
connection.connect((err) =>{
	if(err){
		console.log(`Errore nella connessione al DataBase: ${err}`)
	}
	else{
		console.log("Connessione al DataBase avvenuta con successo.")
	};
});
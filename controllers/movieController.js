const connection = require("../data/db");

// Index
const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ error: `Errore nell'esecuzione della query: ${err}` });
    res.send(results);
  });
};

// Show
const show = (req, res) => {
  const { id } = req.params;
  const sqlMovie = "SELECT * FROM movies WHERE id = ?";
  const sqlReviews = "Select * FROM reviews WHERE movie_id = ?";

  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err)
      return res
        .status(500)
        .json({ error: `Errore nell'esecuzione della query: ${err}` });
    if (resultMovie.length === 0 || resultMovie[0].id === null)
      return res.status(404).json({ error: `Film non trovato.` });

    connection.query(sqlReviews, [id], (err, resultReviews) => {
      if (err)
        return res
          .status(500)
          .json({ error: `Errore nell'esecuzione della query: ${err}` });
      const moviesWithReviews = {
        ...resultMovie[0],
        reviews: resultReviews,
      };
      res.send(moviesWithReviews);
    });
  });
};

module.exports = {
  index,
  show,
};

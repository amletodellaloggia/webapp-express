const connection = require("../data/db");

// Index
const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ error: `Errore nell'esecuzione della query: ${err}` });
    const movies = results.map((movie) => {
      return {
        ...movie,
        image: req.imagePath + movie.image,
      };
    });
    res.send(movies);
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

    resultMovie[0].image = req.imagePath + resultMovie[0].image;
    
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

const storeReview = (req, res) => {
  const {id} = req.params;
  const {text, name, vote} = req.body;
  const sql = "INSERT INTO reviews (movie_id, name, vote, text) VALUES(?, ?, ?, ?)";

  connection.query(sql, [id, name, vote, text], (err, result) => {
    if(err) return res.status(500).json({result: false, message: "Errore durante l'inserimento della recensione"});
    res.status(201).json({result: true, message: "Recensione inserita correttamente"});
  })
}

module.exports = {
  index,
  show,
  storeReview
};

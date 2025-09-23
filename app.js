const express = require("express");
const cors = require("cors");
const connection = require("./data/db");
const imagepathMiddleware = require("./middlewares/imagePathMiddleware.js")
const errorsHandler = require('./middlewares/errorsHandler.js')
const app = express();
const port = process.env.PORT;
const movieRouter = require("./routers/movieRouter");

app.use(express.json());
app.use(cors({origin: process.env.FE_APP}));
app.use(express.static("public"));
app.use(imagepathMiddleware);
app.get("/", (req, res) => {
  res.send("Rotta base della Cineteca");
});
app.use("/api/movies", movieRouter);
app.use(errorsHandler);
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});



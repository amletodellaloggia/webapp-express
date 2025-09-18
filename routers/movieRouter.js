const express = require('express');
const router = express.Router();
const bookController = require("../controllers/movieController");

// Index
router.get('/', bookController.index);

// Show
router.get('/:id', bookController.show);

module.exports = router;
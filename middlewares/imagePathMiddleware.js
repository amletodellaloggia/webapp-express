const setImagePath = (req, res, next) => {
	req.imagePath = `${req.protocol}://${req.get('host')}/imgs/books/`;
	next();
}

module.exports = setImagePath;
module.exports = (req, res, next) => {
	if (req.cookies.artesphera) {
		req.session.userLogin = req.cookies.artesphera;
	}
	next();
};

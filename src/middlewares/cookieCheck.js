module.exports = (req, res, next) => {
    if (req.cookies.del) {
        req.session.userLogin = req.cookies.del;
    }
    next();
};

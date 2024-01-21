module.exports = (req, res) => {
    req.session.destroy();
    res.cookie('artesphera', null, {
        maxAge: -1,
    });

    return res.redirect('/');
};

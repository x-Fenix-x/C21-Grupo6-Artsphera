const { readJSON } = require('../../data');

module.exports = (req, res) => {
    const users = readJSON('users.json');
    const categories = readJSON('categories.json');
    const id = req.params.id;

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.redirect('/users/login');
    }

    return res.render('profile', {
        categories,
        users,
        user,
    });
};

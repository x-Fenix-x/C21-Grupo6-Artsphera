const { readJSON, writeJSON } = require('../../data');
const { validationResult } = require('express-validator');
const User = require('../../data/User');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const users = readJSON('users.json');
        const newUser = new User(req.body);

        users.push(newUser);

        writeJSON(users, 'users.json');

        return res.redirect('/users/login');
    } else {
        const categories = readJSON('categories.json');
        return res.render('register', {
            categories,
            errors: errors.mapped(),
            old: req.body,
        });
    }
};

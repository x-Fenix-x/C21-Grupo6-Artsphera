const { readJSON, writeJSON } = require("../../data");
const { hashSync } = require("bcryptjs");

module.exports = (req, res) => {
    const users = readJSON("users.json");
    const { name, surname, email, password } = req.body;
    const userUpdate = users.find((user) => user.id === req.params.id);

    if (name) {
        userUpdate.name = name.trim();
    }

    if (surname) {
        userUpdate.surname = surname.trim();
    }

    if (email) {
        userUpdate.email = email.trim();
    }

    if (password) {
        userUpdate.password = hashSync(password, 10);
    }

    writeJSON(users, "users.json");

    return res.redirect(`/users/profile/${req.params.id}`);
};

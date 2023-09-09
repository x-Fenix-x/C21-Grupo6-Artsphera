const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
    const users = readJSON("users.json");
    const { name, surname, email, password } = req.body;
    const userUpdate = users.find((user) => user.id === +req.params.id);

    if (name) {
        userUpdate.name = name.trim();
    }

    if (surname) {
        userUpdate.surname = surname.trim();
    }

    if (email) {
        userUpdate.email = email;
    }

    if (password) {
        userUpdate.password = password;
    }

    writeJSON(users, "users.json");

    return res.redirect(`/users/profile/${+req.params.id}`);
};

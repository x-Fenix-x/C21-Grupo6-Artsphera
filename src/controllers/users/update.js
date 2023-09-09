const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
    const users = readJSON("users.json");
    const { name, surname, email, password } = req.body;
    const userUpdate = users.find((user) => user.id === +req.params.id);

    userUpdate.name = name.trim();
    userUpdate.surname = surname.trim();
    userUpdate.email = email;
    userUpdate.password = password;

    writeJSON(users, "users.json");

    return res.redirect(`/users/profile/${+req.params.id}`);
};

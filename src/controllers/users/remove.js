const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
    const userId = +req.params.id;
    const users = readJSON("users.json");

    const userRemove = users.find((user) => user.id === userId);

    if (!userRemove) {
        return res.status(404).send("Usuario no encontrado");
    }

    const usersModify = users.filter((user) => user.id !== userId);

    writeJSON(usersModify, "users.json");

    return res.redirect("/");
};

const express = require ("express");
const { login, register, adminPanel, profile, update, remove} = require("../controllers/usersController");
const router = express.Router();

/* Users */
router
    .get("/login", login)
    .get("/register", register)
    .get("/admin", adminPanel)
    .get("/profile/:id", profile)
    .put("/update/:id", update)
    .delete("/delete/:id", remove);

module.exports = router;

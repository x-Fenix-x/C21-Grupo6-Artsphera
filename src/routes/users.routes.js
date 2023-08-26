const express = require ("express");
const { login, register, adminPanel } = require("../controllers/usersController");
const router = express.Router();

/* Users */
router
    .get("/login", login)
    .get("/register", register)
    .get("/admin", adminPanel)

module.exports = router;

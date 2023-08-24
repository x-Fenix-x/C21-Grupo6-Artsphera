const express = require("express");
const { detail, add, edit } = require("../controllers/productsController");
const router = express.Router();

/* Productos */
router.get("/detail", detail).get("/add", add).get("/edit/:id", edit);

module.exports = router;

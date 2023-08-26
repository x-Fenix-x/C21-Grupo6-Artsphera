const express = require("express");
const { detail, add, create, edit, update } = require("../controllers/productsController");
const router = express.Router();

/* Productos */
router
    .get("/detail", detail)
    .get("/add", add)
    .post("/add", create)
    .get("/edit/:id", edit)
    .put("/update/:id", update)

module.exports = router;

const express = require("express");
const { detail, add, create, edit, update } = require("../controllers/productsController");
const router = express.Router();
const upload = require("../middlewares/upload")

/* Productos */
router
    .get("/detail", detail)
    .get("/add", add)
    .post("/add", create, upload.single("image"))
    .get("/edit/:id", edit)
    .put("/update/:id", update)

module.exports = router;
